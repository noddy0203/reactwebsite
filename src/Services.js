import React from 'react'
import Card from "./Card"

const Services = ()=>{
  return (
    <>
    <div className="my-5">
        <h2 className="text-center">Our Services</h2>
    <div className="container-fluid mx-auto">
     <div className="row">
         <div className="col-10 mx-auto">
             <div className="row gy-4">
               <Card 
               imgsrc="https://images.unsplash.com/photo-1599011802411-96abeab3577e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNlcnZpY2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               title="Fire Safety"
               />
                <Card
               imgsrc="https://images.unsplash.com/photo-1607264469190-4abbbd14f5ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlcnZpY2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               title="Police Dept"
               />
                <Card 
               imgsrc="https://images.unsplash.com/photo-1577920231835-c232d76c4662?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               title="Construction"
               />
                <Card 
               imgsrc="https://images.unsplash.com/photo-1588119498215-e70577775a31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHNlcnZpY2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               title="Health Dept"
               />
                <Card 
               imgsrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNlcnZpY2VzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
               title="IT&Devlp"
               />
                <Card 
               imgsrc="https://images.unsplash.com/photo-1539726821255-c22fe382c6c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHNlcnZpY2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               title="Photography"
               />

             </div>
         </div>
     </div>
    </div>
</div>
     
    </>
  )
}

export default Services