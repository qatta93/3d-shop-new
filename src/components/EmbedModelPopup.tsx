import React from "react";
import Image from 'next/image';

export const EmbedModelPopup = ({furniture, setShowEmbedModelPopup}) => {
  return (
    <article className="relative ">
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black w-screen h-screen z-10 opacity-90" onClick={() => setShowEmbedModelPopup(false)}>
      <div className="w-full flex justify-end px-8 pt-8">
        <Image width={40} height={40} src="/images/cross.png" alt="exit" className="cursor-pointer" onClick={() => setShowEmbedModelPopup(false)}/>
      </div>
      <p className="text-white text-center text-[30px] pt-12">{furniture.name}</p>
    </div>
    <div className="fixed top-1/2 left-1/2 -translate-y-1/4 -translate-x-1/2 flex align-middle justify-center pb-32 z-40">
        <iframe
          title={`${furniture.name}`}
          className="w-screen h-[400px] sm:h-[430px] xs:w-full sm:w-[800px] my-auto bg-white"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src={`${furniture.embed}`}
        >
        </iframe>
      </div>
    </article>
  );
};
