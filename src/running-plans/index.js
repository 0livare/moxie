import generator from './planGenerator'

import halfNoviceHigdonSpec from './specs/half-novice-higdon-spec'
let halfNoviceHigdonPlan = generator(halfNoviceHigdonSpec)

import marathonNoviceHigdonSpec from './specs/marathon-novice-higdon-spec'
let marathonNoviceHigdonPlan = generator(marathonNoviceHigdonSpec)

export {halfNoviceHigdonPlan, marathonNoviceHigdonPlan}
