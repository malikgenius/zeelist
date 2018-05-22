import React from 'react';
// eslint-disable-next-line
import { Col, Container, Row, Footer, Badge, Alert } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue" className="font-small pt-4 mt-4">
               
                <div className="footer-copyright text-center">
                    <Container >
                        
                        {(new Date().getFullYear())}  Copyright:<a href="https://www.zeenah.com"> zeenah.com </a>  Powered By: <Badge color="info">ZEENAH-IT</Badge>
                        
                    </Container>
                </div>
            </Footer>
        );
    }
}
      
export default FooterPage;


