import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
  const Navigate = useNavigate()
  const [user, setUser] = useState({})
  const apiUrl = process.env.REACT_APP_API_URL


  useEffect(()=>{
    if(!localStorage.token) Navigate('/login')
  })

  useEffect(()=>{

    const getUser = async()=>{
        // console.log(localStorage.getItem('admin_token'));
        await axios.get(`http://${apiUrl || "localhost"}:5000/api/users/`,{
            headers:{
                token: localStorage.getItem('token')
            }
        }).then(response => {
          setUser(response.data.user)
            console.log(response.data.user)
            
        }).catch(err => {
          console.log(err);
        })
    }

    getUser()
},[apiUrl])

  const logout = () =>{
    localStorage.removeItem('token')
    Navigate('/login')
  }
  return (
    <div className='main py-5'>
        <div className='image-section d-flex flex-column '>
          <div className='logo-container rounded-3 shadow'></div>
        </div>

        <div className='info-section rounded shadow d-flex flex-column'>
          <h3 className='p-0 m-1 text-center'>Bienvenue {`${user?.sexe === 'Masculin' ? 'Mr' : 'Mme'} ${user?.nom} ${user?.prenom}`}</h3>
          <h3 className='p-0 m-1 text-center'>Profession : {`${user?.qualification} `}</h3>
          {/* <h3 className='p-0 m-1 text-center'>Dernière Connexion : {`${user?.qualification} `}</h3> */}
        </div>
        <button className='btn btn-danger shadow logout' onClick={logout}>Se déconnecter <i class="fa-solid fa-right-from-bracket"></i></button>
    </div>
  )
}

export default Main