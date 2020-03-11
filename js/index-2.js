window.onload = function() {
	let app = new Vue({
		el: '#watch-example',
		data: {
			question: '',
			answer: 'I cannot give you an answer until you ask a question!',
		},
		// 如果 `question` 发生改变，这个函数就会运行
		watch: {
			question: function(newQst, OldQst) {
				this.answer = 'Waiting for you to stop typing...'
				this.debouncedGetAnswer()
			}
		},
		created: function() {
			this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
		},
		methods: {
			getAnswer: function() {
				if (this.question.indexOf('?') === -1) {
					this.answer = 'Questions usually contain a question mark. ;-)'
					return;
				}
				this.answer = 'Thinking...'
				var vm = this
				axios.get('https://yesno.wtf/api')
				.then(function(response){
					vm.answer = _.capitalize(response.data.answer)
				})
				.catch(function(error){
					vm.answer = 'Error! Could not reach the API.'+ error
				})
			}
		}
	});
}
