import React from 'react'
import { useState } from 'react'
import Data from '../SearchOperations/SearchData';

const SearchOperation = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }
    return (

        <div className='container'>
            <h2>Enter Name :</h2>
            <input
                type="text" value={search}
                // onChange={(e) => setSearch(e.target.value)}
                onChange={handleSearch}
            />
            <br />
            {
                Data.filter(each => each.names.toLowerCase().includes(search.toLowerCase())).map((each, index) => {
                    return (
                        <li key={index} style={{ width: '500px', margin: '10px' }}>{each.names}</li>
                    )
                })
            }
        </div>

    )
}
export default SearchOperation