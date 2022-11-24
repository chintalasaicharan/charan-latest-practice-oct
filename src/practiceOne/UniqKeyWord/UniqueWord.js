import React, { useState } from 'react'

const Uniquewords = () => {

    const [state, setState] = useState({
        input: "",
        show: "",
        list: [],
    })
    const [countVal, setCountVal] = useState();
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    console.log("111",state.input);
    const { input, show, list } = state;
    const submitFn = (e) => {
        e.preventDefault();
        const text = input.split(" ");
        // console.log(text);
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            count = 0;
            for (let j = 0; j < text.length; j++) {
                if (text[i] == text[j]) {
                    count++;
                }
            }
            setCountVal(count);
            console.log("ccc", countVal);
            if
                //  (count == 1) 
                //  (count !=1 && count !=2) 
                (count > 1) {
                list.push(text[i])
                setState({ ...state, list: list, show: "the unique values are" })
                console.log("33",list);
            }
            count = 0;
        }
    }
    return (
        <div className='container mt-3'>
            <p className='t'>enter like 1 5 2 4 8 2 6 5 or a b c a</p>
            <div className='row'>
                <div className='col-md-4'>
                    <div>
                        <div>
                            <form onSubmit={submitFn}>
                                <input type="text" name='input' value={state.input} className='form-control mb-3'
                                    onChange={handleChange} placeholder={'Enter any sentence'}
                                />
                                <input type="submit" className='btn mb-3' value='submit' />
                            </form>
                            {
                                show &&
                                <p>{show}</p>
                            }
                            {
                                list.map((each, index) => {
                                    return (
                                        <ul key={index}>
                                            <li style={{ listStyleType: 'none' }}>
                                                {/* {index} &nbsp; */}
                                            {each}</li>
                                        </ul>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Uniquewords;