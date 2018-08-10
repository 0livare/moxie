export default {
  name: 'Hal Higdon Half Marathon Training: Novice',
  lengthInWeeks: 12,
  standardWeek: {
    1: 'Stretch & Strengthen',
    2: '3m run',
    3: '2m run or cross',
    4: '3m run + strength',
    5: 'Rest',
    6: '30 min cross',
    7: '4m run',
  },
  dayEquations: {
    valueGenerators: {
      2: w => 0.5 * Math.floor(w/2)     + 3,
      3: w =>       Math.floor((w-1)/6) + 2,
      4: w => 0.5 * Math.floor(w/2)     + 3,
      6: w => 10  * Math.floor((w-1)/2) + 30,
      7: w =>       Math.floor((w-1)/2) + 4,
    },
    textGenerators: {
      2: val => val + ' mile run',
      3: val => val + ' mile run or cross training',
      4: val => val + ' mile run + strength',
      6: val => val + ' minute cross training session',
      7: val => val + ' mile run'
    }
  },
  weekOverride: {
    6:  {7: '5K Race'},
    9:  {7: '10K Race'},
    12: {7: 'HALF MARATHON'},
  }
}