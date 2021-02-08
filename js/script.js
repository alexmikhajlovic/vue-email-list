// ? Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// ? Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// ? Il numero ottenuto appare al centro del quadrato

var app = new Vue ({
    el: ('#app'),
    data: {
        mails: []
    },
    mounted() {
        for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                this.mails.push(result.data.response);
            });
        }
    }
});