import { Footer } from "../layout/footer/footer";
import { Header } from "../layout/header/header";
import { useContext, useState } from "react";
import { Modal } from "./modal/modal";
import { ModalContext } from "../../contexts/modal";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isModal } = useContext(ModalContext);
  const [isLangs, setIsLangs] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <Header
        isLangs={isLangs}
        setIsLangs={setIsLangs}
        isMenu={isMenu}
        setIsMenu={setIsMenu}
      />
      <main>{children}</main>
      <Footer />
      <div className={isLangs ? "popup show" : "popup"}></div>
      {isModal ? <Modal /> : null}
    </div>
  );
}
