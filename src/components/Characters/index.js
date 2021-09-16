import "./style.css";
import CharCard from "../CharCard";

function Characters({ characterList }) {
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
