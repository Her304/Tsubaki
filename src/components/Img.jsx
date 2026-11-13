import React, { useState } from "react";
import { IMAGES } from "../data/images.js";

/** Image from the local registry; falls back to a quiet colour block if missing. */
export default function Img({ k, alt = "", className = "", style }) {
  const [broken, setBroken] = useState(false);
  const meta = IMAGES[k];
  if (!meta || broken) return <div className={"img-fallback " + className} style={style} aria-hidden="true" />;
  return (
    <img
      src={meta.src}
      alt={alt}
      className={className}
      style={{ objectPosition: meta.pos || "center", ...style }}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}
