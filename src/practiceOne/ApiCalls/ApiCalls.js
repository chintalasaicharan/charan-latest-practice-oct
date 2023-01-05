import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const ApiCalls = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false)
    const handleInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8080/codexbox/all");
            setData(res.data);
        };
        fetchData();
    }, [data]);

    const submitFn = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await axios.post('http://localhost:8080/codexbox/employee', state)
        setLoading(false)
        setState({ ...state, name: '', email: '', password: '' })
    }
    const deleteFn = async (each) => {
        setLoading(true)
        const res = await axios.delete(`http://localhost:8080/codexbox/employee/${each.id}`)
        setLoading(false)
        console.log(res);
    }
    const editFn = (each) => {
        setState(each)
    }
    const saveChanges = async () => {
        setLoading(true)
        const res = await axios.put(`http://localhost:8080/codexbox/employee/${state.id}`, {
            data: {
                title: 'Making PUT Requests with Axios',
                status: 'published'
            }
        })
        setState({ ...state, name: '', email: '', password: '' })
        setLoading(false)
        console.log(res);
    }
    return (
        <div>
            {
                loading ?
                    <h1>Loading....</h1> : null
            }
            <form onSubmit={submitFn}>
                <input type="text" name='name' value={state.name} onChange={handleInput} placeholder='Enter Name' /><br />
                <input type="text" name='email' value={state.email} onChange={handleInput} placeholder='Enter email' /><br />
                <input type="password" name='password' value={state.password} onChange={handleInput} placeholder='Enter password' /><br />
                <input type="submit" value={'submit'} />
                <input type="submit" value={'save changes'} onClick={saveChanges} />
            </form>
            <br />
            <Table striped bordered hover style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
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
                                    <td>{each.password}</td>
                                    <td>
                                        <button onClick={() => deleteFn(each)}>Delete</button>
                                        <button onClick={() => editFn(each)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ApiCalls;
