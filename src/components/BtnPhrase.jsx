import React from 'react'
import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from "../utils/phrases.json"
import indexImage from "../utils/indexImages.json"
import "./styles/BtnPhrase.css"

const BtnPhrase = ({setPhraseRandom, setImageSelected}) => {

    const handleClick = () => {
       const phrase = getRandomFromArray(phrases)
       setPhraseRandom(phrase)
       const image = getRandomFromArray(indexImage)
       setImageSelected(image)

    }

  return (
    <button className='card_btn' onClick={handleClick} >Prueba tu suerte</button>
  )
}

export default BtnPhrase