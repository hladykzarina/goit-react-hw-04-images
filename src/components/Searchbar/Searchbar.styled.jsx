import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px 20px 2px 20px;

  width: 100vw;
  background: lightblue;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 120px;
  height: 40px;

  line-height: 100%;
  text-align: center;
  color: #ffffff;

  border-radius: 12px;

  background: linear-gradient(180deg, #40df9f 0%, #3ed598 100%);
  box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3);

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #286053;
  }
`;
export const Input = styled.input`
  margin: 12px;
  width: 226px;
  height: 40px;
  border-radius: 12px;
  background: #79b9f9;
  display: flex
  justify-content: center;
  text-align: center;
`;
