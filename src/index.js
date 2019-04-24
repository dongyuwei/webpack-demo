import _ from "lodash";
import $ from "jquery";
import style from "./index.less";
import icon from "./icon.svg";
// import math from "./math.js";

async function render() {
  const element = $(`<div class=${style.foo}></div>`);
  // const math = require( "./math.js" );
  const math = await import(/* webpackChunkName: "math" */ "./math.js");
  element
    .html(
      _.join(
        ["Hello", "webpack", "5 cubed is equal to " + math.cube(5)],
        "<br>"
      )
    )
    .appendTo(document.body);

  const img = new Image();
  img.src = icon;
  $("body").append(img);
}

render();
