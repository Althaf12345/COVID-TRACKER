import React , {Component} from 'react';
import axios from 'axios';


class World extends Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>(
            this.setState({data:response.data})
        ))
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map( (item,k)=>{
                                    return(
                                        <tr>
                                            <td>{item.country}<img style={ {width:'60px',marginLeft:'10px' } } src={item.countryInfo.flag}/></td>
                                            <td>{item.cases}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                        </tr>
                                    )
                                } )
                            }
                        </tbody>
                    </table>

                </div>
                
            </div>
        )
    }
}

export default World;