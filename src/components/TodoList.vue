<template>
    <div>
        <ul>
            <TodoItem v-for="todo of todos" v-bind:todo="todo" v-on:remove-todo="removeTodo"/>
        </ul>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        props: ['todos'],
        name: "TodoList",
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            }
        },
        data() {
            return {

            }
        },
        components: {
            TodoItem,
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
