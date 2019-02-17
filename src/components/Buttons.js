import React from 'react';
import VoteResult from './VoteResult'


const Button = (props) => {


  return(
    <div>

    <button onClick = {props.addVoteDeal}>DEAL</button>{' '}
    <button onClick = {props.addVoteDeal}>NO DEAL</button>{' '}
    <button onClick = {props.addVoteDeal}>NO BREXIT</button>
    <h3>{props.voteDeal === null ? 'Reveal UK Future' : <VoteResult
    voteDeal = {props.voteDeal}/>}</h3>
    </div>
  )

}


export default Button
