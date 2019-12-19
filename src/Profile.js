import React from "react";

const profileData = {
  nerani: {
    name: "전혜란",
    description: "studing"
  },
  homer: {
    name: "호머 심슨",
    description: "심슨가족 가장"
  }
};

function Profile({ match }) {
  //url 파라미터를 match를 통해 불러온다
  //그 파라미터는 app.js  : 처리된 :username이다
  const { username } = match.params;
  //   다양한 값을 불러오려면
  //app.js :username:id형식으로 바꿔주고 다음과 같이 작성한다
  //   const { username, id } = match.params;

  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
