import _ from "lodash";
import $ from "jquery";
import style from "./index.less";
import icon from "./icon.svg";
import { cube } from "./math.js";

console.log("====================================");
console.log(style, icon);
console.log("====================================");

function render() {
  const element = $(`<div class=${style.foo}></div>`);
  element
    .html(
      _.join(["Hello", "webpack", "5 cubed is equal to " + cube(5)], "<br>")
    )
    .appendTo(document.body);

  const img = new Image();
  img.src = icon;
  $("body").append(img);
}

render();
