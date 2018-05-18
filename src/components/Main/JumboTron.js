/* eslint react/prop-types: 0 */
import React from 'react';
import { Jumbotron,CardImg } from 'reactstrap';
// import SearchBar from './SearchBar';
// import CollapseButton from './CollapseButton';
// import Carousel2 from './Carousel2';
import './JumboTron.css';

const JumboTron = ({searchchange}) => {
  // console.log(searchchange);
  return (
    <div>
      
      <style>
        {
            `.h2, h2 {
              line-height: 100.00000003px;
              font-size: 50px;
              text-transform: uppercase;
              color: #db4949;
              margin-top: 0;
              font-weight: 700;
              font-family: Nunito,Arial,'Arial Unicode MS',Helvetica,sans-serif;
              text-align: right;
              @media (min-width: 992px)  
                
            }
            @media (min-width: 992px)
            .h2, h2 {
              line-height: 100.00000003px;
              font-size: 30px;
              text-transform: uppercase;
              color: #db4949;
              margin-top: 0;
              font-weight: 500;
              font-family: Nunito,Arial,'Arial Unicode MS',Helvetica,sans-serif;
              text-align: left;
                
            }
            @media (min-width: 576px)
            .jumbotron {
            padding: 1rem 2rem;
            
           }
            .jumbotron {
              padding: 1rem 2rem;
              margin-bottom: 2rem;
              /* background-color: #e9ecef; */
              background-color: none;
              border-radius: .3rem;
              
            }`
            }
            
      </style>
      <Jumbotron style={{background: 'none'}}>
        <h2>employees 
          {/* <span style={{color: 'red', fontWeight: 400, fontSize: '3rem'}}>ZEENAH</span>
          <span style={{fontWeight: 300, fontSize: '1.5rem'}}>tian`s</span> */}
        </h2>
        <h3 className="h2" style={{color: 'gray', fontSize: 30, lineHeight: 0,}}>database</h3>
        {/* <hr className="my-2" /> */}
        
        {/* <Carousel2 /> */}
        
        {/* <p className="lead">We are a people business. One that always offers a unique perspective based on local insight and international know-how. Always challenging convention and norms but respecting tradition and culture. We are wise heads on young shoulders.</p> */}
        
        {/* <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p> */}
        <div className="lead">
        {/* <SearchBar search={searchchange}/> */}
        {/* <CollapseButton /> */}
          {/* <Button color="primary">Learn More</Button> */}
        </div>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;