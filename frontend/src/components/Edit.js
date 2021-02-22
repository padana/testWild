import React, { Component } from 'react'
import axios from 'axios'


export default class Edit extends Component {
   
   constructor(props) {
        super(props);
         this.state={
            nom: '',
        }
          this.onSubmit= this.onSubmit.bind(this)
          this.handlenom = this.handlenom.bind(this)
       
    }



      handlenom(e){
        this.setState({nom: e.target.value})
   

    }


    onSubmit(e){
     e.preventDefault()
   
    
    const postIdit={
       nom: this.state.nom,
  
    }
 

    axios.put('http://localhost:3030/update/' + this.props.match.params.id, postIdit)
    .then(res => {
        this.setState({nom: ''})
    })

    window.location ='/'
    }



    render() {
        return (
         <div className ='container d-flex justify-content-center'>
            <div className ='mt-5'>
             <form onSubmit ={this.onSubmit}>
               <div className ='mb-3'>
                    <input type="text"  
                        className="form-control"
                        placeholder="nom à editer" 
                        value={this.state.nom}
                        onChange = {this.handlenom}
                    />
                </div>
                <button type="submit" className="btn btn-dark form-control">Edit</button>
              </form>
            </div>

         </div>
    
        )
    }
}
