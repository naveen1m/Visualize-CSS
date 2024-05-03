import React, { useState } from 'react'
import { Container, OptionsBox, OptionItem, TextContainer, DescriptionContainer } from '../../assets/StyledComponents'; // Import the styled components
import typography from "../../database/typography.json"



function TextDecoration () {
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedFontDescription, setSelectedFontDescrption] = useState('');

    const handleFontStretch = (font, desc) => {
        setSelectedFont(font);
        setSelectedFontDescrption(desc);
      };
 
  return (
   <>
   <h1 className='ml-12 mt-7 mr-10 font-sans '>Description :</h1>
   <h2 className='mt-5 ml-12 mr-10 text-xl font-sans'>Text decoration is a CSS property that allows designers to add visual embellishments to text elements in web development. It includes various styling options that can enhance the appearance of text. </h2>
    <Container>
         <OptionsBox>
           {typography.textdecoration.keyword.map((font, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFontStretch(font, typography.textdecoration.keywordDescription[font])}
             
             >
               {`text-decoration : ${font}`}
             </OptionItem>
           ))}
         </OptionsBox>
         <div>
         <TextContainer style={{ textDecoration: selectedFont }}>
  <p>This is some sample text.</p>
  <p>Change the font style by clicking on the options on the left side.</p>
</TextContainer>

         <DescriptionContainer>
         Description: 
           <pre>{selectedFontDescription}</pre>
         </DescriptionContainer>
         </div>
       </Container>
   </>
  )
}

export default TextDecoration;