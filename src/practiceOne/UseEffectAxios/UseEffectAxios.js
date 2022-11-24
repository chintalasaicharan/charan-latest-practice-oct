import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const UseEffectAxios = () => {
    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
        }
        fetchData();
    }, [])
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <a href="#" className='navbar-brand'>React with Conditional & list Rendering</a>
            </nav>
            <div className='container'>
                <h2 style={{ color: 'green' }}>User List</h2>
                <p>Specifies the identifier for the table to describe. If the identifier contains spaces or special characters, the entire string must be enclosed in double quotes. Identifiers enclosed in double quotes are also case-sensitive.</p>
                <Table striped bordered hover style={{ textAlign: 'center' }}>
                    <thead variant="dark" >
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>STREET</th>
                            <th>CITY</th>
                            <th>WEBSITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.map((each, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{each.id}</td>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <td>{each.address.street}</td>
                                        <td>{each.address.city}</td>
                                        <td>{each.website}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default UseEffectAxios;