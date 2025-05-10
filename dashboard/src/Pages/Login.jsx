import { Button, Col, Divider, Flex, Input, message, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()



    const handleEmail = (val) => {
        setEmail(val.target.value)
    }

    const handlePassword = (pass) => {
        setPassword(pass.target.value)
    }


    const handleSubmit = async () => {

        const res = await fetch('http://localhost:4000/ ', {
            method: "POST",
            headers: {

                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ email, password })

        })
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            navigate('/')
        } else {
            message.error("invalid Cradentials")
        }
    }





    return (
        <>
            <Flex justify={"center"} align='center' style={{ height: "100vh" }}>
                <div style={{ width: '600px', backgroundColor: "#f3f0f0", borderRadius: "8px", padding: "40px" }}>

                    <Typography.Title style={{ textAlign: "center" }} level={2}>Login</Typography.Title>
                    <Divider />
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Typography.Text>Email</Typography.Text>
                            <Input onChange={handleEmail} style={{ height: "40px" }} placeholder='Email' />
                        </Col>
                        <Col span={24}>
                            <Typography.Text>Password </Typography.Text>
                            <Input.Password onChange={handlePassword} style={{ height: "40px" }} placeholder='Password' />
                        </Col>
                        <Col span={24}>
                            <Button onClick={handleSubmit} style={{ height: "40px" }} type="primary" block>
                                Create Account
                            </Button>
                        </Col>
                    </Row>


                </div>
            </Flex>

        </>
    )
}

export default Login