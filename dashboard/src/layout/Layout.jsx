import React, { useEffect, useState } from 'react'
import { Button, Flex, Layout, Menu } from "antd";
import { ArrowDownOutlined, DashboardFilled, MenuUnfoldOutlined, SettingFilled, ShopFilled } from '@ant-design/icons';
import { Link, useNavigate, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout
function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        }
    }, [])

    const [collapse, setCollapse] = useState(false)
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
                            label: <>
                                <Link to={"/"}>Dashboard</Link>
                            </>,
                            key: "1",
                            icon: <DashboardFilled />
                        },
                        {
                            label: <>
                                <Link to={"product"}>Product</Link>
                            </>,
                            key: "product",
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
                       <Flex justify={'space-between'} align={'center'} style={{width: '100%',height: '100%'}}> 
                       <Button type={'primary'} onClick={handleCollapse}>
                            <MenuUnfoldOutlined />
                        </Button>

                        <Button onClick={() => {
                            localStorage.clear()
                            navigate('/login')
                        }}>
                            Logout
                        </Button>

                       </Flex>

                    </Header>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>




            </Layout>



        </>
    )
}

export default Dashboard