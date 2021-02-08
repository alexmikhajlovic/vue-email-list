// ? Genera 10 mail tramite api e stampale in una lista.
// ? Generate 10 emails via api and print them in a list.

var app = new Vue ({
    el: ('#app'),
    data: {
        mails: [],
        start: false,
    },
    created() {
        for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                this.mails.push(result.data.response);
            });
        }
    },
    methods: {
        deleteMail(index) {
            this.mails.splice(index,1);
        }
    }
});