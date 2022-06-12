import React from "react";
import VideoTile from "./VideoTile";
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers,
} from "@100mslive/react-sdk";
import ControlBar from "./ControlBar";

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  return (
    <div>
      <div>
        {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
        {peers &&
          peers
            .filter((peer) => !peer.isLocal)
            .map((peer) => {
              return (
                <>
                  <VideoTile isLocal={false} peer={peer} />
                </>
              );
            })}
      </div>
      <ControlBar />
    </div>
  );
};

export default Room;
