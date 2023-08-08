import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";
import GuideTourCard from "../../blocks/GuideTourCard";

function GuideScheduledBoard() {
  const { urlId } = useParams();
  const { isMe } = useOutletContext();
  const [guideTourData, setGuideTourData] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (shouldReload) {
      fetchData();
      setShouldReload(true);
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://busanwavrserver.store/guide/${urlId}/tour/schedule`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("가이드 예정정보를 받았어요");
          const data = await response.json();
          const TourData = data.data;
          const GuideTour = TourData.scheduledTours;
          console.log(GuideTour);
          setGuideTourData(GuideTour);
          console.log("guideTourData", guideTourData);
        } else {
          alert("투어데이터를 받아올 수 없습니다. 잠시 후 다시 시도해 주세요.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // window.location.reload();
  }, []);
  return (
    <div>
      <GuideTourCard TourData={guideTourData} isMe={isMe} />
    </div>
  );
}

export default GuideScheduledBoard;
