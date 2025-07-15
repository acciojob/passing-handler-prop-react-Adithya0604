import React from 'react';

function Selection(){
  const [BGChange, setBGCHANGE] = useState({background: ''});

  const updateSelectionStyle = (style) => {setBGCHANGE(style)};

  return(
    <>
    <div onclick={{applyColor(updateSelectionStyle)}}></div>
    </>)
};

export default Selection
