import React from 'react'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  // This will make our price formatted to 2 decimal places.
  const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <></>
      </div>
    </li>
  );
}

export default MealItem