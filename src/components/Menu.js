import React, { useEffect, useState } from 'react';
import {MenuWrapper, Button} from '../styles/menu/MenuStyles.css'
import { fetchData } from '../requests.js'

export const Menu = (props) => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetchData('/api/v1/menu_items')
      .then(res => setMenuItems(res.data))
      .catch(error => console.log(error))
  })

  const renderMenuItems = () => {
    return menuItems.map((item, i) => {
      <li key={`${item.name}-${i}`}>
        item.name
        item.price
      </li>
    })
  }

  return (
    <MenuWrapper>
        <Button onClick={props.closeMenu}>Return to Main Page</Button>
        <ul>{renderMenuItems()}</ul>
      </MenuWrapper>
  )
}

export default Menu;
