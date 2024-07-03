// src/components/MobileAuth.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MobileAuth = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.post(`http://${apiUrl || "localhost"}:5000/api/auth/validate-sans-code-web`, { tempToken: token });
        if (response.data.authenticated) {
          // Stocker le token d'authentification dans le local storage
          localStorage.setItem('token', response.data.token);
          // Rediriger l'utilisateur vers la page principale
          navigate('/');
        } else {
          setError('Token non valide ou expiré');
        }
      } catch (error) {
        console.error('Erreur lors de la validation du token :', error);
        setError('Erreur lors de la validation du token');
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [token, navigate, apiUrl]);

  return (
    <div className="mobile-auth">
      {loading && <p>Validation en cours...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MobileAuth;
