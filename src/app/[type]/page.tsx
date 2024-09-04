'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '@components/quiz/quizSlice';
import QuizPage from '@components/quiz/QuizPage';
import { RootState } from '@lib/store';

export default function Quiz() {

    const { name: selectedQuiz, quizzes } = useSelector((state: RootState) => state.home);
    const { questions, index } = useSelector((state: RootState) => state.quiz);
    const selectedQuizData = quizzes.find((item) => item.title === selectedQuiz);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedQuizData?.questions) {
            dispatch(setQuestions(selectedQuizData.questions));
        }
    }, [selectedQuiz, dispatch, selectedQuizData]);

    const currentQuestion = questions?.[index] ?? null;

    return (
        <div>
            {currentQuestion && (
                <QuizPage key={currentQuestion.question} question={currentQuestion} />
            )}
        </div>
    );
}