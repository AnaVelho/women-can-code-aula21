import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'


export default class Portfolio extends Component {

    state = {
        trabalho: {}
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/portfolio")
          .then(resposta => { 
              this.setState({ trabalho: resposta.data});
          })
          
    }
     
    render() {
        const { titulo, imagens } = this.state.trabalho;
         
        
        return (
            <>
            <Helmet>
                <title>Portfólio</title>
            </Helmet>
            <div className="page">
                <div className="conteudo">
                    <div className="flex">
                        <h1>{this.state.trabalho.titulo}</h1>    
                        <div className="portfolio-lista">

                            {imagens !== undefined && (
                                <>
                                    {
                                        imagens.map((item) => (
                                            <img key={item.id} src={item.foto}></img>
                                        ))
                                    }
                                </>)
                            }

                        </div>                         
                    </div>
                </div>
            </div>
        </>    
        )
               
    }


}