import $ from 'jquery'; // Import jQuery
import Greetr from "./Greetr";
// Your JavaScript code here
$(document).ready(function() {
    // jQuery code
    $('h1').css('color', 'purple');
    Greetr.helloWorld();
    Greetr.greet("John Doe")
});