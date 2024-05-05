import Greetr from "./Greetr";
import $ from 'jquery';

const g = G$("John", "Doe");
console.log(g);
console.log(g.fullName());
console.log(g.greet());
console.log(g.formalGreet());