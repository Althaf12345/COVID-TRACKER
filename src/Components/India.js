import React , {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import axios from 'axios';


class India extends Component{
    constructor(){
        super();
        this.state = {
            data : {}
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/India").then(response=>{
            
            this.setState({data:response.data})
    })
    }
     
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <img  src="data:image/png;base64,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"/>
                    <h3>INDIA</h3>

                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="card text-white bg-primary" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>TOTAL CASES</Card.Title>
                                <h3>{this.state.data.cases}</h3>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className="card text-white bg-warning" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>ACTIVE CASES</Card.Title>
                                <h3>{this.state.data.active}</h3>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className="card text-white bg-success" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>RECOVERED</Card.Title>
                                <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className="card text-white bg-danger" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>DEATHS</Card.Title>
                                <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-12">
                            <Statedata/>
                            

                        </div>
                            

                    </div>



                    

                </div>
                
            </div>
        )
    }
}

export default India;