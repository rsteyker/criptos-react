import styled from "@emotion/styled";

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFFFFF;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
