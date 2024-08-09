function onChange() {
  return (document.getElementById("layout").style.display = "block");
}

function onChangeHtml() {
  return (document.getElementById("html").style.display = "block");
}

function onChangeCss() {
  return (document.getElementById("css").style.display = "block");
}
function onChangeJs() {
  document.getElementById("js").style.display = "block";
}
let flexStyles = `display:flex;justify-content:space-between`;

const changeFlex = () => {
  document.getElementById("container").style = flexStyles;
};
const changeDefault = () => {
  document.getElementById("container").style.display = [];
};

const changeVertical = () => {
  document.getElementById("container").style.display = "block";
};

let styles = `display:grid;grid-template-columns: 1fr 1fr 1fr`;
const changeGrid = () => {
  document.getElementById("container").style = styles;
};
