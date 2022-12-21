
import React,{useState} from 'react'

const Food_library = () => {
  const [search,setSearch]=useState('')

  const submitHandler =e=>{
    e.preventDefault();
    console.log(search);
  }
  return (
    <div>
      <center>
        <h3>Food_library</h3> <br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> <br/> <br/>
          <input type="submit" value="search" />
        </form>
      </center>
    </div>
  )
}

export default Food_library