import styled, { css } from 'styled-components'
import { colors } from '../utils/constants'

export const AppContainer = styled.div(
  () => css`
    background-color: ${colors.altWhite};
  `
)