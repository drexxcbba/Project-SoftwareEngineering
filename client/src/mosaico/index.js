import React, { Component } from 'react';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import Item from './item';
import Main from '../main';
class Mosaico extends Component{
    constructor(){
        super();
        this.state = { titulo: ''};
        this.state = { lugaresTuristicos: []};
    }

    valueToState(target){
        this.setState({ [target.name]: target.value });
    }

    componentDidMount(){
        this.setState({ titulo: 'Mosaico'});
        fetch('http://localhost:8585/api/lugaresturisticos')
        .then(res => res.json())
        .then(lt => this.setState({ lugaresTuristicos : Object.values(lt)}));
    }

    render(){
        return( 
            <div>
                <Main titulo={this.state.titulo}/>
                <div className="ui two column grid">
                    { this.state.lugaresTuristicos && this.state.lugaresTuristicos.map(
                        it => <Item titulo={it.NombreLugarTuristico} rank={it.promedio}/>
                    )}
                </div>
            </div>
        )
    }
}
export default Mosaico;
