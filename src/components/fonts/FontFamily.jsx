import React, { useState } from 'react';
import typography from "../../database/typography.json";
import { Container, OptionsBox, OptionItem, TextContainer, DescriptionContainer } from '../../assets/StyledComponents'; // Import the styled components

function FontFamily () {
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [selectedFontDescription, setSelectedFontDescription] = useState('');

  const handleFontChange = (font, descript) => {
    setSelectedFont(font);
    setSelectedFontDescription(descript);
  };

  return (
    <>
      <Container>
        <OptionsBox>
          {typography.fontfamily.keyword.map((font, index) => (
            <OptionItem
              key={index}
              onClick={() => handleFontChange(font, typography.fontfamily.keywordDescription[font])}
            >
              {`font-family : ${font}`}
            </OptionItem>
          ))}
        </OptionsBox>
        <div>
          <TextContainer style={{ fontFamily: selectedFont }}>
            <p>This is some sample text.</p>
            <p>Change the font family by clicking on the options on the left side.</p>
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

export default FontFamily;
