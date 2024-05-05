import $ from 'jquery';

const Greetr = ((global, jQuery) => {
    const Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    };
    
    const supportedLanguages = ['en', 'es'];
    
    const greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    const logMessages = {
        en: "Logged In",
        es: "Inicio sesion"
    }
    
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName
        },
        validateLanguage: function(){
            if(supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid Lanuguage";
            }
            // supportedLanguages.forEach(language => {
            //     if(language === this.language){
            //         return true;
            //     }
            // })
            // return false;
        },
        greet: function(){
            return `${greetings[this.language]} ${this.firstName}!`
        },
        
        formalGreet: function(){
            return `${formalGreetings[this.language]}, ${this.fullName()}.`
        }
    };
    
    Greetr.init = function(firstName, lastName, language){
        const self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    //make sure init construtor function has access to methods put on the Greetr prototype object
    Greetr.init.prototype = Greetr.prototype;
    
    //give an alias and place it on the global scope so everything has access to it
    global.G$ = global.Greetr = Greetr;

    return Greetr
})(window, $);