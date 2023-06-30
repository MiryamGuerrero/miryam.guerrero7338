import React, { useState } from 'react';
import './App.css';
import { MyRoutes } from './routers/routes';
import instaLogo from './assets/insta.png';
import facebookLogo from './assets/facebook.png';
import yeiImage from './assets/pi.gif';
import yeiaImage from './assets/mex.gif';
import video from './assets/video.mp4';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  if (!loadingComplete) {
    return (
      <div>
        <video autoPlay loop >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <button onClick={handleLoadingComplete} className="start-button" style={{ position: 'fixed', top: '70%', left: '50%', transform: 'translate(-70%, -50%)', fontSize: '60px', padding: '10px 20px' }}>INICIO</button>
      </div>
    );
  }
  return (
    <div>
     
      <header>
       
        <section style={{ backgroundColor: 'black', padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h1 className="title" style={{ backgroundColor: 'black', color: 'gold', padding: '10px' }}>
              <span role="img" aria-label="Movie Camera">
                🎬
              </span>
              Películas para tí
            </h1>
          </div>
          <section className="info-container" style={{ backgroundColor: 'orange', padding: '20px', color: 'white' }}>
            <div className="info-text">
              <h1 className="welcome-title" style={{ backgroundColor: 'orange', padding: '10px' }}>
                ¡Bienvenido a nuestra página de sinopsis de películas!
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={yeiaImage} alt="Yeia" style={{ width: '150px', marginRight: '10px' }} />
                <p className="welcome-description">
                  Explora el fascinante mundo del cine a través de nuestras sinopsis detalladas de diversas películas.
                  Descubre tramas emocionantes, personajes inolvidables y experiencias cinematográficas únicas que te
                  transportarán a nuevos mundos y emociones. Te ofrecemos una selección cuidadosa de películas de diferentes
                  géneros y épocas, para que puedas encontrar justo lo que estás buscando. Ya sea que prefieras el suspenso,
                  la comedia, el drama o la acción, aquí encontrarás algo que capturará tu interés y te mantendrá al borde de
                  tu asiento. Sumérgete en nuestras sinopsis, descubre películas que tal vez no conocías y encuentra
                  inspiración para tu próxima noche de cine. ¡Prepárate para vivir una experiencia cinematográfica
                  inolvidable!
                </p>
              </div>
              {showAbout ? (
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ marginBottom: '10px' }}>Más información</h2>
                  <p style={{ marginBottom: '10px' }}>
                    Lo increíble de nuestra página es que no solo te ofrecemos sinopsis detalladas de películas, sino que también te sumergimos en su magia y te ayudamos a descubrir nuevas joyas cinematográficas. Explora nuestras recomendaciones personalizadas, desafía tus preferencias habituales y déjate sorprender por películas que tal vez no conocías pero que te atraparán desde el primer minuto.
                  </p>
                  <p style={{ marginBottom: '10px' }}>
                    Además, te brindamos la posibilidad de categorizar las películas por género o temática, para que encuentres exactamente lo que estás buscando. Nuestro equipo ha seleccionado cuidadosamente cada película para resaltar sus puntos fuertes y ofrecerte una experiencia cinematográfica única.
                  </p>
                  <img src={yeiImage} alt="Yei" style={{ width: '150px', marginRight: '10px' }} />
                </div>
              ) : null}
              <button onClick={toggleAbout} className={`styled-button ${showAbout ? 'animated' : ''}`} style={{ marginTop: '10px' }}>
                {showAbout ? 'Ocultar información' : 'Mostrar más información'}
              </button>
            </div>
          </section>
        </section>
      </header>
      <MyRoutes />
      <div>
    </div>
      <footer style={{ backgroundColor: 'purple', padding: '20px', textAlign: 'center', color: 'white' }}>
        <p>¡Gracias por visitar nuestra página web de sinopsis de películas!</p>
        <p>Síguenos en las redes sociales:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <a href="https://instagram.com/alejandraguerrero6735?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
            <img src={instaLogo} alt="Instagram" style={{ width: '30px' }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100018816042203&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" style={{ width: '30px' }} />
          </a>
        </div>
        <p>También puedes contactarnos al número de teléfono: 0969068887</p>
      </footer>
    </div>
  );
}
export default App;
