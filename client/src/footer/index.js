import React from 'react';
import 'semantic-ui-react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
function Footer(){
    return(
       <Segment inverted>
           <Grid inverted columns={4} divided>
                <Grid.Column>
                    &copy; 2020 UMSS-AVANTICA todos los derechos reservados | Cochabamba, Bolivia.
                </Grid.Column>
                <Grid.Column>
                    <Icon link name='facebook' /> 
                </Grid.Column>
                <Grid.Column>
                    <Icon link name='instagram' />
                </Grid.Column>
                <Grid.Column>
                    <Icon link name='twitter' />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Footer;