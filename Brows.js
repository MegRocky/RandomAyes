import {arc} from 'd3';

export const Brows = ({browRadius,eyeOffsetX,browOffsetY}) => 
{let browArc = arc() 
            .innerRadius(browRadius) 
            .outerRadius(browRadius + 4) 
            .startAngle(-Math.PI/2.5) 
            .endAngle(Math.PI/2.5);
  
  return <g>
    <g transform ={`translate(${+eyeOffsetX},${-browOffsetY})`}>
        	<path d={browArc()}/>
        </g>
       	<g transform ={`translate(${-eyeOffsetX},${-browOffsetY})`}>
     	 		<path d={browArc()}/>
     	 	</g>
      </g>};