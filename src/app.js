import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    // console.log('hw is up');
    new Vue( {
        el: "#app",
        data: {
            todos: ["Buy shopping", "Clean bathroom", "Car MOT"],
       
            newTodo: ""
    },
        

        methods: {
            saveNewTodo: function() {
                this.todos.push(this.newTodo)
            },
            // this.newTodo = ""
        }
    
})


})
