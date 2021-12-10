new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Botão pressionado!')
        },
        getTexto(e){
            this.valor = e.target.value
        }
    }
})