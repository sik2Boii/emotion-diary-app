import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import useDiary from "../hooks/useDiary";

// Edit 컴포넌트
const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);

  // '삭제하기' 버튼 클릭 시 호출되는 함수
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하시겠습니까?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  // '작성완료' 버튼 클릭 시 호출되는 함수
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정하시겠습니까?"))
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
