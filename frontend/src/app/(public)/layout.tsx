import Footer from "@/modules/layout/Footer";
import Navbar from "@/modules/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
