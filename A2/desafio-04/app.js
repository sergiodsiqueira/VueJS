new Vue({
	el: '#desafio',
	data: {
		transicao: 'encolher',
		cor: true,
		quadrado: true,
		CSS3: '',
		CSS4: '',
		onCSS4: true,
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.transicao = this.transicao == 'encolher' ? 'destaque' : 'encolher'
			}, 1000)			
		},
		iniciarProgresso() {

		},
		setCSS4(e){
			if (e.target.value == 'true'){
				this.onCSS4 = true
			}else if (e.target.value == 'false'){
				this.onCSS4 = false
			} 
		}
	},
})
