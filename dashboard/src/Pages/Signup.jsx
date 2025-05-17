import { Button, Col, Divider, Flex, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'

function Signup() {
    const [fisrtName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("Admin")



    const handlefirstname = (val) => {
        setFirstName(val.target.value)
    }
    const handlelastname = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (val) => {
        setEmail(val.target.value)
    }

    const handlePassword = (pass) => {
        setPassword(pass.target.value)
    }


    const handleSubmit = async () => {

        fetch('http://localhost:4000/api/user/signup', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ fisrtName, role, lastName, email, password })

        })
    }





    return (
        <>
            <Flex justify={"center"} align='center' style={{ height: "100vh" }}>
                <div style={{ width: '600px', backgroundColor: "#f3f0f0", borderRadius: "8px", padding: "40px" }}>

                    <Typography.Title style={{ textAlign: "center" }} level={2}>Sign up</Typography.Title>
                    <Divider />
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <Typography.Text>First Name</Typography.Text>
                            <Input onChange={handlefirstname} style={{ height: "40px" }} placeholder='First Name' />
                        </Col>
                        <Col span={12}>
                            <Typography.Text>Last Name</Typography.Text>
                            <Input onChange={handlelastname} style={{ height: "40px" }} placeholder='Last Name' />
                        </Col>
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

export default Signup