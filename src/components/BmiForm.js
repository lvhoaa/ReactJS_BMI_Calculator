import React from 'react'
import { useState } from 'react'


export const BmiForm = ({saveStats}) => {
    const [weight,setWeight]=useState()
    const [height,setHeight]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        saveStats(weight,height)
    }

    return (
    <form className='BmiForm' onSubmit={handleSubmit}>
        <h1>Weight in kg</h1>
        <input className='weight-input' placeholder='Weight in kg' value={weight} onChange={(event)=>{setWeight(event.target.value)}} />
        <h1>Height in m</h1> 
        <input className='height-input' placeholder='Height in m' value = {height} onChange={(event)=>{setHeight(event.target.value)}}/>
        <br/>
        <button type='submit' className='form-btn'>Submit </button>
    </form>
    )
}
