import React from 'react'
import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-12">
          <div className='content-center'>
            <CircularProgress style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading;
