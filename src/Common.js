import React from 'react'
import {NavLink} from "react-router-dom"


const Common = (props)=>{

  return (
    <>
    <section className="d-flex align-items-center">
     <div className="container-fluid">
         <div className="row">
             <div className="col-10 mx-auto">
                <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                     <h1>{props.name} </h1>
                     <h2 className="my-3">I am a <strong className="brand-name">MERN</strong> stack developer</h2>
                     <div className="mt-3">
                    
                         <NavLink to={props.visit}  className="btn btn-primary">
                             {props.btnname}
                         </NavLink>
                   
                        
                     </div>
                      </div>
                      <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1">
                        <img className="img-fluid" src={props.imgsrc} alt=""/>
                      </div>

                 </div>

             </div>
         </div>
     </div>
     </section>
    </>
  )}


export default Common