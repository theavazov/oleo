import { Footer } from "../layout/footer/footer";
import { Header } from "../layout/header/header";
import { useContext, useEffect, useState } from "react";
import { Modal } from "./modal/modal";
import { ModalContext } from "../../contexts/modal";
import { TranslationsContext } from "../../contexts/translations";
import { Spinner } from "../universal/spinner/spinner";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useContext(TranslationsContext);
  const { isModal } = useContext(ModalContext);
  const [isLangs, setIsLangs] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      const eventclass = e.target.className;

      if (eventclass == "popup show") {
        setIsLangs(false);
      }
    });
  }, []);

  if (isLoading) return <Spinner />;

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
