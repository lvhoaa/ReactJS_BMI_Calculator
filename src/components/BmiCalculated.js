import React from 'react'
import underweight from "./img/underweight.png";
import healthy from './img/healthy.png';
import overweight from './img/overweight.png';

export const BmiCalculated = (bmi) => {

  return (
    <div className='BmiCalculated'>
      <h1> Your BMI is {bmi.bmi} </h1>
      {(bmi.bmi<18.5) && <><h2>You are underweight</h2><img src={underweight} alt='underweight'/></>}
      {(bmi.bmi>=18.5 && bmi.bmi<24.9) && <><h2>You are healthy</h2><img src={healthy} alt='underweight'/></>}
      {(bmi.bmi>=25) && <><h2>You are overweight</h2><img src={overweight} alt='underweight'/></>}
    </div>
  )
}
