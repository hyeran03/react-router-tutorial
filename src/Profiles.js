import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";
// import WithRouterSample from "./WithRouterSample";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/nerani">nerani</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>

      {/* render을 사용하면 함수를 바로 사용할수 있어 변수를 바로 가져올수잇다. */}
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />

      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  );
}

export default Profiles;

//sub route - 페이지에 탭이 잇을때 테그를 선택하고 싶을때 활용할수 있다
