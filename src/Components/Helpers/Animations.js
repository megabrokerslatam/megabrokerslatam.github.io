import { keyframes } from 'styled-components'

// Create the keyframes
const slideFromRight = keyframes`
  from {
    right: -100%;
  }

  to {
    right: 0;
  }
`;

export { slideFromRight }