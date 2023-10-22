import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #79b9f9;
  z-index: 1200;
`;

export const ModalContent = styled.div`
  border-radius: 25px;
  overflow: hidden;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
