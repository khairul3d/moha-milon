import { Outlet } from "react-router-dom";
import Naveber from "../Naveber";


const Root = () => {
    return (
        <div>
            <Naveber></Naveber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;