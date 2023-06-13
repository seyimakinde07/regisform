import { actions } from "../action-types/auth-acton-types";
import { _state } from "../states/auth-state";

export const authReducer = (state = _state, { type, payload }: any) => {
    switch (type) {
        case actions.LOGINUSER: {
            localStorage.setItem('token', payload)
            return {
                ...state,
                token: payload,
            }
        }
        case actions.LOG_OUT_USER: {
            localStorage.removeItem('token')
            return {
                ...state,
            }
        }


        default:
            return state
    }
}