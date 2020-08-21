<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title"/>
        <button>Create</button>
    </form>
</template>

<script>
    export default {
        props: ['todos'],
        name: "AddTodo",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                console.log("Submit", this.title);
                if (this.title.trim())
                {
                    const newTodo  = {
                        id: this.todos.length + 1,
                        title: this.title,
                        completed: false,
                    };
                    this.todos.push(newTodo);
                    this.title = "";
                }
            }
        }
    }
</script>

<style scoped>

</style>
