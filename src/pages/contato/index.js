import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default class Contato extends Component {

  state = {
    conteudo: {}
  }
  
  componentDidMount = () => {
    axios.get("http://localhost:3000/contato")
    .then(resposta => {
      this.setState({ conteudo: resposta.data})
    })
  }

  render() {
    const {foto,titulo,subtitulo,informacao,contatos} = this.state.conteudo;
   
    return (
      <>
        <Helmet>
          <title>Contato</title>
        </Helmet>
        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <div className="resumo">
              
              <h1>{this.state.conteudo.titulo}</h1>
              <p>{this.state.conteudo.subtitulo}</p>
              <h2>{this.state.conteudo.informacao}</h2>

              {contatos !== undefined && (
                  <ul>
                    {contatos.map((contato => (
                       <li key={contato.id}>{contato.tipo}</li>

                    )
                     
                    ))}
                  </ul>
                )}        
                    
                <p>Github</p>
                <p>Linkedin</p>
              </div>
              <img src={this.state.conteudo.foto} alt="Perfil" />
              </div>
          </div>
        </div>
      </>
    )
  }
}
