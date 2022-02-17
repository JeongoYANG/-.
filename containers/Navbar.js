import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Navbar(){
    return (
      <dvi> 
<nav>
      <Ul>
        <Li><Link to={"/"}>Home</Link></Li>
        <Li><Link to="/bmi">Bmi</Link></Li>
        <Li><Link to="/calc">Calc</Link></Li>
        <Li><Link to="/grade">Grade</Link></Li>
        <Li><Link to="/join">Join</Link></Li>
        <Li><Link to="/login">Login</Link></Li>
      </Ul>
    </nav>



</dvi>
)
}
const Ul = styled.ul`
background-color: #66FFFF;
text-decoration: none;
text-align: center;
`
const Li = styled.li`
margin-left: 1em;
font-size: 20px;
text-align: center;
display: inline-block;
`
