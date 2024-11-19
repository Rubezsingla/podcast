import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage=()=>{
    const{roomId}=useParams();
    const myMeeting =async(element)=>{
      const appID =1004742415;
  const serverSecret = "31d35c600f4b707705e491f5466955ab";
  const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
    serverSecret,
    roomId,
    Date.now().toString(),"Rubez Singla"
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