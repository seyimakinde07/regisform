import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../axios/axiosInstance";
import { app_routes } from "../../router/routes";
import { startSpining, stopSpining } from "./app-layout-actions";
import { UserQuestion } from "../../models/question";
import { ApiResponse } from "../../models/response";
import { actions } from "../action-types/auth-acton-types";

export const verifyEmail = (value: any, navigate: any) => (dispatch: any) => {
    startSpining()(dispatch);
    axiosInstance.post('/auth/verify-email', value)
        .then((res: AxiosResponse) => {
            stopSpining()(dispatch);
            navigate(app_routes.authentication.confirm_email + `?email=${value.email}`)
        }).catch((err: any) => {
            stopSpining()(dispatch);
        })
}

export const confirmQuestionAnswer = (value: any) => (dispatch: any): Promise<ApiResponse<string>> => {
    startSpining()(dispatch);
    return axiosInstance.post('/auth/confirm-user/question-answer', value)
        .then((res: AxiosResponse) => {
            stopSpining()(dispatch);
            return res.data.data
        }).catch((err: any) => {
            stopSpining()(dispatch);
        })
}


export const getUserQuestion = (questionId: any) => (dispatch: any): Promise<UserQuestion> => {
    startSpining()(dispatch);
    return axiosInstance.get(`/auth/get/user-question/${questionId}`)
        .then((res: AxiosResponse) => {
            stopSpining()(dispatch);
            return res.data.data;
        }).catch((err: AxiosError) => {
            stopSpining()(dispatch);
        });
}

export const loginInUser = (payload: any) => (dispatch: any) => {
    dispatch({ type: actions.LOGINUSER, payload })
}
export const loginOutUser = () => (dispatch: any) => {
    dispatch({ type: actions.LOG_OUT_USER })
}

