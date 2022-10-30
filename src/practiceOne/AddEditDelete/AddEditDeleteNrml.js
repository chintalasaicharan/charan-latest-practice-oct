import React, { useState } from "react";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AdDeleteEditNrml() {

    const [state, setState] = useState({
        list: [
            {
                id: "1",
                name: "vinay",
                dept: "technician",
                phone: "1265378781",
            },
            {
                id: "2",
                name: "charan",
                dept: "sales",
                phone: "1265378722",
            },
            {
                id: "3",
                name: "rahul",
                dept: "technician",
                phone: "1265378780",
            },
            {
                id: "4",
                name: "rahul",
                dept: "management",
                phone: "1265378782",
            },
            {
                id: "5",
                name: "shekar",
                dept: "client",
                phone: "1265378783",
            },

        ]



    })




    const [login, setLogin] = useState({
        id: '',
        name: '',
        dept: '',
        phone: '',

    })

    const [open, setOpen] = React.useState(false);
    const [isAdd, setIsAdd] = useState(false);

    const handleClose = () => setOpen(false);



    const handleLogin = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const AddFn = () => {
        setOpen(true)
        const obj = {
            id: '',
            name: '',
            dept: '',
            phone: '',
        }
        setIsAdd(true)
        setLogin(obj)
    }
    const submitFn = (e) => {
        if (isAdd && login.id && login.name && login.dept && login.phone) {
            const { list } = state;
            state.list.push(login)
            handleClose(true)
        }
        else {
            if (login.name && login.dept && login.phone) {
                const { list } = state;
                let getIndex = state.list.findIndex((each) =>
                    each.id === login.id);
                console.log(getIndex)
                list[getIndex]=login;
                console.log(login);
                setState({...state,list:list})
                handleClose();
            }
        }
    }



    const closeFn = () => {
        handleClose(true)
    }

    const editFn = (each) => {
        setIsAdd(false)
        setOpen(true)
        const login = each;
        setLogin(login)
    }

    
    return (
        <div>
            <Button variant="contained" onClick={AddFn}>AddLIST</Button>



            {/* 
            <div> <button>AddLIST</button></div> */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.list.length > 0 &&
                        state.list.map((each, index) => {
                            return (

                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.dept}</td>
                                    <td>{each.phone}</td>
                                    <td><button onClick={() => editFn(each)}>edit</button></td>
                                    <td><button>delete</button></td>
                                </tr>

                            )

                        })
                    }

                </tbody>
            </table>
          


            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {isAdd ? "ADD" : "EDIT"} List
                        </Typography>

                        {/* <div class="modal-body"> */}
                        <TextField id="outlined-basic" name="id" value={login.id} label="id" placeholder="enter id" size="small" onChange={handleLogin} variant="outlined" /><br>
                        </br>
                        <TextField id="outlined-basic" name="name" value={login.name} label="name" placeholder="enter id" size="small" onChange={handleLogin} variant="outlined" /><br></br>
                        <TextField id="outlined-basic" name="dept" value={login.dept} label="dept" placeholder="enter id" size="small" onChange={handleLogin} variant="outlined" /><br></br>

                        <TextField id="outlined-basic" name="phone" value={login.phone} label="phone" placeholder="enter id" size="small" onChange={handleLogin} variant="outlined" /><br></br>


                        <Button variant="contained" color="success" sx={{ m: 1 }} onClick={submitFn}>Submit</Button>
                        <Button variant="contained" color="success" sx={{ m: 1 }} onClick={closeFn}>Close</Button>




                    </Box>
                </Modal>
            </div>
        </div >
    );

}
export default AdDeleteEditNrml;
