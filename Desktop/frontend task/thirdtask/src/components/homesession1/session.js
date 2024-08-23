import React from 'react'
import './session.css'
import { DNA } from 'react-loader-spinner'

const Session = () => {
  return (
    <div>
        <div className='session-container'>

            <div className='session-img'>
            <img src='https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Website_homepage_New_Launch_Desktop.png?v=1711630044' />
               </div>
       <div className='session-head'>
        <h4>New Launch</h4>
        <h2>Frizz Control Complex SPF 30 Hair Serum</h2>
        <p>Fights frizz, strengthens hair, protects from heat & sun, and adds shine with Keratin, Ceramide, and Argan Oil.</p>
        <button className='session-but'>Buy Now</button>
        
       </div>
        </div>
      <div className='text-center mt-3'>
      (<DNA
  visible={true}
  height="100"
  width="100"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />)
      </div>
    </div>
  )
}

export default Session
