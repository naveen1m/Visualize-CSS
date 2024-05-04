import React, { useState } from 'react'
import { Container, OptionsBox, OptionItem, TextContainer, DescriptionContainer } from '../../assets/StyledComponents';
import floatAndClear from "../../database/FloatAndClear.json"


function Floatprop() {
  const [selectedFloat, setSelectedFloat] = useState('none');
  const [selectedFloatDescription, setSelectedFloatDescription] = useState('');

  const handleFloatChange = (float, description) => {
    setSelectedFloat(float);
    setSelectedFloatDescription(description);
  };

  return (
    <>
      <Container>
        <OptionsBox>
          {floatAndClear.Float.keyword.map((floatValue, index) => (
            <OptionItem
              key={index}
              onClick={() =>
                handleFloatChange(
                  floatValue,
                  floatAndClear.Float.keywordDescription[floatValue]
                )
              }
            >
              {`float : ${floatValue}`}
            </OptionItem>
          ))}
        </OptionsBox>

        <div>
          <TextContainer>
            <div className="w-16 h-16 bg-cyan-500" style={{ float: selectedFloat }}></div>
            <p>Change the float style to float this box.</p>
          </TextContainer>
          <DescriptionContainer>
            Description:
            <pre>{selectedFloatDescription}</pre>
          </DescriptionContainer>
        </div>
      </Container>
    </>
  )
}

export default Floatprop;
