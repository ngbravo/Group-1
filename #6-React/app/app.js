import React from "react"
import ReactDOM from "react-dom";
import CardSide from "./components/CardSide";


var CONTENTS = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];

ReactDOM.render(
  <CardSide contents={CONTENTS}/>,
  document.body
);
