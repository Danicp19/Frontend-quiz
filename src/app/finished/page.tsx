'use client'
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "@components/quiz/quizSlice";
import { resetMode } from "@components/home/homeSlice";
import { useEffect } from "react";
import { RootState } from '@lib/store';
import { useRouter } from 'next/navigation';
import type { QuizType, HomeItemProps } from '@lib/definitions'
import AppLayout from "@ui/AppLayout"




function FinishedScreen() {
    const { name, icon, darkMode } = useSelector((state: RootState) => state.home);
    const { score, questions } = useSelector((state: RootState) => state.quiz);

    const dispatch = useDispatch();
    const router = useRouter();

    const bgColors: Record<QuizType, string> = {
        HTML: "#FCE5E4",
        CSS: "#D9F3E3",
        JavaScript: "#D3E8F0",
        Accessibility: "#D6B8F7",
    };

    const bgStyle = {
        backgroundColor: bgColors[name as QuizType]
    };


    function playAgain() {
        dispatch(resetQuiz());
        dispatch(resetMode());
        router.push('/');

    }

    useEffect(() => {
        if (!name || !icon) {
            dispatch(resetQuiz());
            dispatch(resetMode());
            router.push('/');
        }
    }, [icon, name, dispatch, router]);

    return (
        <AppLayout>
            <div className="desktop:grid-cols-1 desktop:gap-24 mobile:gap-16 grid grid-cols-2">
                <div>
                    <h2
                        className={`mobile:text-[4rem] text-[6.4rem] font-light leading-[100%] transition-all duration-300 ${darkMode ? "text-white" : "text-dark-navy"
                            }`}
                    >
                        Quiz completed <br />
                        <span className="font-medium">You scored...</span>

                    </h2>
                </div>
                <div>
                    <div
                        className={`mobile:rounded-[1.2rem] flex flex-col items-center gap-16 rounded-[2.4rem] p-20 transition-all duration-300 ${darkMode ? "bg-navy" : "bg-white"
                            }`}
                    >
                        <div className="mobile:gap-8 flex items-center gap-12">
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
                        <div className="flex flex-col items-center gap-6">
                            <p
                                className={`mobile:text-[8.8rem] text-[14.4rem] font-medium leading-[100%] transition-all duration-300 ${darkMode ? "text-white" : "text-dark-navy"
                                    }`}
                            >
                                {score}
                            </p>
                            <p
                                className={`mobile:text-[1.8rem] text-[2.4rem] leading-[150%] transition-all duration-300 ${darkMode ? "text-light-bluish" : "text-dark-navy"
                                    }`}
                            >
                                out of {questions.length}
                            </p>
                        </div>
                    </div>
                    <button
                        className=" mobile:text-[1.8rem] mobile:p-7 mobile:rounded-[1.2rem] col-start-2 mt-12 w-full rounded-[2.4rem] bg-purple p-[3.2rem] text-[2.8rem] font-medium leading-[100%] text-white transition-all duration-300"
                        onClick={playAgain}
                    >
                        Play Again
                    </button>
                </div>
            </div>
        </AppLayout>
    );
}

export default FinishedScreen;