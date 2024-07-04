import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function AuthMobilePage() {
    const apiUrl = process.env.REACT_APP_API_URL
    const Navigate = useNavigate()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    
    useEffect(() => {
        // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        console.log(isMobile);

        const token = window.location.pathname.split('/')[2]
        const authenticate = async () => {
            await axios.get(`http://${apiUrl || "localhost"}:5000/api/auth/validate-sans-code/${token}`)
                .then(response => {
                    console.log(response);
                    localStorage.setItem('token',response.data.newToken)
                    setTimeout(() => {
                        Navigate('/')
                    }, 2000);
                })
                .catch(error => {
                    console.log(error);

                    Navigate('/login')
                })
        }

        if (!isMobile) {
            setTimeout(() => {
                Navigate('/login')
            }, 3000);
        }else{
            authenticate()
        }
        // authenticate()

        // return () => {
        // };
    }, []);
  return (
    <div className='mobile-auth py-3'>
        {
            isMobile ?
            <div className='mobile-section rounded shadow d-flex flex-column gap-3'>
                <div className="spinner-border">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h5>authentification en cours</h5>
            </div>
            :
            <div className='not-mobile-section rounded shadow d-flex flex-column gap-3'>
                <h5 className='p-0 m-1 text-center'><i class="fa-solid fa-circle-xmark display-4 text-danger"></i> <br/>Ce type d'authentification est réservé aux navigateurs sur mobile. <br/> Cliquez pour revenir à la page de connexion</h5>
            </div>
        }
    </div>
  )
}

export default AuthMobilePage