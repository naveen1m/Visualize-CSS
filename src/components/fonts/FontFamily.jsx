import React, { useState } from 'react'
import styled from 'styled-components';
import {FontOptions} from '../../data';

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
  overflow-y: auto;
  transition: background-color 0.3s, box-shadow 1s;
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
  }
`;


function FontFamily () {
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [selectedFontSyntax, setSelectedFontSyntax] = useState('');

  const handleFontChange = (font, syntax) => {
      setSelectedFont(font);
      setSelectedFontSyntax(syntax);
    };
 
  return (
   <>
    <Container>
         <OptionsBox>
           {FontOptions.map((font, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFontChange(font.name, font.syntax)}
             
             >
               {font.display}
             </OptionItem>
           ))}
         </OptionsBox>
         <div>
         <TextContainer style={{ fontFamily: selectedFont }}>
           <p>This is some sample text.</p>
           <p>Change the font family by clicking on the options on the left side.</p>
         </TextContainer>
         <SyntaxContainer>
         Description: 
           <pre>{selectedFontSyntax}</pre>
         </SyntaxContainer>
         </div>
       </Container>
   </>
  )
}

export default FontFamily;