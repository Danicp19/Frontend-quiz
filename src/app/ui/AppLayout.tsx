'use client'
import { useSelector } from "react-redux";
import { RootState } from '../lib/store';
import Header from "../components/header/page";
// import PageDesign from "./PageDesign";



export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { darkMode } = useSelector((state: RootState) => state.home);

  return (
    <div
      className={`laptop:px-24 desktop:py-16 mobile:py-8 mobile:px-8 relative grid min-h-screen grid-rows-[auto_1fr] overflow-hidden px-56 pt-28 pb-16 font-rubik transition-all duration-300 ${darkMode ? "bg-dark-navy" : "bg-light-grey"
        }`}
    >
      <Header />
      <main className="z-[2]">
        {children}
      </main>
      {/* <PageDesign /> */}
    </div>
  );
}
