import React, { useState } from 'react'
import { Container, OptionsBox, OptionItem, TextContainer, DescriptionContainer } from '../../assets/StyledComponents';
import floatAndClear from "../../database/FloatAndClear.json"


function Clearprop () {
  const [selectedClear, setSelectedClear] = useState('none');
  const [selectedClearDescription, setSelectedClearDescription] = useState('');

  const handleFloatChange = (float, syntax) => {
      setSelectedClear(float);
      setSelectedClearDescription(syntax);
    };
  return (
    <>

<Container>
         <OptionsBox>
           {floatAndClear.Clear.keyword.map((clearvalue, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFloatChange(clearvalue, floatAndClear.Clear.keywordDescription[clearvalue])}
             
             >
               {`clear : ${clearvalue}`}
             </OptionItem>
           ))}
         </OptionsBox>

         <div>
         
         <TextContainer>
        <div className='w-14 h-12 bg-cyan-500 float-left'></div>
        <div className='w-14 h-28 bg-pink-500 float-right'></div>
        <div style={{clear:  selectedClear }}>
        <p>This is the demo text where we wanna show you that how 'clear' property works. so choose according toyou that how should you put clear property from the options.</p>
        </div>
       
         </TextContainer>
         <DescriptionContainer>
         Description: 
           <pre>{selectedClearDescription}</pre>
         </DescriptionContainer>
         </div>
       </Container>
     
  </>
  )
}

export default Clearprop;