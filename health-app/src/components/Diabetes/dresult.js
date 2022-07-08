import react from 'react';
import Diabetes from './Diabetes';

const func = (d) => {
    if(d===1)return `${"You have high chances of having diabetes"}`
    else if(d===0) return`${"You are healthy!"}`
    else return `${" "}`
  }

const Dresult = (props) => {
    return( 
      <h2> {func(props.data)} </h2>
    );
}


export default Dresult;