new Vue({
    el: "#app",
    data:{
        test:'test',
        arrayEmail: [],
        numMaxEmail: 10,
    },

    beforeMount() {

        // chiedi 10 email random
        for (let i = 0; i < this.numMaxEmail; i++) {
            this.getEmailRandom();
        }
    },

    methods: {
        getEmailRandom: function(){
            // Call to new email e name random
            let emailObject = {
                name: '',
                mail: '',
                phone: 0
            }

            // avvio chiamate API
            axios
                .all([
                    axios.get('https://flynn.boolean.careers/exercises/api/random/name'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/phone')
                ])
                
                .then(axios.spread((nome, mail, phone) => {
                    
                    // value from axios get
                    const valueName = nome.data.response;
                    const valueMail = mail.data.response;
                    const valuePhone = phone.data.response;

                    // print in console value from axios get
                    // console.log('Name: ' + valueName);
                    // console.log('Mail: ' + valueMail);

                    // edit emailObject value from value of axios get
                    emailObject.name = valueName;
                    emailObject.mail = valueMail;
                    emailObject.phone = valuePhone;

                    // print ckeck emailObject
                    console.log(emailObject);

                    // add to emailObject in the array
                    this.arrayEmail.push(emailObject);
                    
                }))

                .catch(function(error){
                    console.log("error API random name o mail: "+error);
                })
        }
    },
})