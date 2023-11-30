import './styles/SelectType.css'
import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setSetselectValue}) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [ infoTypes, getInfoTypes ] = useFetch(url)

    useEffect(() => {
        getInfoTypes()
    },[])

    const selectElement = useRef()

    const handleChange = () => {
        setSetselectValue(selectElement.current.value)
    }

  return (
    <select className="select" ref={selectElement} onChange={handleChange}>
        <option value="allPokemons">All pokemons</option>
        {
            infoTypes?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType