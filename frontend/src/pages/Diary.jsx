import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  // useParams를 사용하여 URL 파라미터에 접근
  const params = useParams();
  const nav = useNavigate();

  // 최초 렌더링 시점에서는 아직 데이터가 로드되지 않았으므로, useDiary 훅은 기본적으로 'undefined'를 반환
  // 일기 데이터가 로딩 중일 때 undefined 상태에서 렌더링되는 것을 방지하기 위해 로딩 중이라는 메시지를 표시
  const curDiaryItem = useDiary(params.id);
  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 일기`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
