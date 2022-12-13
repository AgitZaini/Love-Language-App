import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";
import TypePage from "./TypePage";
import Guard from "../guard/guard";

function App() {
    return (
        <>
            <Routes>
                {/* <Route path="register" element={<RegisterPage />} /> */}
                {/* <Routes> */}
                <Route path="/" element={<Landing />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="type" element={<TypePage />} />
                <Route
                    path="question"
                    element={
                        <Guard>
                            <QuestionPage />
                        </Guard>
                    }
                />
                <Route
                    path="result"
                    element={
                            <ResultPage />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
