import Greetr from "./Greetr";
import $ from 'jquery';

const g = G$("John", "Doe", "en");
console.log(g);
g.log().setLanguage("es").log().greet().greet(true);

$('input#login').click(() => {
    const loginGtr = G$("John", "Doe");
    $('#loginDiv').hide();
    let lang = $('select#lang').val();
    g.setLanguage(lang).HTMLGreeting('h1#greeting').log();
})