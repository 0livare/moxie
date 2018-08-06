export default function generatePlanFromSpec(spec) {
  let weeks = []
  for (let w=1; w <= spec.lengthInWeeks; ++w) {
    weeks[w] = []
    for (let d=1; d <= 7; ++d) {

      // Check the override.  If an override is specified
      // for this week and day, then this is respected over
      // anything else.
      let weekOverride = spec.weekOverride[w]
      if (weekOverride !== undefined) {
        let dayOverride = weekOverride[d]

        if (dayOverride !== undefined) {
          weeks[w][d] = dayOverride
          continue
        }
      }

      // If no override has been specified, then check for 
      // the existance of generators.  These are predefined 
      // functions for generating the value and text for this day
      let valGenerator = spec.dayEquations.valueGenerators[d]
      let val = 0
      if (valGenerator !== undefined) {
        val = valGenerator(w)
      }

      let textGenerator = spec.dayEquations.textGenerators[d]
      if (textGenerator !== undefined) {
        weeks[w][d] = textGenerator(val)
        continue
      }

      // Finally, if no specific override has been specified, 
      // and there is no generator function specified, then 
      // fallback to what was defined in the standard week.
      // This is useful for instance if a certain day of every 
      // week is always the same.  And then if one day were 
      // different, an override could be specified for just that 
      // particular day.
      weeks[w][d] = spec.standardWeek[d]
    }
  }

  return weeks
}