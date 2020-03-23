import React from 'react';
import { NavLink } from 'react-router-dom';
import data from './data';

const MenuItems = () => {
  return (
    <>
      {data.map(item => (
        <NavLink
          key={item.name}
          name={item.name}
          className="link"
          to={item.to}
          activeClassName="active"
        >
          {item.titulo}
        </NavLink>
      ))}
    </>
  )
}

export default MenuItems;