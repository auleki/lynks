import styled, { css } from 'styled-components'
import { colors, fonts } from '../utils/constants'

export interface INavProps {
  width: number
}

export interface ISideNavProps {
  width: number 
  collapsed: boolean
  
}

export const AppContainer = styled.div(
  (p: INavProps) => css`
    background-color: ${colors.darkBlue};
    min-height: 109vh;
    color: white;
    /* width: ; */
    font-family: ${fonts.paragraphFont};
    padding: 1em 3em 1em 0;
    transition: padding-left 200ms ease-in;
    padding-left: ${p.width + 80}px;
    
  `
)

export const SidebarS = styled.div(
  (p: INavProps) => css`
    position: fixed;
    left: 0;
    top: 0;
    padding: 1em;
    width: ${p.width}px;
    overflow: hidden;
    transition: width 200ms ease-in;
    background-color: ${colors.darkBlue};
    border-right: 1px solid ${colors.black};
    height: 100vh;
  `
)

export const Button = styled.div(
  () =>css`
    padding: 1em;
    display: inline-flex;
    border-radius: 4px;
    margin: .5em 0;
    cursor: pointer;
    transition: background 250ms ease-in, 
     color 200ms ease-in,
     transform 200ms ease-out;
    font-size: 1em;
    background: ${colors.orange};
    &:hover {
      background: ${colors.black};
      color: ${colors.altWhite};
    }
    &:active {
      transform: translateY(.5em);
    }
  `
)