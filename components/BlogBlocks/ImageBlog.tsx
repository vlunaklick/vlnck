import React from "react";

type Props = {
  url: string;
  caption: string;
};

function ImageBlog({ url, caption }: Props) {
  return <img className="max-h-80 mx-auto mt-5 mb-4" src={url} alt={caption} />;
}

export default ImageBlog;
