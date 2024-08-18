import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 특정 일기를 상세히 조회하는 Diary 페이지
// 4. "*": 정의되지 않은 모든 경로에 대해 Notfound 페이지를 표시

function App() {
  const nav = useNavigate();

  // 특정 조건에 따라 페이지 이동이 필요할 때 useNavigate 사용
  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        {/* Link 컴포넌트를 사용하면 전체 페이지 리로드 없이 SPA 방식으로 네비게이션이 가능 */}
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>

        {/* a 태그를 사용하면 페이지가 전체적으로 리로드되며, 네비게이션 시 상태가 초기화됨 */}
        {/* <a href="/">Home</a> */}
        {/* <a href="/new">New</a> */}
        {/* <a href="/diary">Diary</a> */}
      </div>

      <button onClick={onClickButton}>New 페이지로 이동</button>

      {/* Routes 컴포넌트 내부에는 Route 컴포넌트만 배치할 수 있습니다.  */}
      {/* Routes 외부에 작성된 컴포넌트는 모든 페이지에서 공통으로 렌더링됩니다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
