import './Main.css'
import { useState } from 'react'
import axios from 'axios'

function Main(){

    const [glucose, setGlucose] = useState('')
    const [bp, setBp] = useState('')
    const [insulin, setInsulin] = useState('')
    const [bmi, setBmi] = useState('')
   
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const params = { glucose, bp, insulin, bmi }
  
      axios
        .post('http://127.0.0.1:5000/prediction', params)
        .then((res) => {
          const data = res.data.data
          const parameters = JSON.stringify(params)
          const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
          alert(msg)
          reset()
        })
        .catch((error) => alert(`Error: ${error.message}`))
    }
  
    const reset = () => {
      setGlucose('')
      setBp('')
      setInsulin('')
      setBmi('')

    }


    return (
        <div className="glass">
          <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
            <h4>DIABETES PREDICTION</h4>
            <div className="glass__form__group">
              <input
                id="glucose"
                className="glass__form__input"
                placeholder="glucose level (in mg/dL)"
                required
                autoFocus
                title="Body glucose level"
                type="number"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
              />
            </div>

            <div className="glass__form__group">
              <input
                id="bp"
                className="glass__form__input"
                placeholder="Blood Pressure(in mmHg)"
                required
                autoFocus
                title="Body Blood pressure"
                type="number"
                value={bp}
                onChange={(e) => setBp(e.target.value)}
              />
            </div>

            <div className="glass__form__group">
              <input
                id="insulin"
                className="glass__form__input"
                placeholder="Insulin level in(pmol/L)"
                required
                autoFocus
                title="Body insulin level"
                type="number"
                value={insulin}
                onChange={(e) => setInsulin(e.target.value)}
              />
            </div>

            <div className="glass__form__group">
              <input
                id="bmi"
                className="glass__form__input"
                placeholder="BMI(Body mass index) in kg/m^2"
                required
                autoFocus
                title="BMI"
                type="number"
                step="0.01"
                value={bmi}
                onChange={(e) => setBmi(e.target.value)}
              />
            </div>

            
            

            
    
            <div className="glass__form__group">
              <button type="submit" className="glass__form__btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )

}

export default Main