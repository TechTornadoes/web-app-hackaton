import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.token) navigate('/login')
})
  return (
    <div>Main</div>
  )
}

export default Main