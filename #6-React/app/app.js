import React from "react"
import ReactDOM from "react-dom";
import Card from "./components/Card";

var CARD_REVERSE = [{contentText:"hola2"},{contentText:"chao2"},{contentText:"data666"}];

var CARD_FRONT = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];

ReactDOM.render(
  <Card reverse={CARD_REVERSE} front={CARD_FRONT}/>,
  document.getElementById("content")
);
