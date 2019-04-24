import _ from "lodash";
import $ from "jquery";
import style from "./index.less";
console.log("====================================");
console.log(style);
console.log("====================================");

function render() {
  const element = $(`<div class=${style.foo}></div>`);
  element.text(_.join(["Hello", "webpack"], " ")).appendTo(document.body);
}

render();
