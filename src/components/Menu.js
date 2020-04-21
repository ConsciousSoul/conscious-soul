import React, { useEffect, useState } from 'react';
import {MenuWrapper, Button} from '../styles/menu/MenuStyles.css'
import { fetchData } from '../requests.js'

export const Menu = (props) => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetchData().then(res => setMenuItems(res.data)
  })

  return (
    <MenuWrapper>
        <Button onClick={props.closeMenu}>Return to Main Page</Button>
        <p>{JSON.stringify(menuItems)}</p>
      </MenuWrapper>
  )
}

export default Menu;
