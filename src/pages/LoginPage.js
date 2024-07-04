import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../images/Modern Brain Tech Logo.png";
import video from "../images/TechTornadoes.mp4"
import axios from 'axios';
import QRCode from 'qrcode.react'



function LoginPage() {
    const Navigate = useNavigate()
    const [code, setCode] = useState(null)
    const [onLoad, setOnLoad] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

    const apiUrl = process.env.REACT_APP_API_URL

    useEffect(()=>{
        if(localStorage.token) Navigate('/')
    })

  const handleClick = async () => {
    console.log("click");
    if (!onLoad) {
      await axios.post(`http://${apiUrl || "localhost"}:5000/api/auth/create-session`)
                .then(response =>{
                  console.log(response);
                  setOnLoad(true)
                  setCode(response.data.code)
                })
                .catch(error => {
                  console.log(error);
                })
    }
    
  }

  useEffect(() => {
    let interval;
    let timeout;
    if (code) {
        interval = setInterval(async () => {
          let data;
          await axios.get(`http://${apiUrl || "localhost"}:5000/api/auth/check-session/${code}`)
                      .then( response => {
                        console.log(response);
                        data = response.data

                        if (data.authenticated) {
                          setAuthenticated(true);
                          setOnLoad(false)
                          clearInterval(interval);
            
                          localStorage.setItem('token',data.token)
                            setTimeout(() => {
                                Navigate('/')
                            }, 1);
                        }
                      })
                      .catch(error => {
                        setOnLoad(false)
                        setCode(null)
                        console.log(error);
                      })
        }, 3000); // Vérifier toutes les 3 secondes

        timeout = setTimeout(() => {
          if (interval) {
            clearInterval(interval)
            setOnLoad(false)
            setCode(null)
          }
        }, 60000);
    }
    return () => {
      if(interval) clearInterval(interval);
      if(timeout) clearTimeout(timeout)
    }
  })
  return (
    <div className='login'>
        <div className='image-section d-flex flex-column '>
          <div className='logo-container rounded-3 shadow'></div>
        </div>
        <div className='info-section p-5'>
          <h5 className='text-center'>Login</h5>
          <button type="button" className="btn btn-light fw-bold" onClick={handleClick}>
            {
              onLoad ?
              <div className="spinner-border spinner-border-sm">
                <span className="visually-hidden">Loading...</span>
              </div>
              :
              <>S'authentifier avec NFC <i className="fa-brands fa-nfc-symbol"></i></>
            }
          </button>
          <button className='how-to' data-bs-toggle="modal" data-bs-target="#exampleModal">Comment se connecter ?</button>
          {/* <p className='text-center'>Veuillez poursuivre avec l'app mobile</p> */}
          {
              code &&
              <div className='code-section rounded px-5 py-3'>
                  <p className='text-dark'>CODE : <span className='fw-bold text-primary'>{code}</span></p>
                  <QRCode className='qr-code' value={code} />
              </div>
          }
          
        </div>

        {/* login */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <video className='video' controls autostart src={video}></video>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginPage