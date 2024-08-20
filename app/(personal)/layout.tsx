// HomeLayout.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "./_components/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
