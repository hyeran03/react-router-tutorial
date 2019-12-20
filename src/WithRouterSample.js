import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>location</h4>
      {/* json 이루어진 객체를 문자열로 고처주는 과정에서 들여쓰기를 하여 고친다 */}
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
}

export default withRouter(WithRouterSample);
//withRouter를 사용함으로써 history, location, match를 명시하지 않아도 사용할수잇음
