import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

const Card = (props) => {
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-center bg-light">
              <div className="card-header">
                {props.title} Card
              </div>
              <img className="card-img-top" src={props.imgSrc} alt="Card image cap" />
              <div className="card-body bg-white">
                  <h5 className="card-title">{props.subTitle}</h5>
                  <p className="card-text">
                    Spitz are a type of domestic dog characterized by long, thick, and often white fur, and pointed ears and muzzles. 
                  </p>
                  <a href="#" className="btn btn-primary">Go details</a>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  );

};



// const App = () => {
//   return (
//     <div>
//       <div className="ui fixed inverted menu">
//         <div className="ui container">
//           <a href="#" className="header item">
//             My React App
//           </a>
//           <a href="#" className="item">Home</a>
//         </div>
//       </div>
//       <div className="ui container">
//         <h1 className="ui header">Hello World</h1>
//         <p>This is a basic fixed menu template using fixed size containers.</p>
//         <p>A text container is used for the main container, which is useful for single column layouts</p>
//       </div>
//     </div>
//   );
// };
// function MyClock(props){
//   return (
//     <div>
    
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
// }
// setInterval(function(){
//   ReactDOM.render(
//     <MyClock title="shu"/>
    
//     , document.getElementById('root'));
// },1000);
// ReactDOM.render(
//   <h1>{new Date().toLocaleTimeString()}</h1>
  
//   , document.getElementById('root'));

ReactDOM.render(
  <Card imgSrc="../pics/dog.jpg" title="Cute Dog" subTitle="Spitz" />,
  document.getElementById('root')
);