import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Create() {
   const [namee, setNamee] = useState();
   const [email, setEmail] =  useState();
   useEffect(()=>{
    handleForm();
   },[])
         async function handleForm(){
             await axios.post('http://localhost:3333/students/',{namee:namee, email:email} )
          }

  return (
    <div>
         <div className="row mt-2 container m-auto">
        <div className="col-md-8  m-auto ">
          <h5 className="text-center bg"> Add Student</h5>
          <form>
            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="stdNamee"
                  onChange={(e) => setNamee(e.target.value)}
                />
              </div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleForm}
            >
              Add
            </button>
            {/* <h1>{namee}</h1>
            <h1>{email}</h1> */}
          </form>
        </div>
        </div>
    </div>
  )
}
