import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
// import { Link, Route } from "react-router-dom";
// import WithRouterSample from "./WithRouterSample";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/nerani"
            // to="/" exact
            //스타일 주기
            activeStyle={{ background: "black", color: "white" }}
            //클래스주기
            // activeClassName="active"
            // //좀더 까다롭게 특정함수를 반환할때 스타일을 주고플때
            // isActive={(match, location)=>{
            //   return match.params.brara = 'asdfasd';
            // }}   -> true반환시 스타일들어가고, false반환시 안들어가고
          >
            nerani
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: "black", color: "white" }}
          >
            homer
          </NavLink>
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
