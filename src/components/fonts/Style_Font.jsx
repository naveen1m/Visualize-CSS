import React, { useState } from 'react'
import styled from 'styled-components';
import {StyleOption} from '../../data';

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


function Style_Font () {
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedFontSyntax, setSelectedFontSyntax] = useState('');

    const handleFontStretch = (font, syntax) => {
        setSelectedFont(font);
        setSelectedFontSyntax(syntax);
      };
 
  return (
   <> 
   <h1 className='ml-12 mt-7 font-sans '>Description :</h1>
   <h2 className='mt-5 ml-12 text-xl font-sans'>Font style refers to the visual appearance and design of text characters in typography. It encompasses various attributes that determine how text looks, enhancing its readability and aesthetic appeal. </h2>
    <Container>
         <OptionsBox>
           {StyleOption.map((font, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFontStretch(font.name, font.syntax)}
             
             >
               {font.display}
             </OptionItem>
           ))}
         </OptionsBox>
         <div>
         <TextContainer style={{ fontStyle: selectedFont }}>
  <p>This is some sample text.</p>
  <p>Change the font style by clicking on the options on the left side.</p>
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

export default Style_Font;