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
    font-family: ${fonts.paragraphFont};
    padding: 1em 3em 1em 0;
    transition: padding-left 200ms ease-in;
    padding-left: ${p.width + 25}px;
    
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
      background: ${colors.orange};
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

export const LynkCardS = styled.div(
  () => css`
    height: 100%;
    box-shadow: 0 5px 10px 0 rgba(10, 10, 10, .6);
    padding: 1em; 
    position: relative;
    flex: 1 1 25rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    /* justify-content: space-between; */
    
    .link {
      display: flex;
      color: ${colors.yellow};
      .icon {
        font-size: 1.5em;
        transition: 200ms transform ease-in;
        transform: translateX(.1em);
      }
      &:hover {
        color: ${colors.white};
        .icon {
          transform: translateX(.3em);
        }
      }
    }

    .save {
      font-size: 1.5em;
      transition: 250ms color ease-in;
      &:hover {
        color: ${colors.altWhite};
        cursor: pointer;
      }
    }

    .description {
      margin: .5em 0;
      color: ${colors.gray};
      &:first-letter {
        font-size: 1.5em;
      }
    }

    .card__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em 0;
      .name {
        display: inline-flex;
        /* border-bottom: 1px solid y; */
        /* color: ${colors.yellow}; */
      }
    }

    .category {
      position: relative;
      font-size: .8em;
      border-radius: 3px;
      text-transform: uppercase;
      padding: .5em;
      background: ${colors.orange};
    }

    .option__icon {
      position: absolute;
      font-size: 1.5em;
      right: 1em;
      top: .7em;
      transition: color 250ms ease-in, 
      transform 150ms ease-out;
      cursor: pointer;
      &:hover {
        color: ${colors.orange};
        transform: scale(1.5) rotateZ(-90deg);
      }
    }

    .options {
      display: flex;
      justify-content: space-between;
      color: ${colors.yellow};
    }
  `
)

export const LynksContainer = styled.section(
  () => css`
    /* display: grid;
    grid-template-columns: repeat(3, 2fr); */
    display: flex;
    flex-wrap: wrap;
    margin: 2em 0;
    /* row-gap: 2em;
    column-gap: 2em; */
 `
)

