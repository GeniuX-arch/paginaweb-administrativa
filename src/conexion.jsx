import React, { useEffect } from 'react'
import axiox from 'axiox'

export default function conexion() {
    useEffect(() =>{
        axios.get("http://localhost:8081/")
        .then(res => console.log(res))
        .catch(err=> console.log(err));
    },[])
  return (
    <div>conexion</div>
  )
}
