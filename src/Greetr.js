const Greetr = (() => {
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
})();

export default Greetr