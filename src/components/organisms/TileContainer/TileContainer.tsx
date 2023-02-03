import React, { ReactElement } from 'react';
import './TileContainer.scss';

interface ITileContainer {
  /** Tiles that are inside the Tile Container */
  children: ReactElement;
  /** Technical attributes */
  'data-testid': string;
}

const TileContainer = ({ 'data-testid': testId, children }: ITileContainer) => {
  return (
    <div className='tile-container' data-testid={`${testId}-tile-container`}>
      {children}
    </div>
  );
};

export default TileContainer;
