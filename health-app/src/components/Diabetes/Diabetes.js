import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import Loading from '../Loading/Loading';
import axios from 'axios'
import './Diabetes-page.css'
export default function Diabetes() {

  const [glucose, setGlucose] = useState('')
  const [bp, setBp] = useState('')
  const [insulin, setInsulin] = useState('')
  const [bmi, setBmi] = useState('')
  

  const [predictionData, setPredictionData] = useState({})

  const [loadingStatus, setLoadingStatus] = useState(false)

    const request = {glucose,bp,insulin,bmi}
    const handleSubmi = async () => {
      setLoadingStatus(true)
      axios
        .post('http://127.0.0.1:5000/prediction', request)
        .then((response) => {
          const responseData = response.data.data
          setPredictionData(responseData)
          console.log(responseData)
          setLoadingStatus(false)
        })
      }


    const handleBackClick = () => {
      setPredictionData({})
    }


  
if(predictionData.interpretation) {

      const outputComponent = (
       
<div className='container'>
<section id="cover" className="min-vh-100">
<div id="cover-caption">
    <div className=" align-items-center ">
        <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <div className="px-2">
                <div className="container hx4 align-items-center">
                    <h1>{predictionData.interpretation}</h1>
                    <button type="submit" className="glass__form__btn" onClick={()=>handleBackClick()}>
                    Back to Prediction
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
    )

    return outputComponent
}
else if(loadingStatus) {

  return <Loading />

}
else return (
  <div className='main'>
    <section id="cover" className="min-vh-100">
    <div id="cover-caption">
        <div className=" align-items-center ">
            <div className="row text-white">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h2>Diabetes Predictor</h2>
                    <div className="px-2">
                        <form action="" className="justify-content-center">
                            <div className="form-group">
                                <label className="sr-only">Glucose</label>
                                <input
                                  id="glucose"
                                  placeholder="glucose level (in mg/dL)"
                                  className="glass__form__input"
                                  required
                                  autoFocus
                                  title="Body glucose level"
                                  type="number"
                                  value={glucose}
                                  onChange={(e) => setGlucose(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Blood Pressure</label>
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
                            <div className="form-group">
                                <label className="sr-only">Insulin</label>
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
                            <div className="form-group">
                                <label className="sr-only">BMI</label>
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
                            
                              <button type="submit" className="glass__form__btn" onClick={(e) => handleSubmi(e)}>
                                Predict
                              </button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

