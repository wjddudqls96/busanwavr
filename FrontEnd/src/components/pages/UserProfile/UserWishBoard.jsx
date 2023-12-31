import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WishCardList from "../../blocks/WishCardList";
import { toast } from "react-toastify";

function UserWishBoard() {
  const [wishData, setWishData] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const { userId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://busanwavrserver.store/user/wish/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setWishData(data.data.wishTours);
      } else {
        toast.error(
          "위시데이터를 받아올 수 없습니다. 잠시 후 다시 시도해 주세요."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full">
      {wishData ? <WishCardList wishData={wishData} /> : <p>로딩중ㅎ</p>}
    </div>
  );
}

export default UserWishBoard;
