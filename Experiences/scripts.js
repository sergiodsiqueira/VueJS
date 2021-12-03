var app = new Vue({
  el: '#app',
  data: {
    vTitulo: 'Cadastro de Clientes',
    cep: '',
    codigo: '',
  },
  methods:{
    validaCep: function (blnVazio)
    {
        // Caso o CEP não esteja nesse formato ele é inválido!
        var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

        strCEP = this.cep.replace(/^s+|s+$/g,'')
        if(strCEP.length > 0)
            {
                if(objER.test(strCEP))
                    return true;
                else
                    alert('CEP inválido')
            }
        else
            alert('CEP inválido')
    },
    validaCodigo:function() {
      if (this.codigo == ''){
        alert('Código não pode ser em branco')
      }
    }
  }
})