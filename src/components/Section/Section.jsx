import React from 'react'
import styled from 'styled-components'
import s from './Section.module.css'
import Fade from 'react-reveal/Zoom';

export default function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap id={id} bgImage={backgroundImg}>

      <Fade duration={1000}>
        <ItemText>
          <h1 className={s.title}>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
    
      <ButtonGroup>
        <Fade bottom duration={1500}>
          <LeftButton href="#">
            {leftBtnText}
          </LeftButton>
        </Fade>
      
        {
          rightBtnText &&
          <Fade bottom duration={1500}>
            <RightButton href="#">
              {rightBtnText}
            </RightButton>
          </Fade>
        }
      </ButtonGroup>
        
      
      <DownArrow src="/images/down-arrow.svg" className={s.bouncing}/>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemText = styled.div`
  text-align: center;
  padding-top:8rem;
`

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  column-gap: 1.2rem;
  row-gap: 1.1rem;
  bottom: 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.a`
  background-color: rgba(23, 26, 32, 0.8);
  font-size: .8rem;
  color: white;
  padding: 0.6rem 0;
  border-radius: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-block;
  width: 256px;
  text-align: center;
`

const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.8);
  color: rgb(23, 26, 32);
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  cursor: pointer;
  overflow-x: hidden;
`