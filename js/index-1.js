window.onload = function() {
	let app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue!'
		}
	});

	let app2 = new Vue({
		el: '#app-2',
		data: {
			message: '页面加载于 ' + new Date().toLocaleString()
		}
	});

	let app3 = new Vue({
		el: '#app-3',
		data: {
			seen: true
		}
	});

	let app4 = new Vue({
		el: '#app-4',
		data: {
			todos: [{
					text: 'JavaScript'
				},
				{
					text: 'Vue'
				},
				{
					text: 'Java'
				}
			]
		}
	});

	let app5 = new Vue({
		el: '#app-5',
		data: {
			message: 'Hello Vue.js!'
		},
		methods: {
			reverseMessage: function() {
				this.message = this.message.split('').reverse().join('');
			}
		}
	});

	let app6 = new Vue({
		el: '#app-6',
		data: {
			message: 'Hello Vue.js!'
		}
	});

// Prop 可以在组件上注册的一些自定义 attribute。
// 当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个属性
	Vue.component('todo-item', {
		props: ['todo'],
		template: '<li>{{ todo.text }}</li>',
	});


	let app7 = new Vue({
		el: '#app-7',
		data: {
			groceryList: [{
					id: 0,
					text: '蔬菜'
				},
				{
					id: 1,
					text: '奶酪'
				},
				{
					id: 2,
					text: '随便其它什么人吃的东西'
				}
			]
		}
	});
}
