import React from 'react'

const CoreConcepts = (props:any) => {
    return (
        <li>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </li>
      );
}

export default CoreConcepts
