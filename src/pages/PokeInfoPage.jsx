import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/PokeInfoPage/styles/PokeInfoPage.css'

const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  },[])

  console.log(pokemon);

  const firstType = pokemon?.types[0].type.name
  const firstType1 = pokemon?.types.map(infoTypes => {infoTypes.type.name})

  return (
    <div className="infoPage">
      <header className="header">
        <img className="logo" src="image12.png" alt="" />
      </header>
      <div className="line"></div>
      <article className="card-info1">
        <header className={`poke-header1 ${firstType}-gradient`}>
          <img className="poke-image1" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <h2 className={`poke-id ${firstType}-color`}>#{pokemon?.id}</h2>
        <h2 className={`poke-name1 ${firstType}-color`}>{pokemon?.name}</h2>
        <ul className="poke-caract">
          <li className="poke-weight">
            <span className="poke-weight_name">Weight</span>
            <span className="poke-weight_value">{pokemon?.weight}</span> 
             </li>
          <li className="poke-weight">
             <span className="poke-weight-name">Height</span>
             <span className="poke-weight-value">{pokemon?.height}</span>
             </li>
        </ul>
        <div className="poke-bloque2">
          <ul className="poke-types">
            <h2 className="poke-bloque-title">Type</h2>
            <div className="poke-bloque-name1">
            {
              pokemon?.types.map(infoType => (
                <li className={`poke-bloque-info ${infoType.type.name}-back`} key={infoType.type.url}>{infoType.type.name}</li>
              ))
            }
            </div>
          </ul>
          <ul className="poke-skills">
          <h2 className="poke-bloque-title" >Skills</h2>
            <div className="poke-bloque-name">
            {
              pokemon?.abilities.map(infoAbilities => (
                <li className="poke-bloque-info1"  key={infoAbilities.ability.url}>{infoAbilities.ability.name}</li>
              ))
            }
            </div>
          </ul>
        </div>
        <div  className="poke-stats">
          <h2 className="poke-stats-title">Stats</h2>
          <ul >
            <div className="poke-stats-container">
            <li className="poke-stats-name">{pokemon?.stats[0].stat.name}:</li>
            <li className="poke-stats-value">{pokemon?.stats[0].base_stat}/150</li>
            </div>
            <div className="poke-container">
              <div className="poke-valor"></div>
            </div>
            <div className="poke-stats_container">
              <li className="poke-stats_name">{pokemon?.stats[1].stat.name}:</li>
              <li className="poke-stats_value">{pokemon?.stats[1].base_stat}/150</li>
            </div>
            <div className="poke-container">
              <div className="poke-valor2"></div>
            </div>
            <div className="poke-stats-container">
              <li className="poke-stats-name">{pokemon?.stats[2].stat.name}:</li>
              <li className="poke-stats-value">{pokemon?.stats[2].base_stat}/150</li>
            </div>
            <div className="poke-container">
              <div className="poke-valor3"></div>
            </div>
            <div className="poke-stats-container">
              <li className="poke-stats-name">{pokemon?.stats[5].stat.name}:</li>
              <li className="poke-stats-value">{pokemon?.stats[5].base_stat}/150</li>
            </div>
            <div className="poke-container">
              <div className="poke-valor4"></div>
            </div>
          </ul>
        </div>
      </article>
      <article className="card-info2">
      <h2 className="poke-moves-title">Movements</h2>
        <ul className="poke-moves">
          {
            pokemon?.moves.map(infoMoves => (
              <li className="poke-moves-name" key={infoMoves.move.url}>{infoMoves.move.name}</li>
            ))
          }
        </ul>
      </article>
    </div>
  )
}

export default PokeInfoPage