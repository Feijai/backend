import { Outlet } from "react-router-dom";
import React from 'react';
import SideBar from "../component/SideBar";
import Header from '../component/Header'
import styled from "styled-components";

const LayoutCss = styled.div`
    display:flex;
    .rightSide{
        width:100%
    }
`

const Layout: React.FC = () => {

    return (
        <LayoutCss>
            <SideBar />
            <div className="rightSide">
                <Header />
                <Outlet />
            </div>
        </LayoutCss>
    );
};

export default Layout;