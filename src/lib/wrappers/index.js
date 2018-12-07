import styled from "styled-components";

const HorizontalWrapper = styled.label`
  cursor: pointer;
  input {
    display: none;
    & + span {
      width: 48px;
      height: 28px;
      border-radius: 14px;
      transition: all 0.3s ease;
      display: block;
      position: relative;
      background: ${props => props.colorOff};
      box-shadow: 0 8px 16px -1px ${props => props.colorOffShadow};
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        transition: all 0.3s ease;
      }
      &:before {
        top: 5px;
        left: 5px;
        width: 18px;
        height: 18px;
        border-radius: 9px;
        border: 5px solid #fff;
      }
      &:after {
        top: 5px;
        left: 32px;
        width: 6px;
        height: 18px;
        border-radius: 40%;
        transform-origin: 50% 50%;
        background: #fff;
        opacity: 0;
      }
      &:active {
        transform: scale(0.92);
      }
    }
    &:checked {
      & + span {
        background: ${props => props.colorOn};
        box-shadow: 0 8px 16px -1px ${props => props.colorOnShadow};
        &:before {
          width: 0px;
          border-radius: 3px;
          margin-left: 27px;
          border-width: 3px;
          background: #fff;
        }
        &:after {
          animation: ${props => props.blobChecked} 0.35s linear forwards 0.2s;
        }
      }
    }
    &:not(:checked) {
      & + span {
        &:before {
          animation: ${props => props.blob} 0.85s linear forwards 0.2s;
        }
      }
    }
  }

  * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
`;

export { HorizontalWrapper };
