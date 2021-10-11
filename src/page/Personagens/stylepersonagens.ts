import styled, { createGlobalStyle, keyframes } from "styled-components";
const Container = styled.div`
background-image: linear-gradient(to right, rgba(0,0,0,0.8) 30% ,rgba(0,0,0,0.4) 90% ,transparent), url("https://s2.glbimg.com/Hg_iwbILkSaXpwG5ZcM6zfS1lWw=/620x466/top/e.glbimg.com/og/ed/f/original/2019/03/14/vinga1.png");
background-position: 236% 120px;
background-repeat: no-repeat;
background-size:80% 620px;
position:absolute;
width:100%;
height:97vh;
overflow-x: hidden;


`



const Navmenu = styled.nav`
color:red;
border-bottom:0.1em solid grey;
box-shadow:1px 1px 10px 1px red;

height:35%;
width:10%
position:relative;
background-color:black;


`
const P = styled.p`

font-family: Arial;
color: white;
margin-left:8px;
font-size: 60px;
position:absolute;
width:150px;
height:60px;
background-color:white;
margin-top:20px;
margin-left:-175px;
background: linear-gradient(to bottom, red 0%, red 150%, black 0%, black 0%);
padding-top:20px;
padding-left:5px;
padding-right:25px;
left:18%;
`
const Lista =styled.ul`
position:relative;
 color: grey;
 font-size:30px;
 font-weight:bold;
 transform: translate(40%, 150%);
 font-family:Arial;


`
const ListaIndice = styled.li`
display:inline-block;
margin:0px 10% 0px 0px;
cursor:pointer;
&.selecionado{
    color:white;
}

`
export  {Container,Navmenu,P,Lista,ListaIndice};