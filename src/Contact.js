import React, {useState} from 'react'


const Contact = ()=>{

const [data, setData] = useState({
    fname:"",
    email:"",
    phone:"",
    msg:""
})

const inputEvent = (e)=>{
 const {name, value} = e.target;
      setData((preVal)=>{
          return {
              ...preVal,
              [name]:value
          }
      })
}

    const formSubmit = (e)=>{
        e.preventDefault()
        alert(`${data.fname}. My contact number is ${data.phone}. my Email is ${data.email}. And here's my feedback ${data.msg}`)
    }    
  return (
    <>
     <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container-fluid mx-auto">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                      <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1"
                            name="fname"
                            value={data.fname}
                            onChange={inputEvent} 
                            placeholder="Ralph lauren" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1"
                            name="email"
                            value={data.email}
                            onChange={inputEvent} 
                            placeholder="name@example.com" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="exampleFormControlInput1"
                            name="phone"
                            value={data.phone}
                            onChange={inputEvent} 
                            placeholder="4545353455" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        name="msg"
                        value={data.msg}
                        onChange={inputEvent}></textarea>
                     </div>
                     <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact