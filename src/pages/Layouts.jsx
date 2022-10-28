import { Outlet } from "react-router-dom";
import ProCateBox from "../components/ProCateBox";
import NavComp from "../components/NavComp";
import NewsCollection from "../components/NewsCollection";

const Layout = () => {
    return ( 
        <div>
            <div className="boot-nav" />
            <NavComp />
            <ProCateBox />
            <NewsCollection />

            {/* Outlet으로 이 자체를 App.js로 내보냄 */}
            <Outlet />
        </div>
    );
}

export default Layout;