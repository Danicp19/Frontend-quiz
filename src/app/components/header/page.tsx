'use client'
import { useSelector } from "react-redux";
// import ToggleMode from "./ToggleMode";
import { RootState } from '@lib/store';
import type { QuizType } from '@lib/definitions'



function Header() {
    const { name, icon, darkMode } = useSelector((state: RootState) => state.home);

    const bgColors: Record<QuizType, string> = {
        HTML: "#FCE5E4",
        CSS: "#D9F3E3",
        JavaScript: "#D3E8F0",
        Accessibility: "#D6B8F7",
    };

    const bgStyle = {
        backgroundColor: bgColors[name as QuizType]
    };


    return (
        <header className="desktop:pb-24 z-[2] flex items-center justify-between pb-32">
            <div
                className={`mobile:gap-8 flex items-center gap-12 ${!name ? "opacity-0" : "opacity-100"
                    }`}
            >
                <img
                    src={icon}
                    alt={name}
                    className="h-[4rem] w-[4rem] p-2"
                    style={bgStyle}
                />
                <p
                    className={`mobile:text-[1.8rem] text-[2.8rem] font-medium leading-[100%] transition-all duration-300 ${darkMode ? "text-white" : "text-dark-navy"
                        }`}
                >
                    {name}
                </p>
            </div>
            {/* <ToggleMode /> */}
        </header>
    );
}

export default Header;

// export async function loader() {

//     const response = await fetch('/data.json');
//     const data = await response.json();
//     const info = data?.quizzes


//     return info;
// }

