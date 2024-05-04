import React, { useState } from 'react'
import { Container, OptionsBox, OptionItem, TextContainer, DescriptionContainer } from '../../assets/StyledComponents'; // Import the styled components
import typography from "../../database/typography.json"


function Style_Font () {
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedFontDescription, setSelectedFontDescription] = useState('');

    const handleFontStretch = (font, desc) => {
        setSelectedFont(font);
        setSelectedFontDescription(desc);
      };
 
  return (
   <> 
   <h1 className='ml-12 mt-7 font-sans '>Description :</h1>
   <h2 className='mt-5 ml-12 text-xl font-sans'>Font style refers to the visual appearance and design of text characters in typography. It encompasses various attributes that determine how text looks, enhancing its readability and aesthetic appeal. </h2>
    <Container>
         <OptionsBox>
           {typography.fontstyle.keyword.map((font, index) => (
             <OptionItem
               key={index}
               onClick={() => handleFontStretch(font, typography.fontstyle.keywordDescription[font])}
             
             >
               {`font-style : ${font}`}
             </OptionItem>
           ))}
         </OptionsBox>
         <div>
         <TextContainer style={{ fontStyle: selectedFont }}>
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

export default Style_Font;