export default {
  name: 'Hal Higdon Marathon Training: Novice 1',
  lengthInWeeks: 18,
  standardWeek: {
    1: 'Rest',
    2: '3m run',
    3: '3m run',
    4: '3m run',
    5: 'Rest',
    6: '6m run',
    7: 'Cross',
  },
  dayEquations: {
    valueGenerators: {
      3: w => Math.floor((w-1)/2) + 3,
    },
    textGenerators: {
      3: val => val + 'm run',
    }
  },
  weekOverride: {
    2: {6: '7m run'},
    3: {6: '5m run'},
    4: {6: '9m run'},
    5: {6: '10m run'},
    6: {6: '7m run'},
    7: {6: '12m run'},
    8: {
      6: 'Rest',
      7: 'Half Marathon',
    },
    9: {
      4: '4m run',
      6: '10m run',
    },
    10: {
      4: '4m run',
      6: '15m run',
    },
    11: {
      2: '4m run',
      4: '4m run',
      6: '16m run',
    },
    12: {
      2: '4m run',
      4: '5m run',
      6: '12m run',
    },
    13: {
      2: '4m run',
      4: '5m run',
      6: '18m run',
    },
    14: {
      2: '5m run',
      4: '5m run',
      6: '14m run',
    },
    15: {
      2: '5m run',
      4: '5m run',
      6: '20m run',
    },
    16: {
      2: '5m run',
      3: '8m run',
      4: '4m run',
      6: '12m run',
    },
    17: {
      2: '4m run',
      3: '6m run',
      4: '3m run',
      6: '8m run',
    },
    18: {
      3: '4m run',
      4: '2m run',
      6: 'Rest',
      7: 'MARATHON',
    },
  }
}