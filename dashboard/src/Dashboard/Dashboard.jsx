import React, { useContext } from 'react'
import MyContext from '../store/Context'
import Child from '../Components/Child1'
import { Button, Card } from 'antd'

export default function Dashboard() {
    const { counter, setCounter } = useContext(MyContext)

    const list = [
        {
            name: 'Product 1',
            price: 400,

        },
        {
            name: 'Product 2',
            price: 400,

        }
    ]


    return (


        <>
            <div>Dashboard {counter}</div>


            <Button onClick={() => setCounter(counter + 1)}>
                +

            </Button>


            {list.map((item, i) => {
                return <>
                    <Card title={item.name} style={{ width: "200px" }}>
                        {item.price}

                    </Card>
                </>
            })}












            <Child>
                <h2>New Child</h2>

            </Child>
            <Child>
                <h2>New Child 2</h2>
            </Child>

        </>


    )
}
