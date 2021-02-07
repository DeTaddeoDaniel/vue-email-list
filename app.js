new Vue({
    el: "#app",
    data:{
        test:'test',
        arrayEmail: [],
        NumMaxEmail: 10
    },

    beforeMount() {
        
        console.log('Crea 10 email');

        let emailObject = {
            name: '',
            mail: ''
        }

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/name')
            .then(function (response) {
                const result = response.data.response;
                emailObject.name = result
            })
            .catch(function(error){
                console.log("error API: "+error);
            })
        
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                const result = response.data.response;
                emailObject.mail = result
            })
            .catch(function(error){
                console.log("error API: "+error);
            })

        console.log(emailObject)
    },
})