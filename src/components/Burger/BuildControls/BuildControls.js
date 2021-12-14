import React from "react";
import "./Buildcontrols.css";
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];
const buildControls = (props) => {
    return (
<div className="BuildControls">
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
    {controls.map (ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label}
        removed={() => props.ingredientRemoved(ctrl.type)}
        added={() => props.ingredientAdded(ctrl.type)} 
        disabled={props.disabled[ctrl.type]}/>
    ))}
    <button className="OrderButton"
    disabled={!props.purchaseable} onClick={props.ordered}>Order Now</button>
</div>
    )}
export default buildControls;
