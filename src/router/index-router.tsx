import { Route, Routes } from "react-router-dom"
import DefaultRouters from "./default-routers";
import AuthenticationRouter from "./authentication-router";
import { connect } from "react-redux";



const IndexRouter = (props: any) => {
    const token = localStorage.getItem('token');
    return (
        <>
            <Routes>
                <Route path={'*'} element={token ? <DefaultRouters /> : <AuthenticationRouter />} />
            </Routes>
        </>
    );
}

function mapStateToProps(state: any) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, null)(IndexRouter);
