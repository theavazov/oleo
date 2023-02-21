import { Footer } from "../layout/footer/footer";
import { Header } from "../layout/header/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
