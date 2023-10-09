// import React, { useState } from 'react'
// import styled from 'styled-components';
// import {WHopt} from '../../data';

// const Container = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin-top: 50px;
// `;

// const OptionsBox = styled.div`
//   width: 300px;
//   height: 300px;
//   overflow-y: auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #f0f0f0;
//   margin-left: 50px;
// `;

// const OptionItem = styled.div`
//   font-size: 18px;
//   padding: 10px;
//   margin: 5px 0;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:hover {
//     background-color: #dcdcdc;
//   }
// `;

// const TextContainer = styled.div`
//   height: ${selectedFont}, 
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 24px;
//   margin-left: 20px;
//   width:800px;
  
  
//   transition: background-color 0.3s, box-shadow 1s;
//   &:hover {
//     background-color: #f0f0f0;
//     box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
//   }
// `;



// function Keyword () {
//   const [selectedFont, setSelectedFont] = useState('auto');

//   const handleFontChange = (height, syntax) => {
//       setSelectedFont(height);
//     };
 
//   return (
//    <>
//     <Container>
//          <OptionsBox>
//            {WHopt.map((height, index) => (
//              <OptionItem
//                key={index}
//                onClick={() => handleFontChange(height.name)}
             
//              >
//                {height.display}
//              </OptionItem>
//            ))}
//          </OptionsBox>
//          <div>
//          <TextContainer>
//            <p>This is some sample text.</p>
//            <p>Change the font family by clicking on the options on the left side.</p>
//          </TextContainer>
        
//          </div>
//        </Container>
//    </>
//   )
// }

// export default Keyword;


import React, { useState } from 'react';
import styled from 'styled-components';
import { WHopt } from '../../data';

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
height: ${(props) => props.fontHeight};  
padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 24px;
  margin-left: 20px;
  width: 800px;
  transition: background-color 0.3s, box-shadow 1s;
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

function Keyword() {
  const [selectedFont, setSelectedFont] = useState('auto');

  const handleFontChange = (height) => {
    setSelectedFont(height);
  };

  return (
    <>
      <Container>
        <OptionsBox>
          {WHopt.map((height, index) => (
            <OptionItem key={index} onClick={() => handleFontChange(height.name)}>
              {height.display}
            </OptionItem>
          ))}
        </OptionsBox>
        <div>
          <TextContainer fontHeight={selectedFont}>
            <p>This is some sample text.</p>
            <p>Change the font family by clicking on the options on the left side.</p>
          </TextContainer>
        </div>
      </Container>
    </>
  );
}

export default Keyword;
