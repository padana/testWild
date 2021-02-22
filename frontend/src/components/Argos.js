import React, { Component } from 'react'
import axios from 'axios' 

export default class Argos extends Component {
    constructor(props){
        super(props);

        this.state={
            nom: ''
        }

        this.NomChange = this.NomChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    NomChange=(e) =>{
       this.setState({nom: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

     const allArgo ={
        nom: this.state.nom
      }

      axios.post('http://localhost:3030/ajouterArgos', allArgo)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

      window.location ='/'
    }


    render() {
        return (
            <div className ='mt-5 d-flex justify-content-center'>
              <form onSubmit ={this.onSubmit}>
              <div className ='mb-3'>
                    <input type="text"  
                        className="form-control"
                        required
                        value = {this.state.nom}
                        onChange = {this.NomChange}
                        placeholder = "Nom de l'Argonaute"
                    
                    />
                </div>
                <button type="submit" className="btn btn-dark form-control">Ajouter</button>
              </form>
            </div>
        )
    }
}
