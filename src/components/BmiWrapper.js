import React from 'react'
import { BmiForm } from './BmiForm'
import { BmiCalculated } from './BmiCalculated'
import { useState } from 'react'

export const BmiWrapper = () => {

  const [bmiCalc,setBmiCalc]= useState(false)
  const [bmi,setBmi]=useState()

  const saveStats = (weight,height)=>{
    let bmi = Math.round(weight/(height**2))
    setBmiCalc(true)
    setBmi(bmi)
  }

  return (
    <div className='BmiWrapper'>
        <BmiForm saveStats={saveStats} />
        {bmiCalc && <BmiCalculated bmi={bmi} />}
    </div>
  )
}
