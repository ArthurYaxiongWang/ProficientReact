import { useState } from "react";

function B({ passMsg }) {
  return (
    <div>
      This is component B.
      <button onClick={() => passMsg("From B: Hello sibling A")}>Click</button>
    </div>
  );
}

function A({ msg }) {
  return <div>This is component A. Message from B: {msg} </div>;
}

function App() {
  const [msgDtoE, setMsgDtoE] = useState("");

  return (
    <div>
      <B passMsg={setMsgDtoE} />
      <br />
      <A msg={msgDtoE} />
    </div>
  );
}

export default App;
