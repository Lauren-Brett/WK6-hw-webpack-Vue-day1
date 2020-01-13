import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    // console.log('hw is up');
    new Vue( {
        el: "#app",
        data: {
            todos: ["Buy shopping", "Clean bathroom", "Car MOT"]
        },

        newToDo: ""
    
    }

        methods: {
            saveNewTodo: function() {
                this.data.todos.push(newTodo)
            }
            

        }
    
    );


})
