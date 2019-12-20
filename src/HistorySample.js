import React, { useEffect } from "react";

// history 객체를 사용해 component에서 route에 직접적인 접근이 가능
// 특정 함수를 통해 특정 경로로 이동할 수 있게끔 해줌

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };
  //component가 처음 마운트되었을때
  useEffect(() => {
    console.log(history);
    //이탈방지
    const unblock = history.block("정말 떠나실건가요?");
    //component가 언마운트될때 이탈 방지 기능을 비활성화 하겠다
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
