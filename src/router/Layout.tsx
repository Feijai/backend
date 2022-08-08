import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from '../component/SideBar';
import Header from '../component/Header';

export default function Layout() {
    return (<>
        <SideBar></SideBar>
        <Header></Header>
        <Outlet></Outlet>
    </>)
}