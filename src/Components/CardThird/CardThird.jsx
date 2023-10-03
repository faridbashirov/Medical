import React from "react";
import '../CardThird/CardThird.css'

const CardThird = ({image}) => (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",background:`url(${image})`,backgroundPosition:"center",backgroundSize:"cover"}} className="trans cardThird">
    
  </div>
);

export default CardThird;