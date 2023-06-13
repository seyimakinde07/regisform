import { actions } from "../action-types/campaign-aciton-types";
import { _state } from "../states/campaign-state";

export const campaignReducer = (state = _state, { type, payload }: any) => {
    switch (type) {
        case actions.GET_CAMPAIGN: {
            console.log('started');
            return {
                ...state,
                campaign: payload
            }
        }

        case actions.GET_ALL_CAMPAIGN: {
            return {
                ...state,
                campaignList: payload
            }
        }

        default:
            return state
    }
}