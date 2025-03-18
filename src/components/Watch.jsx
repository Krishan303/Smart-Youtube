import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParams] = useSearchParams();
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(closeMenu());
  //   }, []);
  const videoId = searchParams.get('v');
  console.log(videoId)

  return (
    <div>
      <div className="flex">
    <div>
      <iframe
        width="700"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?si=Wb64CFvZOyy8NAfD`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
    <div>
      <LiveChat/>
    </div>
    </div>
     <CommentsContainer/>
     </div>
  );
};

export default Watch;
