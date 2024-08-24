// import { useState } from 'react'

import { useState } from 'react'
import './App.css';
import Validation from './validatefile/Validation';


function App() {
  
  const [values , setValues] = useState({
      name: "" ,
      email: "",
      password: ""
  })

  const [errors , setErrors] = useState({})

  const handelInput = (e) => {
     const newObj = {...values , [e.target.name]: e.target.value}
     setValues(newObj);
  }

  const handelSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
  }

  return (
    <>
       <div className='container'>
        <div className='sign-up form'>
          <h4>form validation</h4>
            <div className='form mt-3 ' >
              <form className='border p-3' onSubmit={() => handelSubmit}>
                    <label for="name" className='mb-2'>enter name</label>
                   <input type='text' placeholder='enter name' name="name" className='form-control' onChange={handelInput}/>
                   {errors.name && <p style={{color:red}}>{errors.name}</p>}
                   <label for="email" className='mb-2'>enter email</label>
                   <input type='email' placeholder='enter email' name="email" className='form-control' onChange={handelInput}/>
                   {errors.email && <p style={{color:red}}>{errors.email}</p>}
                   <label for="password" className='mb-2'>enter password</label>
                   <input type='password' placeholder='enter password' name="password" className='form-control' onChange={handelInput} />
                   {errors.password && <p style={{color:red}}>{errors.password}</p>}
                   <button type='submit' className='btn btn-primary mt-2' >Validate</button>  
              </form>
            </div>
        </div>
       </div>
    
    </>
  )
}

export default App
