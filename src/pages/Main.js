import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
  const Navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.token) Navigate('/login')
  })

  const logout = () =>{
    localStorage.removeItem('token')
    Navigate('/login')
  }
  return (
    <div className='main py-5'>
        <div className='image-section d-flex flex-column '>
          <div className='logo-container rounded-3 shadow'></div>
        </div>

        <div className='info-section rounded shadow'>
          <h3 className='p-0 m-1 text-center'>BIENVENUE abdul kodir</h3>
        </div>
        <button className='btn btn-danger shadow logout' onClick={logout}>Se déconnecter <i class="fa-solid fa-right-from-bracket"></i></button>
    </div>
  )
}

export default Main