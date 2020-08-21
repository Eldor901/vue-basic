<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed"/>
            <strong>{{todo.id}}</strong>
            {{todo.title | uppercase}}
        </span>
        <button class="deleteIcon" v-on:click="$emit('remove-todo', todo.id)">
            &times;
        </button>
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true,
            }
        },
        filters: {
            uppercase(value) {
                return value.toUpperCase()
            }
        },
        name: "TodoItem",

    }
</script>

<style scoped>
    li {
        border: 1px solid rgb(0, 178, 191);
        display: flex;
        justify-content: space-between;
        padding: 2px;
        margin-bottom: 10px;
    }

    input {
        margin-right: 10px;
    }

    .deleteIcon {
        background: red;
        color: white;
        border-radius: 50px;
        font-weight: bold;
    }

    .done{
        color: rgb(0, 178, 191);
    }
</style>
