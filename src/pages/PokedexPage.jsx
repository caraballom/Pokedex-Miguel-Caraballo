import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import SelectType from '../components/PokemonPage/SelectType'
import PokeCard from '../components/PokemonPage/PokeCard'
import '../components/PokedexPage/styles/PokedexPage.css'

const PokedexPage = () => {
  const [inputValue, setinputValue] = useState('')
  const [selectValue, setSetselectValue] = useState('allPokemons')
  const trainerName = useSelector(store => store.trainerName)
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
  const [pokemons, getPokemons, getByTypePokemons] = useFetch(url)
  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getPokemons()
    } else {
      getByTypePokemons(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()
  const handlesubmit = e => {
    e.preventDefault()
    setinputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue)
    return nameFiltered
  }


  return (
    <div className="pokedex-container">
      <header className="header">
        <img className="logo" src="image12.png" alt="" />
      </header>
      <div className="pokedex-line"></div>
      <p className="p"><span className="color__welcome">Welcome {trainerName}</span>, here you can find your favorite pokemon. Let`s go</p>
      <div className="search-container">
        <form className="search" onSubmit={handlesubmit}>
          <input className="input" ref={inputSearch} type="text" />
          <button className="btn">Search</button>
        </form>

        <div className="types">
          <SelectType
            setSetselectValue={setSetselectValue}
          />
        </div>
      </div>
      <div className="pokemon-description">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>

    </div>
  )
}

export default PokedexPage