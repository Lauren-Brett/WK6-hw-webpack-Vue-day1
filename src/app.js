import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    // console.log('hw is up');
    new Vue( {
        el: "#app",
        data: {
            todos: [
             {todo: "Buy shopping", priority: "high"},
             {todo: "Clean bathroom", priority: "low"}, 
             {todo: "Car MOT", priority: "high"}
            ],
       
            newTodo:  {todo: "", priority: ""}
        } ,

        methods: {
            saveNewTodo: function() {
                this.todos.push(this.newTodo)
            },

            // this.newTodo: { todo: "", priority: "" }
        },

            
    
    })


})
