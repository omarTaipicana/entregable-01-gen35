import { useState } from "react";
import "./App.css";
import phrases from "./utils/phrases.json";
import indexImages from "./utils/indexImages.json";
import getRandomFromArray from "./utils/getRandomFromArray";
import PhraseCard from "./components/PhraseCard";
import BtnPhrase from "./components/BtnPhrase";

function App() {
  const initialPhrase = getRandomFromArray(phrases);
  const [phraseRandom, setPhraseRandom] = useState(initialPhrase);
  const initialImage = getRandomFromArray(indexImages);
  const [imageSelected, setImageSelected] = useState(initialImage);

  const objStyle = {
    backgroundImage: `url("/fortuna-2/fondo${imageSelected}.png")`,
  };

  return (
    <div className="app" style={objStyle}>
      <h1 className="app_title">Galleta de la fortuna</h1>
      <article className="app_card">
        <PhraseCard phraseRandom={phraseRandom} />
        <BtnPhrase
          setPhraseRandom={setPhraseRandom}
          setImageSelected={setImageSelected}
        />
      </article>
    </div>
  );
}

export default App;
