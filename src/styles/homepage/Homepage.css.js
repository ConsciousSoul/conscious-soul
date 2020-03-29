import styled, { keyframes, css } from 'styled-components';

const fade = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`
export const Wrapper = styled.div`
  text-align: center;
`;

Wrapper.displayName = 'Wrapper';

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

Header.displayName = 'Header';

export const Title = styled.h1`
  color: #91ecda
`;

Title.displayName = 'Title';

export const TitleWrapper = styled.div`
  animation: ${fade} 2s ease
`

export const Button = styled.h2`
  cursor: pointer
`

Button.displayName = 'MenuButton';

export const Menu = styled.div`
  animation: ${fade} 2s ease
`

Menu.displayName = 'Menu';


