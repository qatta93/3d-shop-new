import React from "react";
import Image from 'next/image';

export const EmbedModelPopup = ({furniture, setShowEmbedModelPopup}) => {
  return (
    <article className="fixed top-0 left-0 right-0 bottom-0 bg-black w-screen h-screen z-10 opacity-100">
      <div className="w-full flex justify-end px-8 pt-8">
        <Image width={50} height={50} src="/images/cross.png" alt="exit" className="cursor-pointer" onClick={() => setShowEmbedModelPopup(false)}/>
      </div>
      <p className="text-white text-center text-[30px] font-semibold pt-4">{furniture.name}</p>
      <div className="h-full w-full flex align-middle justify-center pb-32">
        <iframe
          title={`${furniture.name}`}
          className="h-[400px] sm:h-[600px] w-full sm:w-[800px] my-auto"
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
