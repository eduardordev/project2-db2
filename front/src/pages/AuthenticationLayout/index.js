
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../login';
import SignUp from "../SignUp";


const AuthenticationLayout = ({ session, setSession }) => {
    return(
        <div className="authentication-layout">
            <Routes>
                <Route path="/*" />
                <Route path="/register" element={ <SignUp /> } />
                
            </Routes>
        </div>
    );
}

export default AuthenticationLayout;