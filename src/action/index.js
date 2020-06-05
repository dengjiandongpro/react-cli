
export const INCREASE = 'increase'
export const increaseAction = () => {
    return { type: INCREASE }
}

export const  DECREASE = 'decrease'
export const  decreaseAction = () => {
    return { type: DECREASE }
}

export const  ASYNCINCREASE = 'asyncIncrease'
export const  asyncIncreaseAction = () => {
    return (dispatch) => {
        setTimeout(function () {
            dispatch(increaseAction())
        }, 2000)
     }
}