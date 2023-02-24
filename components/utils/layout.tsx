import { Footer } from "../layout/footer/footer";
import { Header } from "../layout/header/header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Modal } from "./modal/modal";
import { ModalContext } from "../../contexts/modal";

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const { isModal } = useContext(ModalContext);
  const [isLangs, setIsLangs] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <Header
          isLangs={isLangs}
          setIsLangs={setIsLangs}
          isMenu={isMenu}
          setIsMenu={setIsMenu}
        />
        <main
        // style={{
        //   backgroundColor: pathname.includes("/products")
        //     ? "var(--yellow)"
        //     : "#f6edd1",
        // }}
        >
          {children}
        </main>
        <Footer />
        <div className={isLangs ? "popup show" : "popup"}></div>
        {isModal ? <Modal /> : null}
      </motion.div>
    </AnimatePresence>
  );
}
