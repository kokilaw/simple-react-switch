import {keyframes} from "styled-components";

const Blob = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.12, .94);
  }
  60% {
    transform: scale(.96, 1.06);
  }
`;

const BlobChecked = keyframes`
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  30% {
    transform: scaleX(1.44);
  }
  70% {
    transform: scaleX(1.18);
  }
  50%,
  99% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
`;

export {Blob, BlobChecked};
