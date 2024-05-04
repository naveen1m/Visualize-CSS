import React, { useState } from 'react'
import { Container, OptionsBox, OptionItem, TextContainer, DescriptionContainer } from '../../assets/StyledComponents'; // Import the styled components
import typography from "../../database/typography.json"



function FontWeight () {
    const [selectedFont, setSelectedFont] = useState('normal');
    const [selectedFontDescription, setSelectedFontDescription] = useState('');

    const handleFontWeight = (font, desc) => {
        setSelectedFont(font);
        setSelectedFontDescription(desc);
      };
 
  return (
   <>
    <h1 className='ml-12 mt-7 mr-10 font-sans '>Description :</h1>
   <h2 className='mt-5 ml-12 mr-10 text-xl font-sans'>Font weight is a typographic property that determines the thickness or boldness of characters within a typeface. It affects how text appears on a page or screen by controlling the visual prominence of the text. Font weight can range from light or thin (low weight) to bold or heavy (high weight), and it plays a crucial role in defining the style, readability, and emphasis of written content. </h2>
    <Container>
         <OptionsBox>
           {typography.fontweight.keyword.map((font, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFontWeight(font, typography.fontweight.keywordDescription[font])}
             
             >
               {`font-weight : ${font}`}
             </OptionItem>
           ))}
         </OptionsBox>
         <div>
         <TextContainer style={{ fontWeight: selectedFont }}>
  <p>This is some sample text.</p>
  <p>Change the font stretch by clicking on the options on the left side.</p>
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

export default FontWeight