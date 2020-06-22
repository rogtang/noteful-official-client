import React from 'react';
import {Link} from 'react-router-dom';

export default class ValidationError extends React.Component {
  state={error:null}
  static getDerivedStateFromError (error){
    console.log(error);
    return({error});
  }
  render(){
    if(this.state.error){
      return (
        <main className='error'>
          <h1>Woops, Something went wrong.</h1>
          <Link to='/'><h3>Click here to return to the home page</h3></Link>
        </main>
      )
    }
    else {return this.props.children;}
  }  
}