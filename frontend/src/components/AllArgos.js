import React, { Component } from 'react'
import axios from 'axios'

export default class AllArgos extends Component {
    constructor(props){
        super(props);
        this.state = {
            argos: []
        }

        this.handleClick = this.handleClick.bind(this)
    }

componentDidMount(){
    axios.get('http://localhost:3030/ajouter')
    .then(res =>{
        this.setState({argos: res.data})
    })

}

handleClick(id){
    axios.post(`http://localhost:3030/delete/${id}`)
    .then(res =>{
        if(res.data !== null){
            this.setState({argos: this.state.argos.filter(item => item._id !== id)})
        }
    })
}


    render() {
        const nom = this.state.argos

        return (
          <div className ='jumbotron bg-dark text-white mt-5'>
            <h1 className ='text-center'>Membre de l'equipage</h1> 
            <table className ='table'>
            <thead>
                <tr>
                    <th scope="col text-white">#</th>
                    <th scope="col text-white">NOM</th>
                </tr>
            </thead>
    
              {nom.map( (index, key) =>{
                return(
                <tbody>
                  <tr className='text-white'>
                    <th scope="row">#</th>
                     
                    <td key ={key}>{index.nom}
                      <span className ='float-right'>
                        <i style ={{cursor: 'pointer'}} onClick ={(e) =>this.handleClick(index._id, e)} 
                            className="material-icons  btn btn-outline-danger m-1">delete
                        </i>
                        <a className ='btn btn-outline-info m-1' href ={`/update/${index._id}`}>
                            <i className="fa fa-pencil"></i>
                        </a>
                      </span>
                       
                    </td>
                  </tr>
                </tbody>
                )
              })}
            
            </table>
          </div>
        )
    }
}

