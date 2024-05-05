import $ from 'jquery'; // Import jQuery

const Greetr = ((global, jQuery) => {
    function helloWorld(){
        alert("Hello World");
    }
    
    function greet(name){
        console.log(`Hello, ${name}`)
    }
    
    return{
        helloWorld,
        greet
    }
})(window, $);

export default Greetr