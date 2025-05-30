import React, { useState } from 'react';

const questions = [
  {
    text: '¿En qué ciudad quieres salir?',
    key: 'city',
    options: [
      { label: 'Sevilla', value: 'Sevilla' },
      { label: 'Cádiz', value: 'Cadiz' },
      { label: 'Málaga', value: 'Malaga' }
    ]
  },
  {
    text: '¿Qué ambiente prefieres?',
    key: 'ambiente',
    options: [
      { label: 'Verano', value: 'verano' },
      { label: 'Todo el año', value: 'todo el año' }
    ]
  },
  {
    text: '¿Qué música te gusta más?',
    key: 'musica',
    options: [
      { label: 'Reggaeton', value: 'reggaeton' },
      { label: 'Tecno', value: 'tecno' },
      { label: 'Breakbeat', value: 'breakbeat' },
      { label: 'Comercial', value: 'comercial' }
    ]
  }
];

const discotecaCaracteristicas = [
  { name: 'ANTHIQUE', city: 'Sevilla', ambiente: 'todo el año', musica: 'tecno' },
  { name: 'OCCO', city: 'Sevilla', ambiente: 'todo el año', musica: 'reggaeton' },
  { name: 'BOTTOM', city: 'Sevilla', ambiente: 'todo el año', musica: 'breakbeat' },
  { name: 'UTHOPIA', city: 'Sevilla', ambiente: 'todo el año', musica: 'tecno' },
  { name: 'ABRIL', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'Alfonso', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'Libano', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'B3', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'Bilindo', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'Gran  vía', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'KOKO', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'Wall Street', city: 'Sevilla', ambiente: 'todo el año', musica: 'comercial' },
  { name: 'BLU PUERTO SHERRY', city: 'Cadiz', ambiente: 'verano', musica: 'reggaeton' },
  { name: 'phiphi', city: 'Cadiz', ambiente: 'verano', musica: 'reggaeton' },
  { name: 'playa canalla', city: 'Cadiz', ambiente: 'verano', musica: 'reggaeton' },
  { name: 'padreo', city: 'Cadiz', ambiente: 'verano', musica: 'reggaeton' },
  { name: 'Margarita', city: 'Cadiz', ambiente: 'verano', musica: 'comercial' },
  { name: 'Guateque', city: 'Cadiz', ambiente: 'verano', musica: 'comercial' },
  { name: 'playa Aruba', city: 'Malaga', ambiente: 'verano', musica: 'comercial' },
  { name: 'Momento', city: 'Malaga', ambiente: 'verano', musica: 'comercial' },
  { name: 'taboo', city: 'Malaga', ambiente: 'verano', musica: 'comercial' },
  { name: 'fitz', city: 'Malaga', ambiente: 'verano', musica: 'comercial' },
  { name: 'bless', city: 'Malaga', ambiente: 'verano', musica: 'comercial' },
  { name: 'olivia valere', city: 'Malaga', ambiente: 'verano', musica: 'comercial' }
];

const Navbar = () => {
  const [showRecomModal, setShowRecomModal] = useState(false);
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [recommendation, setRecommendation] = useState(null);

  const handleOptionClick = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const found = discotecaCaracteristicas.find(
        d =>
          d.city === newAnswers.city &&
          d.ambiente === newAnswers.ambiente &&
          d.musica === value
      );
      setRecommendation(found);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setRecommendation(null);
  };

  return (
    <>
      <nav className="navbar">
        {/* ...resto del navbar... */}
        <ul>
          {/* ...otros botones... */}
          <li>
            <a
              href="#recomendaciones"
              onClick={e => {
                e.preventDefault();
                setShowRecomModal(true);
                handleRestart();
              }}
            >
              Recomendaciones
            </a>
          </li>
        </ul>
      </nav>
      {showRecomModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2000
          }}
        >
          <div style={{
            background: '#fff',
            padding: 24,
            borderRadius: 8,
            minWidth: 300,
            color: '#222',
            maxWidth: 350
          }}>
            {!recommendation ? (
              <>
                <h2 style={{ color: '#111', marginBottom: 20 }}>{questions[step].text}</h2>
                <form>
                  {questions[step].options.map(opt => (
                    <label
                      key={opt.value}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 12,
                        cursor: 'pointer',
                        fontSize: 16,
                        color: '#black'
                      }}
                    >
                      <input
                        type="radio"
                        name={questions[step].key}
                        value={opt.value}
                        checked={answers[questions[step].key] === opt.value}
                        onChange={() => handleOptionClick(questions[step].key, opt.value)}
                        style={{
                          accentColor: '#00c3ff',
                          marginRight: 10,
                          width: 18,
                          height: 18
                        }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </form>
                <button
                  onClick={() => { setShowRecomModal(false); handleRestart(); }}
                  style={{
                    marginTop: 12,
                    background: '#00c3ff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    padding: '8px 16px',
                    cursor: 'pointer'
                  }}
                >
                  Cerrar
                </button>
              </>
            ) : (
              <>
                <h2 style={{ color: '#00c3ff' }}>¡Te recomendamos!</h2>
                {recommendation ? (
                  <div style={{ margin: '16px 0', fontWeight: 'bold', color: '#007bff' }}>
                    {recommendation.name} ({recommendation.city})<br />
                    Ambiente: {recommendation.ambiente}<br />
                    Música: {recommendation.musica}
                  </div>
                ) : (
                  <div style={{ margin: '16px 0', color: 'red' }}>
                    No se encontró una discoteca que encaje con tus respuestas.
                  </div>
                )}
                <button
                  onClick={handleRestart}
                  style={{
                    background: '#00c3ff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    padding: '8px 16px',
                    cursor: 'pointer'
                  }}
                >
                  Volver a empezar
                </button>
                <button
                  onClick={() => setShowRecomModal(false)}
                  style={{
                    marginLeft: 8,
                    background: '#888',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    padding: '8px 16px',
                    cursor: 'pointer'
                  }}
                >
                  Cerrar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;