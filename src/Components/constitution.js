import React from 'react';
import '../core.css';
import displayConstitution from './About/constitution'

class Constitution extends React.Component {
  render(){
  return (
    <div className="Main">
        <div className="Page-Section">
            {displayConstitution()}
        </div>
    </div>
  );
}
}

export default Constitution;
