import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
`;

export const OptionsBox = styled.div`
  width: 300px;
  max-width: 100%;
  height: 300px;
  overflow-y: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin-left: 50px;
`;

export const OptionItem = styled.div`
  font-size: 18px;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #dcdcdc;
  }
`;

export const TextContainer = styled.div`
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

export const DescriptionContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  margin-left: 20px;
  width: 800px;
  height: 150px;
  overflow-y: auto;
  transition: background-color 0.3s, box-shadow 1s;
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  }
`;
