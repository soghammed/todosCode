<template>
  <v-container class="wrapper">
    <!--// + filter and search-->
    <v-row justify="space-between">
      <v-col
        cols="auto">
        <v-btn
          class="mx-1"
          fab
          dark
          small
          color="blue"
          @click="newMode = true"
        >
          +
        </v-btn>  
      </v-col>
      <v-col
        cols="auto">
        <v-select
          v-model="filterSelected"
          :items="filters"
          label="Filter By"
          @input="filterToDos()"
          required
        ></v-select>
      </v-col>
      <v-col col="auto">
        <v-text-field
            v-model="filter"
            label="Search todos"
            @input="filterToDos()"
          ></v-text-field>
      </v-col>
    </v-row>

    <!-- top pagination -->
    <v-row justify="center">
      <v-col cols="12">
      <v-pagination
        v-if="pagination.totalPages > 0"
        v-model="pagination.currentPage"
        :length="pagination.totalPages"
        circle
        @input="updatePage"
      ></v-pagination>
      </v-col>
    </v-row>

    <!-- todos list -->
    <v-row>
      <v-col
          v-for="todo in visibleTodos" :key="todo.id"
          cols="12"
          offset-lg="1"
          xl="3"
          offset-md="1"
          md="5"
          sm="6"
          tile>
        <v-hover v-slot="{hover}" open-delay="100">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-container v-if="hover" class="actionContainer">
                  <v-btn
                    v-if="!editMode"
                    icon
                    color="blue"
                    @click="editToDo(todo)">
                    <v-icon medium>mdi-pencil-circle-outline</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="red"
                    @click="removeToDo(todo)">
                    <v-icon medium>mdi-close-circle-outline </v-icon>
                  </v-btn>
                </v-container>
                <v-list-item-title>ID: {{ todo.id}}</v-list-item-title>
                <v-list-item-title>Title: {{ todo.title}}</v-list-item-title>
                <v-list-item-title><b>Status: {{ todo.completed ? 'Complete' : 'Pending' }}</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- bottom pagination -->
    <v-row justify="center">
      <v-col cols="12">
      <v-pagination
        v-if="pagination.totalPages > 0"
        v-model="pagination.currentPage"
        :length="pagination.totalPages"
        circle
        @input="updatePage"
      ></v-pagination>
      </v-col>
      <v-card class="empty" v-if="pagination.totalPages === 0">
        No results found. 
      </v-card>
    </v-row>

    <!-- add/edit overlay -->
    <v-overlay v-if="editMode || newMode" opacity="1">
      <v-container>
         <v-textarea
          v-if="editMode"
          v-model="todo.title"
          label="Enter to do"
          required
          autofocus
        ></v-textarea>
        <v-textarea
          v-if="newMode"
          v-model="newToDo.title"
          label="Enter to do"
          required
          autofocus
        ></v-textarea>
        <v-checkbox
          v-if="editMode"
          v-model="todo.completed"
          :label="`Complete`"
        ></v-checkbox>
        <v-btn
          icon
          color="blue"
          :loading="loading"
          @click="editMode ? updateToDo() : addToDo()"
        ><v-icon large>
          mdi-checkbox-marked-circle-outline
        </v-icon>
        </v-btn>   
        <v-btn
          icon
          class="mx-2"
          color="blue"
          @click="editMode ? (editMode = false) : (newMode = false)">
          <v-icon large>mdi-close-circle-outline</v-icon>
        </v-btn>    
      </v-container>
    </v-overlay> 
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ToDoList',
  data(){
    return {
      hover:false,
      filterSelected:null,
      filters:['id','completed', 'userId', 'title'],
      filter:'',
      newMode:false,
      editMode:false,
      todos:[],
      todo:{},
      absolute: true,
      overlay: false,
      loading:false,
      pagination:{
        currentPage:1,
        value:0,
        pageSize:10,
        totalPages:0,
      },
      visibleTodos:[]
    }
  },
  async created(){
    //get & set todos + paginate;
    await this.filterToDos();

    //init new todo data
    this.initNewTodo();
  },
  methods:{
    initNewTodo(){
      //init todo object
      this.newToDo = {
        id:null,
        title:null,
        complete:false
      }
    },
    async filterToDos(){
      //get todos from api
      this.todos = await this.getToDos();

      //set total pages
      this.setTotalPages();
      
      //set paginated todos 
      this.updateVisibleToDos();
    },
    getToDos(){
      //create api url
      let url = this.filterSelected && this.filter ? 
      `https://jsonplaceholder.typicode.com/todos?${this.filterSelected}=${this.filter}` : `https://jsonplaceholder.typicode.com/todos`;
      
      //return data
      return axios.get(url)
      .then(res => {
        return res.data.reverse()
      })
      .catch(() => {
      });
    },
    updateVisibleToDos(){
      this.visibleTodos = this.todos.slice(
        (this.pagination.currentPage - 1) * this.pagination.pageSize, 
        ((this.pagination.currentPage - 1) * this.pagination.pageSize) + this.pagination.pageSize
      );
    },
    editToDo(todo){
      //prepare edit todo screen
      this.todo = todo;
      this.editMode = true;
    },
    removeToDo(todo){
      this.loading = true;

      axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
      .then( res => {
        if(res.status === 200){
          //remove todo;
          this.todos.splice(this.getToDoIndex(todo.id), 1);

          //reflect change on DOM
          this.updateVisibleToDos();
          this.setTotalPages();
          this.loading = false;
        }
      })
      .catch( () => {
        this.loading = false;
      })
    },
    addToDo(){
      this.loading = true;
      this.newToDo.id = this.todos[0].id + 1;
      axios.post('https://jsonplaceholder.typicode.com/todos', this.newToDo)
      .then(() => {
          //add todo to array;
          this.todos.unshift(this.newToDo);

          //reflect change on DOM
          this.updateVisibleToDos();

          //reset new todo object
          this.initNewTodo();

          //close overlay
          this.newMode = false;

          this.loading = false;
        })
      .catch(() => {
        this.loading = false;
      });
    },
    updateToDo(){
      this.loading = true;
      axios.put(`https://jsonplaceholder.typicode.com/todos/${this.todo.id}`, this.todo)
        .then( res => {
          if(res.status === 200){

            //update todo in array;
            this.todos[this.getToDoIndex(this.todo.id)] = this.todo;
            
            //close overlay
            this.editMode = false;
          }

          this.loading = false;
        })
        .catch(() => {
          //api does not edit todo as created todo is not persisted.
          //update todo in array;
          this.todos[this.getToDoIndex(this.todo.id)] = this.todo;
          this.loading = false;
          this.editMode = false;
        });
    },
    setTotalPages(){
      //set pagination totalpages 
      this.pagination.totalPages = Math.ceil(this.todos.length / this.pagination.pageSize);

      //incase user is ! on x page when filtering and result is 1 page or <
      if(this.pagination.currentPage > this.pagination.totalPages){
        this.pagination.currentPage = 1;
      }
    },
    updatePage(){
      //reflect todo array changes to DOM
      this.updateVisibleToDos();
    },
    getToDoIndex(id){
      //get todo index from todos array;
      for(let todo in this.todos){
        if(this.todos[todo].id === id){
          return todo;
        }
      }
      return false ;
    }
  },
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  margin-top:50px;
}
.empty{
  padding:50px;
}
.v-card{
  min-height:100px;
  padding-top:30px;
}
.actionContainer{
  position:absolute;
  text-align:right;
  right: -10px;
    top: -30px;
}
.v-icon.v-icon{
  position:absolute;
  cursor:pointer;
}
.v-icon.v-icon.edit{
  right:20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
