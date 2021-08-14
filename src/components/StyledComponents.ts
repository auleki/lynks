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
  (p: ISideNavProps) => css`
    position: fixed;
    left: 0;
    top: 0;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    align-items: ${p.collapsed ? 'flex-start' : 'center'};
    width: ${p.width}px;
    overflow: hidden;
    transition: width 200ms ease-in;
    background-color: ${colors.darkBlue};
    border-right: 1px solid ${colors.black};
    height: 100vh;

    .logo {
      font-family: ${fonts.logoFont};
      h1 {
        letter-spacing: 5px;
      }
    }

    .nav__links {
      margin-top: 3em;
      a {
        color: ${colors.altWhite};
        text-decoration: none;
        /* margin: 1em 0; */
        display: flex;
        border-radius: 4px;
        transition: background 100ms ease-in;
        padding: .2em 1em;
        align-items: center;
        line-height: 2.5em;
        gap: 1em;
        font-size: 1.3em;
        &:hover {
          background: ${colors.altWhite};
          color: ${colors.orange};
        }
        &.active {
          /* background: ${colors.orange};           */
          color: ${colors.orange};          
        }
      }
    }
  `
)

export const Button = styled.div(
  () =>css`
    padding: 1em;
    display: inline-block;
    border-radius: 4px;
    margin: .5em 0;
    cursor: pointer;
    transition: background 250ms ease-in, 
     color 200ms ease-in,
     transform 200ms ease-out;
    font-size: 1em;
    background: ${colors.altWhite};
    color: ${colors.orange};
    &:hover {
      background: ${colors.black};
      color: ${colors.altWhite};
    }
    &:active {
      transform: translateY(.5em);
    }
  `
)

export const PageContainer = styled.div(
  () => css`
   height: 100%;

   .title {
    border-bottom: 2px solid ${colors.orange};
    display: inline-flex;
    padding: .5em 1em;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .8);
    transition: box-shadow 200ms ease-in;

    &:hover {
      box-shadow: none;
    }
   }
 `
)

