const ADD_GUN = '+++++++++++++'
const REDUCE_GUN = '-----------'

//  ruducer
export function counter(state=0,action) {
  switch (action.type){
    case ADD_GUN:
      return state+1;
    case REDUCE_GUN:
      return state-1;
    default:
      return 10;
  }
}

export function addGun() {
  return {type: ADD_GUN}
}
export function reduceGun() {
  return {type: REDUCE_GUN}
}

export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun())
    },1000)
  }
}

export function reduceGunAsync() {
  return dispatch => {
    setTimeout(()=>{
      dispatch(reduceGun())
    },2000)
  }
}