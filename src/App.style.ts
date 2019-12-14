import styled from "styled-components";
import {DefaultStyle} from "./assets/style/style";

interface IProps {
    template?: string;
}

export const AppBase = styled.div<IProps>`

background-color: ${DefaultStyle.bgColor};

h1, h2, h3, h4, h5, h6{
    font-family: ${DefaultStyle.primaryFont};
    color: ${DefaultStyle.primaryColor};
}

p, .btn{
    font-family: ${DefaultStyle.secondaryFont};
    font-size: 1rem;
    color: ${DefaultStyle.secondaryColorTwo};
}

.caption{
    font-family: ${DefaultStyle.cursiveFont};
    color: ${DefaultStyle.cursiveColor};
    font-size: 1.5rem;
}

/* Buttons */
.btn-primary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.primaryColor};
  color:#fff;
}

.btn-primary-outline-${DefaultStyle.themeName}{
  background: none;
  border-color: ${DefaultStyle.primaryColor};
  color:  ${DefaultStyle.primaryColor};
}

.btn-secondary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.secondaryColorOne};
  border-color: ${DefaultStyle.secondaryColorOne};
  color:#fff;
}

.btn-secondary-outline-${DefaultStyle.themeName}{
  border-color: ${DefaultStyle.secondaryColorOne};
  color:  ${DefaultStyle.secondaryColorOne};
}


/*  useless below */

.colorItem{
    height: 10px;
    width: 10px;
    padding-left: 5px;
    display: inline;
}

.colorItem-red{
    background-color: red;
}

.colorItem-black{
    background-color: black;
}

.colorItem-white{
    background-color: white;
}

.colorItem-blue{
    background-color: blue;
}

.colorItem-red{

body {
    background-color: ${DefaultStyle.bgColor};
    font-family: ${DefaultStyle.secondaryFont};
}

.light{
        background: #cecece;
        color: #fff;
}

.dark{
        background: #121212;
        color: #fff;
}




`;