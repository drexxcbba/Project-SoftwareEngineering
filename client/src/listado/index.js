import React, { Component } from 'react';
import 'semantic-ui-react';
import { Segment, Grid, Header, Dropdown, Image, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import image from './palacio.jpg';
import Main from '../main';
class Listado extends Component{

    constructor(){
        super();
        this.state = { titulo: ''};
        this.state = { lugaresTuristicos: []};
        this.state = { califique: 0}
    }    

    valueToState(target){
        this.setState({ [target.name]: target.value });
    }

    insert(id){
        return fetch('http://localhost:8585/api/calificacion', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ IDLugarTuristico: id, entrada_identrada: 1, Calificación: this.state.califique})
        }).then(res => res)
        .catch(err => err);
    }
    
    componentDidMount(){
        this.setState({ titulo: 'Listado'});
        fetch('http://localhost:8585/api/lugaresturisticos')
        .then(res => res.json())
        .then(lt => this.setState({ lugaresTuristicos : Object.values(lt)}));
    }

    render(){
        return( 
            <div>
                {this.state.lugaresTuristicos && console.log(this.state.lugaresTuristicos)}
                <Main titulo={this.state.titulo}/>            
                <Segment>
                  <Grid columns={3} divided>
                      {this.state.lugaresTuristicos && this.state.lugaresTuristicos.map( 
                          it => <Grid.Row>
                          
                          <Grid.Column>
                            <Image src={image} size='medium'/>
                          </Grid.Column>
                          <Grid.Column>
                              
                              <Header as='h2'>{it.NombreLugarTuristico}</Header>
                            <Header as='h3'>Calificacion : {it.promedio}</Header>
                          </Grid.Column>
                          <Grid.Column>
                              <Dropdown text='califique' onChange={event => this.valueToState(event.target)}>
                                  <Dropdown.Menu>
                                      <Dropdown.Item text='1'/>
                                      <Dropdown.Item text='2'/>
                                      <Dropdown.Item text='3'/>
                                      <Dropdown.Item text='4'/>
                                      <Dropdown.Item text='5'/>
                                  </Dropdown.Menu>
                              </Dropdown>
                              <Button secondary onClick={() => this.insert()}>Calificar</Button>
                          </Grid.Column>
                      </Grid.Row>)}
              </Grid>
           </Segment>
        </div>
        )
    }
}
export default Listado;