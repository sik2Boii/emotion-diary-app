import { useParams } from "react-router-dom";

const Diary = () => {
  // useParams를 사용하여 URL 파라미터에 접근
  const params = useParams();

  return <div>Diary: {params.id}</div>;
};

export default Diary;
