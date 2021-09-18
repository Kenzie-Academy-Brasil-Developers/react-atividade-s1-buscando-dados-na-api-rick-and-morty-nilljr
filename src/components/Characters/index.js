import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import CharCard from "../CharCard";

function Characters() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  });
  return (
    <div>
      <h1>Meus personagens</h1>
      {characterList.map((element) => (
        <CharCard character={element} />
      ))}
    </div>
  );
}

export default Characters;
