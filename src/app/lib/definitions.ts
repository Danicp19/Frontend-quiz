export type QuizType = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility'

export interface HomeItemProps {
  img: string;
  text: string;
}

export interface Data {
  title: string;
  icon: string;
  questions: []
}

export interface HomeState {
  name: string;
  icon: string;
  quizzes: Data[]; // Use a more specific type for quizzes if available
  darkMode: boolean;
}