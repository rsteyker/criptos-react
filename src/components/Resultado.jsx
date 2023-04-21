import styled from "@emotion/styled";

const Contenedor = styled.div`
    color: #66A2FE;
    font-family: 'Lato', sans-serif;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border: 1px solid #FFF;
    border-radius: 10px;
`
const Imagen = styled.img`
    display: block;
    width: 150px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
        color: #fff;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
        color: #FFF;
    }
`

const Resultado = ({cotizacion}) => {
    const { 
        PRICE, 
        HIGHDAY, 
        LOWDAY, 
        CHANGEPCT24HOUR, 
        IMAGEURL, 
        LASTUPDATE 
    } = cotizacion

  return (
    <Contenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen"
        />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
