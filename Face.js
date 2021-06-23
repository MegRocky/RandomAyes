import {BackgroundCircle} from './BackgroundCircle.js';
import {Eyes} from './Eyes.js';
import {Mouth} from './Mouth.js';
import {Brows} from './Brows.js';
import {arc} from 'd3';
import {FaceContainer} from './FaceContainer.js';

export const Face = ({
  						width,
  						height,
  						centerX,
              centerY,
							strokeWidth,
              eyeOffsetX,
              eyeOffsetY,
              eyeRadius,
              mouthRadius,
              mouthWidth,
              browRadius,
  						browOffsetY,
} ) => (
  <FaceContainer width = {width} height = {height} centerX ={centerX} centerY= {centerY}>
      <BackgroundCircle 
        radius={centerY - strokeWidth/2} 
        strokeWidth={strokeWidth}/>
      <Eyes 
        eyeRadius ={eyeRadius} 
            eyeOffsetX={eyeOffsetX} 
            eyeOffsetY ={eyeOffsetY}/>
      <Mouth 
        mouthRadius = {mouthRadius} 
        			mouthWidth = {mouthWidth} /> 
     	<Brows 
        browRadius ={browRadius} 
              eyeOffsetX={eyeOffsetX} 
              browOffsetY ={browOffsetY}/>
    </FaceContainer>
);