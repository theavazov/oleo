import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [variant, setVariant] = useState(""); // business || youtube || post
  const [video, setVideo] = useState(null); // youtube video link
  const [productContent, setProductContent] = useState({});

  const value = {
    isModal,
    setIsModal,
    variant,
    setVariant,
    video,
    setVideo,
    productContent,
    setProductContent,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
