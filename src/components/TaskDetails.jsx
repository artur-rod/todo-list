import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './TaskDetails.css'

import Button from './Button';

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return ( 
    <>
      <div className="back-button-container" onClick={handleBackButtonClick}>
        <Button >Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam repudiandae officiis itaque!</p>
      </div>
    </>
   );
}
 
export default TaskDetails;