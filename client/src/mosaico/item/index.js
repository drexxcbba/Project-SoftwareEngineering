import React from 'react';
import 'semantic-ui-react';
import {Header, Dropdown, Image, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import image from './palacio.jpg';


function Item(props){
    return(
        <div className="column">
        <div className="ui segment">
            <div className="ui two column very relaxed grid">
                <div className="column">
                <Image src={image} size='medium'/>
                </div>
                <div className="column">
                <Header as='h2'>
                  { props.titulo }
                </Header>
                <Header as='h3'>
                  Calificacion : { props.rank}
                </Header>
                <Dropdown text='califique'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='1'/>
                    <Dropdown.Item text='2'/>
                    <Dropdown.Item text='3'/>
                    <Dropdown.Item text='4'/>
                    <Dropdown.Item text='5'/>
                  </Dropdown.Menu>
                </Dropdown>
                <Button secondary>Calificar</Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Item;