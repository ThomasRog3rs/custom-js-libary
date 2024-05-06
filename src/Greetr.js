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
                throw `Invalid Lanuguage of ${this.language}`;
            }
            // supportedLanguages.forEach(language => {
            //     if(language === this.language){
            //         return true;
            //     }
            // })
            // return false;
        },
        greeting: function(){
            return `${greetings[this.language]} ${this.firstName}!`
        },
        
        formalGreeting: function(){
            return `${formalGreetings[this.language]}, ${this.fullName()}.`
        },
        
        greet: function(formal){
            let msg;
            
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting()
            }
            
            console.log(msg);
            
            //allows methods to be chainable
            return this;
        },
        
        log: function(){
            if(console){
                console.log(`${logMessages[this.language]} : ${this.fullName()}`);
            }
            
            return this;
        },
        
        setLanguage: function(language){
            if(language){
                this.language = language;
                this.validateLanguage();
            }else{
                throw "language is undefined";
            }
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw "jQuery not loaded"
            }
            if(!selector){
                throw "Missing jQuery selector"
            }
            
            let msg;
            if(formal){
                msg = this.formalGreeting()
            }else{
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
        }
    };
    
    Greetr.init = function(firstName, lastName, language){
        const self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    //make sure init constructor function has access to methods put on the Greetr prototype object
    Greetr.init.prototype = Greetr.prototype;
    
    //give an alias and place it on the global scope so everything has access to it
    global.G$ = global.Greetr = Greetr;

    return Greetr
})(window, $);

export default Greetr;