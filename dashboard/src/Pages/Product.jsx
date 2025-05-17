import { Button, Form, Input, InputNumber, Upload, message, Table, Space, Modal } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../store/Context';

function Product() {

    const { counter, setCounter } = useContext(MyContext)



    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:4000/api/products', {
            credentials: 'include'
        });
        const data = await res.json();
        setProducts(data);
    };

    const handleFinish = async (values) => {
        const formData = new FormData()
        const image = values.image?.fileList[0]?.originFileObj

        formData.append('product_name', values.product_name)
        formData.append('price', values.price)
        formData.append('description', values.description)
        formData.append('image', image)

        const url = editingProduct
            ? `http://localhost:4000/api/products/${editingProduct._id}`
            : 'http://localhost:4000/api/products';

        const method = editingProduct ? 'PUT' : 'POST';

        const res = await fetch(url, {
            method,
            body: formData,
            credentials: 'include'
        })

        if (res.ok) {
            message.success(`Product ${editingProduct ? 'updated' : 'added'} successfully`)
            setIsModalOpen(false);
            setEditingProduct(null);
            fetchProducts();
        } else {
            message.error(`Failed to ${editingProduct ? 'update' : 'add'} product`)
        }
    }

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        if (res.ok) {
            message.success('Product deleted successfully');
            fetchProducts();
        } else {
            message.error('Failed to delete product');
        }
    };

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: (_, record, index) => index + 1
        },
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={`http://localhost:4000/${image}`} alt="product" style={{ width: '50px' }} />
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button onClick={() => {
                        setEditingProduct(record);
                        setIsModalOpen(true);
                    }}>Edit</Button>
                    <Button danger onClick={() => handleDelete(record._id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Button type="primary" onClick={() => {
                setEditingProduct(null);
                setIsModalOpen(true);
            }} style={{ margin: '20px' }}>
                Add New Product  {counter}
            </Button>


            <Button onClick={() => setCounter(counter - 1)}> -
            </Button>

            <Table columns={columns} dataSource={products ? products : []} rowKey="_id" />

            <Modal
                title={editingProduct ? "Edit Product" : "Add New Product"}
                open={isModalOpen}
                destroyOnClose={true}
                onCancel={() => {
                    setIsModalOpen(false);
                    setEditingProduct(null);
                }}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={handleFinish}
                    initialValues={editingProduct}
                >
                    <Form.Item name="product_name" label="Product Name">
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item name="price" label="Product price">
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item name="description" label="Product description">
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item name="image" label="Product Image">
                        <Upload style={{ width: '100%' }} maxCount={1} beforeUpload={() => false}>
                            <Button type="primary">Upload File</Button>
                        </Upload>
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        {editingProduct ? 'Update' : 'Save'}
                    </Button>
                </Form>
            </Modal>
        </>
    )
}

export default Product