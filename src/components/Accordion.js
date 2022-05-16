import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
// import {  FiMinus,FiPlus} from 'react-icons/fi'
import {BsBell} from 'react-icons/bs'
import Boxes from './boxes';
import {GrBottomCorner} from 'react-icons/gr'
import{FcNext} from 'react-icons/fc'
import '../index.css'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;  
  width:100%;
  background: #F2F7FA;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  box-sizing:border-box;  
`;


const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width:50%;
  box-sizing:border-box;
`;

const Wrap = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  align-items:center;
  display:flex;
  width:1000px; 
  height:80px;

  h1 {
    padding: 2rem;
    font-size: 2rem;
    color:#42445A;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-left:250px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
   background: #FFFFFF;       
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;;
  color: 
  #42445A;
  width: 1000px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  height:185px;
  box-sizing:border-box;
  p {
    
    max-width:50%;
  flex-wrap:wrap;
    padding:30px;
    overflow:hidden;
    
    font-family: Gotham Pro;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    justify-content:start;

  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
 
    
    <IconContext.Provider value={{ color: '#00FFB9', size: '32px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
              <h1 className='box-blue'><BsBell/></h1>

                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <GrBottomCorner /> : <FcNext/>}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
        <Boxes/>
      </AccordionSection>
    </IconContext.Provider>
    
  );
};

export default Accordion;
