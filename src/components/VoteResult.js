import React from 'react';

const VoteResult = (props) => {
  return(
    <div>
    <h3 style = {Styles}>DEAL  {props.voteDeal}</h3>
    <h3 style = {Styles}>NO DEAL {props.voteDeal}</h3>
    <h3 style = {Styles}>NO BREXIT {props.voteDeal}</h3>
    </div>
  )
}
const Styles = {
  border: ' solid DodgerBlue',
  borderWidth: '25 250 25 250',
  textAlign: 'left',
  borderRadius: 50,
  paddingLeft: 30,
}
export default VoteResult
