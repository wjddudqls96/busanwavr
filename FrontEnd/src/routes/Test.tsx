import useAuthAutoLogin from "../components/useAuthAutoLogin";
import ChatRoom from "./ChatRoom.jsx";

function Test() {
  useAuthAutoLogin();
  return (
    <>
      <h1>Test 페이지입니다.</h1>
      <ChatRoom />
    </>
  );
}

export default Test;
