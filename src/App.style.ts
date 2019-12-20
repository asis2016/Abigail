import styled from "styled-components";
import {color, DefaultStyle, font} from "./assets/style/style";

interface IProps {
    template?: string;
}

export const AppBase = styled.div<IProps>`

font-family: ${font.secondary.family};

h1, h2, h3, h4, h5, h6{
    font-family: ${font.primary.family};
    color: ${color.text};
}

h1{
    font-size: 1.8rem;
}

.caption{
    font-family: ${font.caption.family};
    color: ${color.primary};
    font-size: 1.5rem;
}

h3{
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
}

p, a, .nav-link, .text-muted, label,th,td{
    font-family: ${font.secondary.family};
}

p, label, th, td{
    font-size: 14px;
    color: ${color.text};
}

a{
    font-size: 14px;
    color: ${color.primary};
}

a:hover{
    color: ${color.primaryLight};
}

.text-muted{
    font-size: 13px;
}

/* Buttons */
.btn-primary{
  background-color: ${color.primary};
  border-color: ${color.primary};
  color: ${color.white};
}

.btn-primary:hover {
  background-color:  ${color.primaryLight};;
  color: ${color.white};
}

.btn-primary-outline{
  background: none;
  border-color: ${color.primary};
  color: ${color.primary};
}

.btn-secondary{
    background: ${color.secondary};
    border-color: ${color.secondary};
    color: ${color.white};
}

.btn-secondary-outline{
  background: none;
  border-color: ${color.secondary};
  color: ${color.secondary};
}

/* Badge */
.badge-primary{
    background-color: ${color.secondary};
}

/* List Group */
.list-group-item{
    padding-left:0px;
}

/* Input group text */
.input-group-text{
    background-color: ${color.primary};
    border:1px solid ${color.primary};
    color: ${color.white};
}

.form-control{
    border:1px solid ${color.primary};
}

`;