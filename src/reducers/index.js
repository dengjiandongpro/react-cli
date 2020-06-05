import { INCREASE, DECREASE } from '../action'

export default function counter(state = {count:0}, action) {
    const count = state.count
    switch (action.type) {
        case INCREASE:
          return { count: count + 1 }
        case DECREASE:
          return { count: count - 1}
        default:
          return state
    }
}