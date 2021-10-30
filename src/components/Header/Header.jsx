import React, { useState } from 'react';
import s from './Header.module.css';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Fade } from '@material-ui/core';
import { selectCars } from '../../features/carSlice/carSlice';
import { useSelector } from 'react-redux'

export default function Header() {

  const cars = useSelector(selectCars)
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="error" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => <li key={index}><a className={s.menu__item} href={`#${car}`}>{car}</a></li>)}
      </Menu>
      <RightMenu>
        <a className={s.menu__item} href="#shop">Shop</a>
        <a className={s.menu__item} href="#">Tesla Account</a>
        <CustomMenu onClick={() => {
          setToggleNav(true)
        }} />
      </RightMenu>

      <BurgerNav show={toggleNav}>
        <CloseNav onClick={() => {
          setToggleNav(false)
        }}
        />
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        {cars && cars.map((car, index) => <li key={index}><a href={`#${car}`}>{car}</a></li>)}
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Power</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Test Drive</a></li>

      </BurgerNav>
      

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 3;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.ul`
  display: flex;
  column-gap: 20px;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
  }
  
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: white;
  right: 0;
  width: 300px;
  z-index: 10000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)" };
  transition: transform .2s ease-in;
  a {
    color: #393c41;
    &:hover {
      color: black;
    }
  }

  li {
    padding: 15px 0;
    font-weight: 600;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  }

`

const CloseNav = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`