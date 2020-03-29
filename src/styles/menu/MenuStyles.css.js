import styled from 'styled-components';
import {fadeIn} from '../keyframes.css.js'

export const MenuWrapper = styled.div`
  animation: ${fadeIn} 3s ease
`

MenuWrapper.displayName = 'MenuWrapper';

export const Button = styled.h2`
  cursor: pointer
`

Button.displayName = 'Button';