import React from 'react';
import "./Modal.css";
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
      style={{
        transform: props.show ? 'translate(0)' : 'translate(-100vh)',opacity: props.show ? '1':'0'
      }}
       className="Modal">
          {props.children }
      </div></Aux>
  )
}
export default modal;