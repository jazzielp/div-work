import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [words, setWords] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleConvert = () => {
    if (!inputText.trim()) {
      setWords([])
      setSelectedIndex(null)
      return
    }
    // Split by whitespace and filter out empty strings
    const splitWords = inputText.trim().split(/\s+/).filter(w => w.length > 0)
    setWords(splitWords)
    setSelectedIndex(null)
  }

  const handleWordClick = (word, index) => {
    setSelectedIndex(index)
    const clean = word.replace(/^[.,;:!?¡¿"'()[\]{}]+|[.,;:!?¡¿"'()[\]{}]+$/g, '')
    console.log(clean)
  }

  return (
    <div className="app-container">
      <div className="input-section">
        <h1>Letras</h1>
        <p className="subtitle">Pegá tu texto y convertilo en palabras individuales</p>
        
        <textarea
          className="text-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribí o pegá tu texto acá..."
          rows={6}
        />
        
        <button 
          className="convert-btn"
          onClick={handleConvert}
        >
          Convertir
        </button>
      </div>

      {words.length > 0 && (
        <div className="result-section">
          <h2>Resultado</h2>
          <div className="words-container">
            {words.map((word, index) => (
              <span
                key={index}
                className={`word-span ${selectedIndex === index ? 'selected' : ''}`}
                onClick={() => handleWordClick(word, index)}
              >
                {word}
              </span>
            ))}
          </div>
          <p className="word-count">{words.length} palabras</p>
        </div>
      )}
    </div>
  )
}

export default App
