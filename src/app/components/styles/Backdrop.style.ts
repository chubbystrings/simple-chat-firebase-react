import styled from "styled-components";

interface SPINNERPROPS {
    width?: string;
    height?: string;
}

export const Backdrop = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: flex; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: ${ (props: SPINNERPROPS) => props.width ? props.width + 'px' : '40px'};
  height: ${ (props) => props.height ? props.height + 'px' : '40px'};
  display: block;
  border: 3px solid transparent;
  border-top-color: #5ae4ca;
  animation: spin 1s ease infinite;

  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
`;
