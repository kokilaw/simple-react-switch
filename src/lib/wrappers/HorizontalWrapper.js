import styled from "styled-components";
import { rgba } from "polished";

import { Blob, BlobChecked } from "./HorizontalAnimations";

import hexColorPropType from "../util/hexColorPropType";

const HorizontalWrapper = styled.label.attrs({
  offColorShadow: props => rgba(props.offColor, 0.2),
  onColorShadow: props => rgba(props.onColor, 0.2),
  blobChecked: props => BlobChecked,
  blob: props => Blob
})`
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
      background: ${props => props.offColor};
      box-shadow: 0 8px 16px -1px ${props => props.offColorShadow};
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
        border: 5px solid ${props => props.foregroundColor};
      }
      &:after {
        top: 5px;
        left: 32px;
        width: 6px;
        height: 18px;
        border-radius: 40%;
        transform-origin: 50% 50%;
        background: ${props => props.foregroundColor};
        opacity: 0;
      }
      &:active {
        transform: scale(0.92);
      }
    }
    &:checked {
      & + span {
        background: ${props => props.onColor};
        box-shadow: 0 8px 16px -1px ${props => props.onColorShadow};
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

HorizontalWrapper.propTypes = {
  onColor: hexColorPropType,
  offColor: hexColorPropType,
  foregroundColor: hexColorPropType
};

HorizontalWrapper.defaultProps = {
  onColor: "#48EA8B",
  offColor: "#FF4651",
  foregroundColor: "#fff"
};

export default HorizontalWrapper;
