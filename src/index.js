import _ from "lodash";
import $ from "jquery";
import style from "./index.less";
import icon from "./icon.svg";
console.log("====================================");
console.log(style, icon);
console.log("====================================");

function render() {
  const element = $(`<div class=${style.foo}></div>`);
  element.text(_.join(["Hello", "webpack"], " ")).appendTo(document.body);

  const img = new Image();
  img.src = icon;
  $("body").append(img);
}

render();
