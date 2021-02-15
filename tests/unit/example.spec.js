import { shallowMount, mount } from '@vue/test-utils'
import { render } from '@vue/server-test-utils' 
import ToDoList from '@/components/ToDoList.vue'
import flushPromises from 'flush-promises';


describe('ToDoList.vue', () => {
 	let todolist = render(ToDoList);
	let vm = wrapper.vm;

  it('data pulled', async () =>  {
  	// console.log(todolist);
  	  // expect(vm.$data.todos.length).toBe(200);
  })
})
