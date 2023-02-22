const { createApp } = Vue


createApp({
    data() {
        return {
            task: [
                {
                    text: 'FAre laa spesa',
                    done: true,
                },
                {
                    text: 'FAre laa spesa',
                    done: true,
                },
                {
                    text: 'FAre laa spesa',
                    done: true,
                },
            ],
            inputValue: '',
        }
    },
    methods: {
        addTask() {
            const newTask = {
                text: this.inputValue,
                done: false,    
            }
            this.tasks.push(newTask)
            this.inputValue = ''
        },
        removeTask(startIndex) {
            this.tasks.splice(startIndex, 1)
        },
    },
}).mount('#app')