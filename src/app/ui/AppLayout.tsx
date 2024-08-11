'use client'
import { useSelector } from "react-redux";
import { RootState } from '../lib/store';
// import Header from "./Header";
// import PageDesign from "./PageDesign";
import ClientHome from "@components/home/page";



export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { darkMode } = useSelector((state: RootState) => state.home);

  return (
    <div
      className={`laptop:px-24 desktop:py-16 mobile:py-8 mobile:px-8 relative grid min-h-screen grid-rows-[auto_1fr] overflow-hidden px-56 py-32 font-rubik transition-all duration-300 ${darkMode ? "bg-dark-navy" : "bg-light-grey"
        }`}
    >
      {/* <Header /> */}

      <main className="z-[2]">
        {children}
        <ClientHome />
      </main>
      {/* <PageDesign /> */}
    </div>
  );
}
