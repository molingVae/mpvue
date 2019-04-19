/* eslint-disable camelcase */
import { MOVIES_ARR, RECEIVE_LIST } from './mutations-type'
export default {
  [ RECEIVE_LIST ] (state, { list_data }) {
    state.listTmp = list_data
    // console.log( state )
  },
  [ MOVIES_ARR ] (state, data) {
    state.moviesArr = data
    console.log(state)
  }
}
