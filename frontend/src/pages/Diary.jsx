import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";

const Diary = () => {
  // useParams를 사용하여 URL 파라미터에 접근
  const params = useParams();

  return (
    <div>
      <Header
        title={"일기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </div>
  );
};

export default Diary;
