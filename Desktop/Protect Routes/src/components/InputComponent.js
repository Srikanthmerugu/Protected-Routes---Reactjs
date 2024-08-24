import React from 'react'

function InputComponent ({name,value,placeholder,setValues})  {
  return (
    <div>
        <input 
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e)=>setValues(val=>({...val,[name]:e.target.value}))}
                />
    </div>
  )
}

export default InputComponent