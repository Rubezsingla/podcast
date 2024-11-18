import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage=()=>{
    const{roomId}=useParams();
    const myMeeting =async(element)=>{
      const appID =1415096272;
  const serverSecret = "da1b5ae2dd84da6a5b018c11fff61609";
  const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
    serverSecret,
    roomId,
    Date.now().toString(),"Romani Gupta"
);
const zp = ZegoUIKitPrebuilt.create(kitToken);
zp.joinRoom({
  container: element,
  scenario:{
    mode:ZegoUIKitPrebuilt.LiveStreaming,

  },
});
    };
    return <div className="room-page"><div ref={myMeeting}/>

    </div>
};
export default RoomPage;