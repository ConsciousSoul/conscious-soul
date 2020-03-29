import React from 'react';
import {MenuWrapper, Button} from '../styles/menu/MenuStyles.css'

export const Menu = (props) => {
  return (
    <MenuWrapper>
        <Button onClick={props.closeMenu}>Return to Main Page</Button>
        <p>Menu will go here</p>
      </MenuWrapper>
  )
}

export default Menu;