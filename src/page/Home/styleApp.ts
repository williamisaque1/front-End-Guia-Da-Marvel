import styled, { createGlobalStyle, keyframes } from "styled-components";


const Document = createGlobalStyle`

* {
  
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
body{
  background-color:black;

 


}

`

const Container = styled.div`
 position:absolute
width:100%;
height:100%;
top:0;
left:0

}

`
const slide = keyframes`

  0%{

    transform:translateX(0px);
    

  }
  50%{
    transform:translateX(-350px);
 
  }
  100%{
    
   transform:translate(-350px,-150px)
  
  }
`
const poster = keyframes`

20%{
  background: linear-gradient(to right,rgba(0, 0, 0, 1.9) 50%, rgba(0, 0, 0, 0.8) 52% );
 
}

  100%{
   
    background: linear-gradient(to right,rgba(0, 0, 0, 1.9) 50%, rgba(0, 0, 0, 0.8) 52% ,rgba(0, 0, 0, 0.0)90% ,transparent);
  }

`
const Divbemvindoanimacao = keyframes`

to{
  opacity:1;
}

`
const Divimage = styled.div`
background-image: url("https://s2.glbimg.com/Hg_iwbILkSaXpwG5ZcM6zfS1lWw=/620x466/top/e.glbimg.com/og/ed/f/original/2019/03/14/vinga1.png");
height: 700px;

background-position: right center;
background-repeat: no-repeat;
background-size:contain;
@media (min-width:1200px) AND (max-width:1600px){
    height: 650px;
   

}
@media (min-width:1000px) AND (max-width:1199px){
  height: 450px;
  transform:translate(-1%, 20%);
  
}
@media(min-width:601px) AND (max-width:999px){
  height: 350px;

  transform:translate(-1%, 20%);
}
@media(min-width:300px) AND (max-width:600px){

  height: 300px;
  width:800px;
  transform:translate(-1%, 20%);


  };
`

const Divbackground = styled.div`

Animation:${poster} 3s  linear forwards;
width:100%;
height:100%;                  

position:"absolute";


`
const Conteudo = styled.div`
position:absolute;
width:160 px;
height:350px;
background-color:white;

top:50%;
left:50%;
margin-top:0px;
margin-left:-175px;
background: linear-gradient(to bottom, red 0%, red 20%, black 0%, black 0%);
padding-top:25px;
padding-left:5px;

Animation:${slide} 1.5s cubic-bezier(1,0,0,1.23) forwards ;
@media (min-width:1450px) AND (max-width:1600px){
  transform:translate(-20%, -50%);
  left:50%;
  top:50%;
 

}
@media (min-width:951px) AND (max-width:1449px){
  transform:translate(-20%, -50%);
  left:60%;
  top:50%;
}
@media(min-width:601px) AND (max-width:949px){
  transform:translate(-10%, -50%);
  left:83%;
  top:50%;

}
@media(min-width:300px) AND (max-width:600px){

  transform:translate(-10%, -50%);
  left:83%;
  top:50%;

};


`
const P = styled.p`

font-family: Arial;
color: white;
margin-left:8px;
font-size: 60px

`
const Tituloinput = styled.h3`
color:red; 
font-size:20px;   
padding-left:15px;
white-space: nowrap;
`
const Acesse = styled.p`
color:grey;
padding-left:15px;

`
const Inputemail = styled.input`
margin-top:3px;
background:color:blue;
border-radius:25px;
height:40px;
width:15em;
margin-bottom:8px;
`
const Inputsenha = styled.input`
border-radius:50%;
border-radius:25px;
height:40px;
width:15em
`
const Inputcheck = styled.input`
height:10px;
width:10px;
margin-top:15px;

outline: 2px solid red;
margin-right:5px;
margin-left:10px;
`
const Labelcheck = styled.label`
color:grey;
font-family: Arial;
font-size:9px;
font-weight: 100;
`
const Linkesquecisenha = styled.a`
margin-left:55px;
color:grey;
font-size:10px;
border-bottom: 1.9px solid #8b0000 ;
cursor:pointer;

`
const Psemlogin = styled.p`
color:grey;
font-size:10px;

`
const AcadastreSe = styled.a`
color:red;
font-size:10px;
margin-left:3px;
cursor:pointer;
`
const Botaoentrar = styled.button`
margin-top:15px;
margin-bottom:15px;
background-color:red;
color:white;
font-size:16px;
width:200px;
height:40px;
border:0px;
border-radius:50px;
cursor:pointer;
`

const Divbemvindo = styled.div`
transform:translate(-50%,-50%);
opacity:0;
  left:50%;
  top:65%;
  transform:translate
  width:250px;
  height:300px;
 margin-top:20px;
  padding-left:5px;
  position:absolute;
  z-index:1;  
  Animation:${Divbemvindoanimacao} 2s 1s linear forwards;
 
`

export { Document, Container, P, Conteudo, Divimage, Divbackground,Tituloinput,Divbemvindo,Acesse,Inputemail,Inputsenha, Inputcheck, Labelcheck,Linkesquecisenha,Psemlogin,AcadastreSe,Botaoentrar };
