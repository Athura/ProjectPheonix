

// Main theming -- https://www.colourhunt.com/palette/cjf9fztmifrj501085ounry1s
// Gives our website a friendly beach feel
// Later on we can possibly add theming for times of the year so obviously the provided colors below are for summer/spring

// export const teal = rgb('#69D2E7');
// export const lightblue = rgb('#A7DBD8');
// export const sand = rgb('#E0E4CC');
// export const lightorange = rgb('#F38630');
// export const darkorange = rgb('#FA6900');

// Switched to using styled-components-theme library to handle theming. rgb wasn't a recognized definition. Now we will add a ThemeProvider to our index.js to handle the theming from here
const colors = {
    lightblue: '#A7DBD8',
    teal: '#69D2E7',
    sand: '#E0E4CC',
    lightorange: '#F38630',
    darkorange: '#FA6900'
};

export default colors;