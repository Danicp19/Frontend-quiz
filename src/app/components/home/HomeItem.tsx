import { useDispatch, useSelector } from "react-redux";
import { selectIcon, selectQuiz } from "./homeSlice";
import { useRouter } from 'next/navigation';
import { RootState } from '@lib/store';
import type { QuizType, HomeItemProps } from '@lib/definitions'

function HomeItem({ img, text }: HomeItemProps) {

    const { darkMode } = useSelector((state: RootState) => state.home);
    const dispatch = useDispatch();
    const router = useRouter();

    function setQuiz() {
        dispatch(selectQuiz(text));
        dispatch(selectIcon(img));
        router.push(`/${text}`);
    }

    const bgColors: Record<QuizType, string> = {
        HTML: "#FCE5E4",
        CSS: "#D9F3E3",
        JavaScript: "#D3E8F0",
        Accessibility: "#D6B8F7",
    };

    const bgStyle = {
        backgroundColor: bgColors[text as QuizType],
        borderRadius: "0.4rem",
    };

    return (
        <li
            className={`mobile:gap-6 mobile:rounded-[1.2rem] flex cursor-pointer items-center gap-12 rounded-[2.4rem] p-8 shadow-sm transition-all duration-300 ${darkMode ? "bg-navy" : "bg-white"
                }`}
            onClick={setQuiz}
        >
            <img
                src={img}
                alt={text}
                className="h-[4rem] w-[4rem] p-2"
                style={bgStyle}
            />
            <p
                className={`mobile:text-[1.8rem] text-[2.8rem] font-medium leading-[100%] transition-all duration-300 ${darkMode ? "text-white" : "text-dark-navy"
                    }`}
            >
                {text}
            </p>
        </li>
    );
}

export default HomeItem;