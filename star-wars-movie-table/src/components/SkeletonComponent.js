import React from 'react';
import { Skeleton } from '@material-ui/lab';

function SkeletonComponent() {
  return (
    <div>
      <Skeleton height={100}/>
      <Skeleton height={75}/>
      <Skeleton height={50}/>
      <Skeleton height={50}/>
      <Skeleton height={50}/>
      <Skeleton height={50}/>
    </div>
  );
}


export default SkeletonComponent;