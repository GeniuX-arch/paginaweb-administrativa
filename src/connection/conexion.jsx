import React, { useEffect } from 'react'
import axios from 'axios'

export default function conexion() {
    useEffect(() =>{
        axios.get("http://localhost:8000/usuario")
        .then(res => console.log(res))
        .catch(err=> console.log(err));
    },[])
}
