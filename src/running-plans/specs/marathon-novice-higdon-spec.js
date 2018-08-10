export default {
  name: 'Hal Higdon Marathon Training: Novice 1',
  lengthInWeeks: 18,
  standardWeek: {
    1: 'Rest',
    2: '3 mile run',
    3: '3 mile run',
    4: '3 mile run',
    5: 'Rest',
    6: '6 mile run',
    7: 'Cross training',
  },
  dayEquations: {
    valueGenerators: {
      3: w => Math.floor((w-1)/2) + 3,
    },
    textGenerators: {
      3: val => val + ' mile run',
    }
  },
  weekOverride: {
    2: {6: '7 mile run'},
    3: {6: '5 mile run'},
    4: {6: '9 mile run'},
    5: {6: '10 mile run'},
    6: {6: '7 mile run'},
    7: {6: '12 mile run'},
    8: {
      6: 'Rest',
      7: 'Half Marathon',
    },
    9: {
      4: '4 mile run',
      6: '10 mile run',
    },
    10: {
      4: '4 mile run',
      6: '15 mile run',
    },
    11: {
      2: '4 mile run',
      4: '4 mile run',
      6: '16 mile run',
    },
    12: {
      2: '4 mile run',
      4: '5 mile run',
      6: '12 mile run',
    },
    13: {
      2: '4 mile run',
      4: '5 mile run',
      6: '18 mile run',
    },
    14: {
      2: '5 mile run',
      4: '5 mile run',
      6: '14 mile run',
    },
    15: {
      2: '5 mile run',
      4: '5 mile run',
      6: '20 mile run',
    },
    16: {
      2: '5 mile run',
      3: '8 mile run',
      4: '4 mile run',
      6: '12 mile run',
    },
    17: {
      2: '4 mile run',
      3: '6 mile run',
      4: '3 mile run',
      6: '8 mile run',
    },
    18: {
      3: '4 mile run',
      4: '2 mile run',
      6: 'Rest',
      7: 'MARATHON',
    },
  }
}