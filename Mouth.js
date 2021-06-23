import {arc} from 'd3';
 console.log(arc);

export const Mouth = ({mouthRadius,mouthWidth}) => {
          var mouthArc = arc() 
            .innerRadius(mouthRadius) 
            .outerRadius(mouthRadius + mouthWidth) 
            .startAngle(Math.PI/2) 
            .endAngle(Math.PI*3/2);
  return <path d={mouthArc()}/>};