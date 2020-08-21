<template>
    <div>
        <router-link to="/">Home</router-link>
        <h2>To do aplication</h2>
        <AddTodo v-bind:todos="todos" @add-todo="addTodo"/>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Complited</option>
            <option value="not-completed">Not complited</option>
        </select>
        <hr/>
        <Loader v-if="loading"/>
        <TodoList
                v-else-if="todos.length"
                v-bind:todos="filteredTodos"
                @remove-todo="removeTodo"
        />
        <p v-else>no todos added</p>
    </div>
</template>

<script>
    import TodoList from "@/components/TodoList";
    import AddTodo from "@/components/AddTodo";
    import Loader from "@/components/Loader";
    import axios from "axios";

    export default {
        name: 'App',
        data() {
            return {
                todos: [],
                loading: true,
                filter: "all",
            }
        },
        async mounted() {
            let response =  await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=3');
            this.todos = response.data;
            setTimeout(()=>{

                this.loading = false;
            }, 1000)
        },
/*
        watch: {
            filter(value){
                console.log(value);
            }
        },
*/
        computed: {
            filteredTodos() {
                if (this.filter === 'all')
                {
                    return this.todos;
                }

                if(this.filter === 'completed')
                {
                    return this.todos.filter(i=>i.completed)
                }

                if(this.filter === 'not-completed')
                {
                    return  this.todos.filter(i=>!i.completed)
                }
            }
        },


        components: {
            AddTodo,
            TodoList,
            Loader
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id)
                this.todos.map( el=>{
                    delete el[id]
                })
            },
            addTodo(todo)
            {
                this.todos.push(todo);
            }
        }
    }
</script>
<style scoped>

    select {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
