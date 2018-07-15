import styled, { css } from 'styled-components';
import { generator } from 'uigradients';
import typography from './_typography';
import media from './_media';
import theme from './_theme';

// Please see: https://github.com/JSBros/uigradients/blob/master/src/gradient_list.json for list of possible gradients to use for the nav bar

export const StyledNavBar = styled.div`
    display: flex;
    ${generator({gradient: 'friday'})}
    padding: 16px;
    font-family: ${typography.main};

    ${media.tablet`flex-direction: column`};
`;

export const NavSeperator = styled.nav`
    display: flex;

    ${media.tablet`margin-left: 0`};

    ${props => props.left && css`

    `}

    ${props => props.right && css`
        margin-left: auto
    `}
`;

export const NavLink = styled.div`
    padding-right: 8px;

    ${media.tablet`display: none`};
`;

export const StyledToggle = styled.div`
    display: none;

    ${media.tablet`
        margin-left: auto;
        display: initial;
        position: absolute;
        cursor: pointer;
    `}
`

export const StyledImages = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`