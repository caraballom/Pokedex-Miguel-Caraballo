import './styles/PokeCard.css'
import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"


const PokeCard = ({ url }) => {

    const [infoPoke, getInfoPoke] = useFetch(url)

    useEffect(() => {
        getInfoPoke()
    }, [])

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/pokedex/${infoPoke.id}`)
    };

    const firstType = infoPoke?.types[0].type.name

    return (
        <article className={`pokecard ${firstType}-border`} onClick={handleNavigate}>
            <header className={`pokecard-header ${firstType}-gradient`}>
                <img className="pokecard-image" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <section className="pokecard-body">
                <h3 className={`pokecard-name ${firstType}-color`}>{infoPoke?.name}</h3>
                <ul className="pokecard-types">
                    {
                        infoPoke?.types.map(infoType => (
                            <li className="pokecard-typename" key={infoType.type.url}>{infoType.type.name}</li>
                        ))
                    }
                </ul>
                <hr className="pokecard-hr" />
                <ul className="pokecard-stats">
                    {
                        infoPoke?.stats.map(infoStat => (
                            <li className="pokecard-stat" key={infoStat.stat.url}>
                                <span className="pokecard-stat-name">{infoStat.stat.name}</span>
                                <span className={`pokecard-stat-value ${firstType}-color`}>{infoStat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default PokeCard