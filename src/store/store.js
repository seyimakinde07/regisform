import { createStore, combineReducers } from 'redux'
import { appLayoutReducer } from './reducer/app-layout-reducer';
import { campaignReducer } from './reducer/campaign-reducer';
import { authReducer } from './reducer/auth-reducer';
export default createStore(combineReducers({
    layout: appLayoutReducer,
    campaign: campaignReducer,
    auth: authReducer
}));
