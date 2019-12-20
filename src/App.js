import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필 목록</Link>
          </li>
          <li>
            <Link to="/history">예제</Link>
          </li>
        </ul>
        <hr />
        {/* 페이지를 찾지 못했을때, not found 페이지를 보여줄때 사용 */}
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={HistorySample} />
          {/* switch로 감싸면 위의 route 모두를 만족하지 못했으므로 다음이 실행된다 */}
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다.</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
