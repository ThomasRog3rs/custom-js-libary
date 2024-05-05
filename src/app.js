import Greetr from "./Greetr";
import $ from 'jquery';

const g = G$("John", "Doe");
console.log(g);
g.log().setLanguage("en").log().greet().greet(true);