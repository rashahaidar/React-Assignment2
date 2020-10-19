import React from 'react';
const max=10;

const validationComponent=(props)=>{
 
    return( 
        <div>
        {props.length<5 && props.length>=1 ? <p>Text too short</p> : props.length> max ? <p>Text long enough</p> : null}
        </div>
        
     
      
       
    );
}

export default validationComponent;