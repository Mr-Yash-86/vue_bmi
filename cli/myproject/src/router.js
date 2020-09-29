import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Testing from '@/components/testing.vue'
import Exercise from '@components/exercise.vue'

Vue.use(VueRouter)

let router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HelloWorld
		},
		{
			path: '/testing',
			name: 'testing',
			component: Testing
		},
		{
			path: '/exercise',
			name: 'exercise',
			component: Exercise
		}
	],
	mode: 'history' //abstract
})

export default router