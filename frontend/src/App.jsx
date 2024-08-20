import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 페이지
// 2. "/new": 새로운 일기를 작성하는 페이지
// 3. "/diary": 특정 일기를 상세히 조회하는 페이지
// 4. "/edit": 특정 일기를 수정하는 페이지
// 5. "*": 정의되지 않은 모든 경로에 대해 Notfound 페이지를 표시

function App() {
  const nav = useNavigate();

  // 특정 조건에 따라 페이지 이동이 필요할 때 useNavigate 사용
  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
