import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

// 특정 달의 데이터를 필터링하여 반환하는 함수
const getMonthlyData = (pivotDate, data) => {
  // 해당 달의 시작일
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  // 해당 달의 마지막일
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);
  const monthlyData = getMonthlyData(pivotDate, data);

  // 이전 달로 이동
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  // 다음 달로 이동
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
