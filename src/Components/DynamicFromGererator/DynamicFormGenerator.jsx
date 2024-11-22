import React, { useEffect, useState } from 'react'
import Input from './Input'

const DynamicFormGenerator = () => {
    const [jsonValue, setJsonValue] = useState([])


    const valueset = (e)=>{
        const elem =document.getElementById('textarea')
        const json =elem.value

        function isValidJSON(str) {
            try {
              JSON.parse(str); // Try to parse the string
              return true;      // Return true if JSON is valid
            } catch (e) {
              return false;     // Return false if an error occurs
            }
          }

         const valid = isValidJSON(json)

         if(valid)
         {
            setJsonValue(json)
         }
         else{
            console.log("not a valid json")
         }

    }
    const generateForm = ()=>{

       Object.keys()
    }

    useEffect(()=>{
        generateForm()
    }, [jsonValue])
  return (
    <>
        <div className=' flex'>
                <textarea name="" id="textarea" className='min-h-screen bg-red-300 border-black border-2 sm:w-1/2 ' placeholder='Enter yout json here' ></textarea>
                

                {console.log(jsonValue)}

                 <div className='sm:w-1/2 border-black border-2 m-1'>
                <form action="">
                    
                </form>

                <button onClick={valueset}>Hello</button>
            </div>
        </div>
    </>
  )
}

export default DynamicFormGenerator