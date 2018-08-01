// Variables

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const primaryColor = "#A7DBD8";
const secondaryColor = "#69D2E7";
const sand = "#E0E4CC";
const lightorange = "#F38630";
const darkorange = "#FA6900";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const title = {
    color: "#E0E4CC",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontSize: "100px",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
};


export {
    containerFluid,
    container,
    primaryColor,
    secondaryColor,
    sand,
    lightorange,
    darkorange,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    title
};