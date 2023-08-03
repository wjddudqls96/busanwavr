import TourAddressSearch from "./TourAddressSearch";
import TourImageUpload from "./TourImageUpload";
import { useSelector, useDispatch } from "react-redux";
import {
  setTitle,
  setContent,
  setLatitude,
  setLongitude,
  setImage,
} from "./TourCourseReducer";

type TourCourseUploadProps = {
  index: number;
  course: any;
};

const TourCourseUpload: React.FC<TourCourseUploadProps> = ({
  index,
  course,
}) => {
  const { courses } = useSelector((state: any) => state.tourCourse);
  const dispatch = useDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ index: index, title: e.target.value }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setContent({ index: index, content: e.target.value }));
  };

  const handleImageFileChange = (file: File | null) => {
    dispatch(setImage({ index: index, image: file }));
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLongitude({ index: index, lon: parseFloat(e.target.value) }));
  };

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLatitude({ index: index, lat: parseFloat(e.target.value) }));
  };

  return (
    <>
      <TourAddressSearch index={index} course={course} />
      <div>
        <label>
          위도:
          <input
            type="text"
            value={courses[index].lon}
            onChange={handleLongitudeChange}
            disabled
          />
        </label>
        <label>
          경도:
          <input
            type="text"
            value={courses[index].lat}
            onChange={handleLatitudeChange}
            disabled
          />
        </label>
        <label>
          제목:
          <input
            type="text"
            value={courses[index].title}
            onChange={handleTitleChange}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea
            value={courses[index].content}
            onChange={handleContentChange}
          />
        </label>
        <TourImageUpload
          imageFile={courses[index].image}
          setImageFile={(file) => handleImageFileChange(file)}
        />
      </div>
    </>
  );
};

export default TourCourseUpload;
