import styled, { css } from "styled-components";
import theme from "../../../utility/constant/theme";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  
  background-color: ${({variant}) => {
    return variant? theme.colors[variant] : theme.colors.succes
    }};


    ${(props) =>
      props.full &&
      css` 
        width: 100%;
        display: block;
      `};


      ${({size})=>{
        return size? theme.size[size] : theme.size.md
        }
      }}



`;





export default Button;
