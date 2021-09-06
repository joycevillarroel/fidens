import React from 'react';
import { depositions } from './data'

const Depositions = () => {

  return (

    <div>
      <h1>Depoimentos</h1>
      <div>
        {
          depositions.map(obj => {
            return (
          <div>
            <p>Aluno:{obj.student}</p>
            <p>Pais:{obj.parents}</p>
            <p>Série:{obj.class}</p>
            <p>{obj.text}</p>
            <img src={obj.photo}/>
            </div>
            )
          })
        }
        
      </div>
    </div>

  );
};

export default Depositions;