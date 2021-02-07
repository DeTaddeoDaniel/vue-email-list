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
            .all([
                axios.get('https://flynn.boolean.careers/exercises/api/random/name'),
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            ])
            .then(axios.spread((nome, mail) => {
                
                // value from axios get
                const valueName = nome.data.response;
                const valueMail = mail.data.response;

                // print in console value from axios get
                console.log('Name: ' + valueName);
                console.log('Mail: ' + valueMail);

                // edit emailObject value from value of axios get
                emailObject.name = valueName;
                emailObject.mail = valueMail;

                // print ckeck emailObject
                console.log(emailObject);

                // add to emailObject in the array
                this.arrayEmail.push(emailObject);
                
            }))
            .catch(function(error){
                console.log("error API random name o mail: "+error);
            })

        console.log(this.arrayEmail)
    },
})