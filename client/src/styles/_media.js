import { css } from 'styled-components';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
};
// https://www.styled-components.com/docs/advanced#media-templates -- this was the inspiration for using this function; use wisely.
// Okay this was a fun function! Explanation: now all we have to do is import this badboy and do ${media.___} and provide responsive values to whatever and we're good to go!
// This function definition is a template literal to wrap our styles in media queries. acc = an accumulator which is used by the prototype.reduce iterator. In this case our sizes above are our labels which are also converted to ems instead of pixels. Inside of the media query we spread the arguments provided by our styled components; basically whatever is sent to this function is an argument :*) 
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc;
}, {});

export default media;