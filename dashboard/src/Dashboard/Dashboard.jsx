import React, { useEffect, useState } from 'react'
import { Button, Layout, Menu } from "antd";
import { ArrowDownOutlined, DashboardFilled, MenuUnfoldOutlined, SettingFilled, ShopFilled } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout
function Dashboard() {
    const navigate = useNavigate()



    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        }
    }, [])











    const [collapse, setCollapse] = useState(true)
    const handleCollapse = () => {

        setCollapse(!collapse)

        // if (collapse) {
        //   setCollapse(false)
        // } else {
        //   setCollapse(true)
        // }



    }

    return (
        <>
            <Layout style={{ height: "100vh" }}>

                <Sider collapsed={collapse}  >
                    <Menu mode={"inline"} theme={"dark"} items={
                        [{
                            label: "Dashboard",
                            key: "1",
                            icon: <DashboardFilled />
                        },
                        {
                            label: "Settings",
                            key: "2",
                            icon: <SettingFilled />
                        },

                        {
                            label: "Products",
                            key: "3",
                            icon: <ShopFilled />,
                            children: [
                                {
                                    label: "Nav 1",
                                    key: "1",
                                    icon: <DashboardFilled />,
                                    children: [
                                        {
                                            label: "Settings",
                                            key: "2",
                                            icon: <SettingFilled />

                                        }]
                                },
                                {
                                    label: "Nav 2",
                                    key: "2",
                                    icon: <SettingFilled />
                                },

                            ]
                        },



                        ]

                    }>

                    </Menu>

                </Sider>
                <Layout>
                    <Header style={{ width: "100%", backgroundColor: "white" }}>
                        <Button type={'primary'} onClick={handleCollapse}>
                            <MenuUnfoldOutlined />
                        </Button>

                        <Button onClick={() => {
                            localStorage.clear()
                            navigate('/login')
                        }}>
                            Logout
                        </Button>


                    </Header>
                    <Content>


                    </Content>
                </Layout>




            </Layout>



        </>
    )
}

export default Dashboard