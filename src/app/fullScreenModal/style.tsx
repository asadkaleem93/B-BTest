import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;

  .modal-content {
    color: var(--fk-primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  .modal-close-btn {
    width: 50px;
    height: 50px;
    background-color: #ffffff50;
    border-radius: 50%;
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
  }
  .img-modal-wrapper {
    .xyz {
      height: 100vh;
      width: 100%;
    }
  }
`;
