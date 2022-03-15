import React, { Component } from "react"

class TodoList extends Component {
    constructor() {
        super();
        this.state = {

            userInput: '',
            items: []
        }
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.userInput],
            userInput: ''
        })
    }

    deleteTodo(item) {
        const array = this.state.items
        const index = array.indexOf(item)
        array.splice(index, 1)
        this.setState({
            items: array
        })
    }
    validationTodo(item) {
    }

    renderTodo() {
        return this.state.items.map((item) => {
            return (
                
                <div class="d-flex align-items-center justify-content-between mb-2" key={item}>
                    <input type="checkbox" class="btn-check" id={item} autocomplete="off" />
                    <label class="btn btn-outline-success w-100" for={item}>{item}</label>
                    <button class="btn btn-danger ml-2" onClick={this.deleteTodo.bind(this, item)}>Supprimer</button>
                </div>
            )
        })
    }

    render() {
        return(
            <div class="app-container d-flex align-items-center justify-content-around flex-column">
                <h1>Ma todo list</h1>
                <form class="d-flex align-items-center mb-3">
                    <input 
                        value={this.state.userInput}
                        type="test"
                        placeholder="Votre tache"
                        onChange={this.onChange.bind(this)}
                        class="form-control mr-2"
                    />
                    <button class="btn btn-primary mr-3" onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>

                <div className="list-group w-50">
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

export default TodoList;