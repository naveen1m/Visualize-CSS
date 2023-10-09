import React, { useState } from 'react'
import styled from 'styled-components';
import {Clearopt} from '../../data'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
`;

const OptionsBox = styled.div`
  width: 300px;
  height: 300px;
  overflow-y: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin-left: 50px;
`;

const OptionItem = styled.div`
  font-size: 18px;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const TextContainer = styled.div`

  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 24px;
  margin-left: 20px;
  width:800px;
  height:300px;
  transition: background-color 0.3s, box-shadow 1s;
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
  }
`;

const SyntaxContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  margin-left: 20px;
 
  height: 150px;
  width: 800px;
  overflow-y: auto;
  transition: background-color 0.3s, box-shadow 1s;
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
  }
`;
function Clearprop () {
  const [selectedFloat, setSelectedFloat] = useState('none');
  const [selectedFloatSyntax, setSelectedFloatSyntax] = useState('');

  const handleFloatChange = (float, syntax) => {
      setSelectedFloat(float);
      setSelectedFloatSyntax(syntax);
    };
  return (
    <>

<Container>
         <OptionsBox>
           {Clearopt.map((float, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFloatChange(float.name, float.syntax)}
             
             >
               {float.display}
             </OptionItem>
           ))}
         </OptionsBox>

         <div>
         
         <TextContainer>
        <div className='w-14 h-12 bg-cyan-500 float-left'></div>
        <div className='w-14 h-28 bg-pink-500 float-right'></div>
        <div style={{clear:  selectedFloat }}>
        <p>This is the demo text where we wanna show you that how 'clear' property works. so choose according toyou that how should you put clear property from the options.</p>
        </div>
       
         </TextContainer>
         <SyntaxContainer>
         Description: 
           <pre>{selectedFloatSyntax}</pre>
         </SyntaxContainer>
         </div>
       </Container>
     
  </>
  )
}

export default Clearprop;