import { MouseOptions } from "puppeteer";
import React, { MouseEvent, useEffect, useState } from "react";

import { Container, Navmenu, P, Lista, ListaIndice } from "./stylepersonagens";

const Personagens: React.FC = () => {
  const [guia, setguia] = useState<string | null>("");
  const [img, setimg] = useState<string>("");
  useEffect(() => {
    document.querySelector("nav ul li")?.classList.add("selecionado");
  }, []);
  const selecionou = (e: MouseEvent) => {
    for (let index = 0; index < 3; index++) {
      if (
        (e.target as Element).textContent !=
        (e.currentTarget as Element).children.item(index)?.textContent
      ) {
        (e.currentTarget as Element).children
          .item(index)
          ?.classList.remove("selecionado");
      } else {
        (e.target as Element).classList.add("selecionado");
      }
    }

    setguia((e.target as Element).textContent);
  };

  return (
    <Container>
      <Navmenu>
        <P>MA</P>
        <Lista onClick={(e) => selecionou(e)}>
          <ListaIndice>Personagens</ListaIndice>
          <ListaIndice>Filmes</ListaIndice>
          <ListaIndice>HQs</ListaIndice>
        </Lista>
      </Navmenu>
    </Container>
  );
};
export default Personagens;

/*
  const api = async () => {
    const chavepublica = "92a3af164fd54b0b6aeb349e59f9d271";
    const timestamp = "1633931387097";
    const hash = "c915eab042b06dbe4d5ed016cfbe271f";
    fetch(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=Spider-man&ts=${timestamp}&apikey=${chavepublica}&hash=${hash}&limit=8`
    )
      .then((dado) => {
        dado.json().then((perso) => {
          console.log(perso.data);
          setimg(perso.data.results[4].thumbnail.path);
        });
      })
      .catch((err) => console.log(err));
  };
  api();
  */
