import React from "react";
//location을 추출해주는
import qs from "qs";

function About({ location }) {
  //query 읽기
  //추출(파싱)하기
  //주소창에 입력된 ?a=1의 값은 location.search값으로 이를 추출하기 위해다음과 같이함
  const query = qs.parse(location.search, {
    //이를 행하지 않으면 ? 가 들어간 상태로 추출된다
    ignoreQueryPrefix: true
    //추가적인 값을 넣고자 한다면
    //?a=1&b=2&c=3 의 식으로 넣으면 배열화 되어 추출된다
  });

  //특정값을 입력했을떄 추가적 정보를 보여주기위해
  //받아오는 값은 string이므로 ''안에 입려해 주어야한다
  const detail = query.detail === "true";
  //   number값이나 boolean일시
  // parseInt(quety.id, 10); <-number일시 이런식으로 추가해주어야한다

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {/* detail 값이 true라면 다음의 정보가 보여짐 */}
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
}

export default About;
