import styled from "styled-components";
import {DefaultStyle} from "./assets/style";

interface IProps {
    template: string;
}

export const AppBase = styled.div<IProps>`


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

h1, h2, h3, h4, h5, h6 {
    font-family: ${DefaultStyle.primaryFont};
    color: ${DefaultStyle.primary}; 
}

p, li, a, ul, .btn {
    font-family: ${DefaultStyle.secondaryFont};
    font-size: 1rem;
    color: ${DefaultStyle.secondary};
}

.sub-title{
  font-family: ${DefaultStyle.subTitleFont};
  font-size: 1.5rem;
  color: ${DefaultStyle.tertiary};
}

/* Background */
.bg-primary-lynne{
  background: ${DefaultStyle.primary};
}

.bg-secondary-lynne{
  background: ${DefaultStyle.secondary};
}

/* Buttons */
.btn-primary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.primary};
  color:#fff;
}

.btn-primary-outline-${DefaultStyle.themeName}{
  background: none;
  border-color: ${DefaultStyle.primary};
  color:  ${DefaultStyle.primary};
}

.btn-secondary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.secondary};
  border-color: ${DefaultStyle.secondary};
  color:#fff;
}

.btn-secondary-outline-${DefaultStyle.themeName}{
  border-color: ${DefaultStyle.secondary};
  color:  ${DefaultStyle.secondary};
}

/* Badges */
.badge-primary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.primary};
  color: #fff;
}

.badge-secondary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.secondary};
  color: #fff;
}

`;