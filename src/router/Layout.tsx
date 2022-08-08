import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import React from 'react';
import SideBar from "../component/SideBar";

const { Header } = Layout;

const App: React.FC = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Outlet />
            </Layout>
        </Layout>
    );
};

export default App;