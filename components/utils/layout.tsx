import { Footer } from "../layout/footer/footer";
import { Header } from "../layout/header/header";
import { AnimatePresence, motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
