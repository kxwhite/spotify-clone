import * as React from "react";
import './BodySkeleton.css'
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function BodySkeleton() {
  return (
    <div className="skel--body">
      <div>
        <Stack spacing={2}>
          <Skeleton animation="wave" variant="rounded" width={500} height={50} sx={{ borderRadius: 500, backgroundColor: '#3A3A3A'}} />
          <div className="skel--top-container">
            {Array(3).fill().map((item, index) => (
              <div className="skel--top-card" key={index}>
                <Skeleton animation="wave" variant="square" width={70} height={70} sx={{ backgroundColor: '#5E5E5E'}} className='skel--square-overlap'/>
                <span className="skel--overlap-container">
                  <Skeleton animation="wave" variant="square" width={'100%'} height={70} sx={{ backgroundColor: '#3A3A3A'}} className='skel--overlap-bottom'/>
                  <Skeleton animation="wave" variant="rounded" width={'85%'} height={30} sx={{ borderRadius: 500, backgroundColor: '#5E5E5E'}} className='skel--overlap-top' />
                </span>
              </div>
            ))}
          </div>

          <Skeleton animation="wave" variant="rounded" width={200} height={20} sx={{ borderRadius: 500, backgroundColor: '#3A3A3A'}} className='skel--bottom-title'/>
          <div className="skel--bottom-container">
            {Array(25).fill().map((item, index) => (
              <div className="skel--bottom-cards" key={index}>
                <div className="skel--bottom-sect">
                  <Skeleton animation="wave" variant="rounded" width={190} height={250} sx={{ backgroundColor: '#171717'}} className='skel--card-bg'/>
                  <div className="skel--card-img">
                    <Skeleton animation="wave" variant="rounded" width={150} height={150} sx={{ backgroundColor: '#3A3A3A'}}/>
                  </div>
                  <div className="skel--card-txt-container">
                    <Skeleton animation="wave" variant="rounded" width={130} height={20} sx={{ borderRadius: 500, backgroundColor: '#3A3A3A'}} className='skel--card-txt1'/>
                    <Skeleton animation="wave" variant="rounded" width={80} height={20} sx={{ borderRadius: 500, backgroundColor: '#3A3A3A'}} className='skel--card-txt2'/>
                  </div>
                </div>
              </div>
            ))}
         </div>
        </Stack>
      </div>
    </div>
  );
}
