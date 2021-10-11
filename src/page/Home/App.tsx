import React, { useState } from "react";
import {
  Container,
  P,
  Conteudo,
  Divimage,
  Divbackground,
  Divbemvindo,
  Tituloinput,
  Acesse,
  Inputemail,
  Inputsenha,
  Inputcheck,
  Labelcheck,
  Linkesquecisenha,
  Psemlogin,
  AcadastreSe,
  Botaoentrar,
} from "./styleApp";
import { Link } from "react-router-dom";
const App: React.FC = () => {
  const [acabouAnimacao, setacabouAnimacao] = useState(false);
  document.addEventListener("animationend", (e) => {
    if (e.timeStamp.toString().slice(0, 1) == "1") {
      setacabouAnimacao(true);
    }
  });
  return (
    <Container>
      <Divimage style={!acabouAnimacao ? { backgroundImage: "none" } : {}}>
        <Divbackground>
          <Conteudo>
            <P>MA</P>
            <P>RVE</P>
            <P>L</P>
            <Divbemvindo>
              <Tituloinput>Bem vindo(a) de volta!</Tituloinput>
              <Acesse>Acesse Sua Conta:</Acesse>
              <Inputemail></Inputemail>
              <Inputsenha></Inputsenha>
              <Inputcheck type={"checkbox"}></Inputcheck>
              <Labelcheck>Salvar login</Labelcheck>
              <Linkesquecisenha>Esqueci a senha</Linkesquecisenha>
              <Link to="/menu/personagens">
                <Botaoentrar>Entrar</Botaoentrar>
              </Link>
              <Psemlogin>
                Ainda não tem o login?<AcadastreSe>Cadastre-se</AcadastreSe>
              </Psemlogin>
            </Divbemvindo>
          </Conteudo>
        </Divbackground>
      </Divimage>
    </Container>
  );
};

export default App;
