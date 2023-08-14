import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

// 가이드의 투어시작하기 버튼 컴포넌트
function TourStartBtn({ Tour }) {
  const navigate = useNavigate();
  const tourUID = Tour.uid;
  const tourId = Tour.tourId;

  const handleStartClick = () => {
    navigate("../../../../livestream", {
      state: { tourUID: tourUID, tourId: tourId },
    });
  };

  return (
    <>
      <Button
        className="mt-3 bg-blue-50 p-3 rounded-md w-full"
        color="primary"
        variant="flat"
        onClick={handleStartClick}
      >
        방송 시작하기
      </Button>
    </>
  );
}

export default TourStartBtn;
