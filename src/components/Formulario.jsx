import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
//import axios from 'axios';


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    padding: 10px;
    width: 100%;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({ setMonedas }) => {

    const [ criptos, setCriptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
    const [ criptomoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD" 
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            //Crear nuevo arreglo para mi lista
            const arrayCriptos = resultado.Data.map( cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            } )
            setCriptos(arrayCriptos);

        }

        consultarAPI();

    }, [])

    const handlesubmit = e => {
        e.preventDefault();

        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return 
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            onSubmit={handlesubmit}
        >

            <SelectMonedas />
            <SelectCriptoMoneda/>

            <InputSubmit 
                type='submit' 
                value='Cotizar'
            />
        </form>
    </>
  )
}

export default Formulario 
