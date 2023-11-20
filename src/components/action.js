import { DECCREMENT, INCREMENT, RESET } from "./actionTypes"

export const incrementCounter = ()=> {
    return {
        type:INCREMENT
    }
}
export const deccrementCounter = ()=> {
    return {
        type:DECCREMENT
    }
}
export const resetCounter = ()=> {
    return {
        type:RESET
    }
}