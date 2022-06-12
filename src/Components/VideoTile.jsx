import React from "react";
import {
  useHMSActions,
  useHMSStore,
  selectCameraStreamByPeerID,
} from "@100mslive/react-sdk";

const VideoTile = ({ peer, isLocal }) => {
  const hmsActions = useHMSActions();
  const videoRef = React.useRef(null);
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));

  React.useEffect(() => {
    (async () => {
      console.log(videoRef.current);
      console.log(videoTrack);
      if (videoRef.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef.current);
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef.current);
        }
      }
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoTrack]);

  return (
    <div>
      <div>
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={true}
          className={`object-cover h-64 w-64 rounded-lg shadow-lg ${
            isLocal ? "mirror" : ""
          }`}
        ></video>
        <div>
          <div>{`${peer.name}`}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoTile;
