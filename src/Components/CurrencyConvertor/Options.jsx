import React, { useEffect, useState } from 'react'


const Options = ({setselectedCountry,selectedCountry}) => {
    const [countryNames, setCountryNames]=useState([])
    
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json').then((res)=>res.json()).then((data)=>setCountryNames(data))
    },[])
    const mapOtions =  ()=>{
        return Object.keys(countryNames).map((key) => (
            <option value={key} key={key}>
              {countryNames[key]}  ({key})
            </option>
          ));
    }
    const handleOtionsChange = (e)=>{
        setselectedCountry(e.target.value)
     
      }
  
   
  return (
    
    <select onChange={handleOtionsChange} className=' text-left p-5 outline-none  bg-slate-300 rounded-3xl sm:w-1/3 w-24'>
        <option value={selectedCountry}>{selectedCountry}</option>
        {mapOtions()}
    </select>
  )
}

export default Options