import { Route, Routes } from "react-router-dom"
import SignIn from "../components/authentication/sign-in"
import { ConfirmEmail } from "../components/authentication/confirm-email";
import { app_routes } from "./routes";
import Verification from "../components/authentication/verification";
import Regform from "../components/forms/reg-form";



const AuthenticationRouter = () => {
    return (
        <Routes>
            <Route path={'*'} element={<SignIn />} />
            <Route path={app_routes.authentication.sign_in} element={<SignIn />} />
            <Route path={app_routes.authentication.confirm_email} element={<ConfirmEmail />} />
            <Route path={app_routes.authentication.verification} element={<Verification />} />
            <Route path={app_routes.authentication.form} element={<Regform />} />
            
        </Routes>
    );
}

export default AuthenticationRouter;
