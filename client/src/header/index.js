import React from 'react';
import 'semantic-ui-react';
import { Segment, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
function Footer(){
    return( 
        <Segment inverted>
           <Menu inverted>
               <Menu.Item name='Inicio' />
               <Menu.Item name='Lugares Turisticos'/>
           </Menu>
       </Segment>
    )
}
export default Footer;