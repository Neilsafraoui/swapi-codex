/* var request;

window.onload = () => {

    request = new XMLHttpRequest(); //création de la requête
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
        // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
        // readyState : 4 signifie que la requête est finie et que la réponse est prête
            //console.log("response : "+this.request.responseText);
            console.log("request : "+request.responseText);
        }
    };
    request.open("GET", "https://swapi.co/api/planets/1/", true); //spécification de la
    // requête, l'adresse et si la requête est asynchrone (non bloquante)
    request.send(); //envoie de la requête

    
} */
var vm;
    vm = new Vue({
    el: '#app',
    data: {
        response: {},
        message: 'coucou',
        subject: '',
        requestDone: false,
        resultSet: []
    },
    methods: {
        SendRequest(subject) {
            console.log("Starting sendRequest");
            let self = this;

            // Dynamic change pour le main    
            this.requested = true;
            console.log("requested? "+this.requested);

            // On reprend le subject pour l'afficher dans le titre
            this.subject = subject.toUpperCase();
            console.log("subject : "+this.subject);

            var request = new XMLHttpRequest(); //création de la requête
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
                // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
                // readyState : 4 signifie que la requête est finie et que la réponse est prête
                    //console.log("response : "+this.request.responseText);
                    //console.log("request : "+request.responseText);
                    //this.response
                    var jsonData = JSON.parse(request.responseText);
                    console.log("jsonData : "+jsonData);
                    self.resultSet = jsonData.results;
                    console.log("resultSet : "+self.resultSet);
         
                    //this.requested = true;
                    self.requestDone = true;
                    console.log("requestDone..... : "+self.requestDone);
                    
                }
            };
            console.log("Request is : " + "https://swapi.co/api/"+ subject + "/");
            request.open("GET", "https://swapi.co/api/"+ subject + "/", true); //spécification de la
            // requête, l'adresse et si la requête est asynchrone (non bloquante)
            request.send(); //envoie de la requête
        }
    },
    beforeCreate(){
        /* console.log("Starting beforeCreate");
            var self = this;
            // Dynamic change pour le main    
            this.requested = true;
            console.log("requested? "+this.requested);

            // On reprend le subject pour l'afficher dans le titre
            //this.subject = subject.toUpperCase();
            //console.log("subject : "+this.subject);
            var subject = "people";

            var request = new XMLHttpRequest(); //création de la requête
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
                // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
                // readyState : 4 signifie que la requête est finie et que la réponse est prête
                    //console.log("response : "+this.request.responseText);
                    //console.log("request : "+request.responseText);
                    //this.response
                    var jsonData = JSON.parse(request.responseText);
                    console.log("jsonData : "+jsonData);
                    self.resultSet = jsonData.results;
                    console.log("resultSet : "+self.resultSet);
         
                    //this.requested = true;

                    self.requestDone = true;
                    console.log("requestDone..... : "+self.requestDone);
                    
                }
            };
            console.log("Request is : " + "https://swapi.co/api/"+ subject + "/");
            request.open("GET", "https://swapi.co/api/"+ subject + "/", true); //spécification de la
            // requête, l'adresse et si la requête est asynchrone (non bloquante)
            request.send(); //envoie de la requête

        console.log("ended beforeCreate"); */
    },
    created(){
        console.log("cr resultSet lgt : "+this.resultSet.length)
    },
    mounted(){
        console.log("mt resultSet lgt : "+this.resultSet.length)
        //this.$nextTick(vm.SendRequest());
        //console.log("vm : "+vm);
        //vm.SendRequest();
        /* console.log("Mounted, should be calling sendRequest");
        this.SendRequest;
        console.log("After calling SendRequest"); */
        /* console.log(response); */
    }
})