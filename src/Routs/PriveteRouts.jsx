import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Navigate } from "react-router-dom";


const PriveteRouts = ({children}) => {
    const {user,loding} = useContext(AuthContext);
if(loding){
    return <span className="loading loading-spinner loading-xs"></span>
}

 if(user) {
    return children
 }

    return <Navigate to="/login"></Navigate>
};

export default PriveteRouts;