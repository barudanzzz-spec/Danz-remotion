import React from 'react';
import {Composition} from 'remotion';
import {ScoopyVideo} from './video';

export const RemotionRoot: React.FC = () => <Composition
  id="ScoopyTips" component={ScoopyVideo} durationInFrames={1176}
  fps={30} width={1080} height={1920}
/>;
