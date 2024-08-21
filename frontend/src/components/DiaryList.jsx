import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  // 정렬 타입이 변경될 때 호출되는 함수
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 정렬된 데이터를 반환하는 함수
  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_weapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
