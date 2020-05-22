import React from 'react';
import 'semantic-ui-react';
import { Segment, Grid, Header, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
function Main(props){
    return( 
        <Segment>
          <Grid columns={2} divided>
              <Grid.Row>
                  <Grid.Column>
                      <Header as='h2'>Sugerencias para usted</Header>
                      <Header as='h3'>Visualizacion Actual: {props.titulo}</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='Cambiar visualizacion'>
                          <Dropdown.Menu>
                              <Dropdown.Item as={Link} to="/" text='Listado'/>
                              <Dropdown.Item as={Link} to="/mosaico"text='Mosaico'/>
                          </Dropdown.Menu>
                      </Dropdown>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
       </Segment>
    )
}
export default Main;