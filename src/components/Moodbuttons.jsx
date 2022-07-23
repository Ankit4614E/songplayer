import React from 'react';

const Moodbuttons = (props) => {
    return (
        <div>
      <div className='moodBtnContainer'>
        <button className='moodButton' onClick={() => props.setmood("")}>All ❤️</button>
        <button className='moodButton' onClick={() => props.setmood("sad")}>Sad 😔</button>
        <button className='moodButton' onClick={() => props.setmood("happy")}>Happy 🤗</button>
        <button className='moodButton' onClick={() => props.setmood("chill")}>Chill 😁</button>
        <button className='moodButton' onClick={() => props.setmood("motivation")}>Motivation 😤</button>
    
      </div>
      </div>
    );
}

export default Moodbuttons;
