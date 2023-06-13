import { actions } from "../action-types/campaign-aciton-types"
import axiosInstance from "../../axios/axiosInstance";
import { startSpining, stopSpining } from "./app-layout-actions";
import { AxiosResponse } from "axios";
import { type } from "os";

export const getCampaigns = () => (dispatch: any) => {
    startSpining()(dispatch);
    const payload = {}
    const campainList = [
        { title: 'Email to choir', date: '12/12/2020', audience: 'First timers', openRate: '50%', noOfCLicks: '10', status: 'Sent' },
        { title: 'Email to choir', date: '12/12/2020', audience: 'First timers', openRate: '50%', noOfCLicks: '10', status: 'Draft' },
        { title: 'Email to choir', date: '12/12/2020', audience: 'First timers', openRate: '50%', noOfCLicks: '10', status: 'Sent' },
        { title: 'Email to choir', date: '12/12/2020', audience: 'All leaders and workers', openRate: '50%', noOfCLicks: '10', status: 'Scheduled' },
        { title: 'Email to choir', date: '12/12/2020', audience: 'All leaders and workers', openRate: '50%', noOfCLicks: '10', status: 'Draft' },
        { title: 'Welcome to church. God bless you!', date: '12/12/2020', audience: 'Some new converts', openRate: '50%', noOfCLicks: '10', status: 'Sent' },
        { title: 'Email to choir Email to choir', date: '12/12/2020', audience: 'First timers', openRate: '50%', noOfCLicks: '10', status: 'Sent' }
    ];
    dispatch({ type: actions.GET_ALL_CAMPAIGN, payload: campainList })
    // axiosInstance.post('', payload).then((res: any) => {
    //     dispatch({ type: actions.GET_ALL_CAMPAIGN, payload: res.data })
    //     stopSpining()(dispatch);
    // }).catch((err: any) => {
    //     stopSpining()(dispatch);
    // })
}