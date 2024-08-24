import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import ButtonComponent from './components/ButtonComponent';
import CardComponent from './components/CardComponent';
import SecoundCard from './components/SecoundCard';


const ReusabelDisplay = () => {
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
    })

      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(value, 'values');

        setValue({
            firstName: '',
            lastName: '',
        })
    };

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <InputComponent
                name='firstName'
                type='text'
                value={value.firstName}
                placeholder="First Name"
                setValues={setValue}
            />
            <InputComponent
                name='lastName'
                type='text'
                value={value.lastName}
                placeholder="Last Name"
                setValues={setValue}
            />
            <ButtonComponent type='submit'>Check Output</ButtonComponent> 
        </form>

        <div className='d-flex '>
            {/* Card with custom content */}
            <CardComponent
                // imgSrc="https://example.com/custom-image.jpg"
                title="Custom Card Title"
                description="This is a custom description for the card.This is a custom description for the card"
                buttonText="Read More"
            />
            
            {/* Card with default content */}
            <CardComponent />
        </div>


<div className='mt-5 pt-5'>
<SecoundCard 
itemOne="srikanth"
itemTwo="Thrianth"
itemThird="Ajay"
footeritem="Monosage"
imgurl='https://img.freepik.com/free-photo/adorable-boy-fantasy-world_23-2151732324.jpg?t=st=1724490875~exp=1724494475~hmac=f2f5580db9fdf3ba9020aec53eb4abe171abf7edbb0070180618883a13076929&w=740'



/>
</div>
        </div>
    )
}

export default ReusabelDisplay