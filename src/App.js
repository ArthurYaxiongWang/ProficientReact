import { useState, createContext, useContext } from "react";

const MsgContext = createContext();

function B() {
  const message = "From B: Hello grandparent.";
  const { setMsgb } = useContext(MsgContext);

  return (
    <div>
      This is component B.
      <button onClick={() => setMsgb(message)}>click</button>
    </div>
  );
}

function C() {
  const message = "From C: Hello grandparent. ";
  const { setMsgc } = useContext(MsgContext);

  return (
    <div>
      THis is component C.
      <button onClick={() => setMsgc(message)}>Click</button>
    </div>
  );
}

function A() {
  return (
    <div>
      This is component A.
      <B />
      <C />
    </div>
  );
}

function D({ passMsg }) {
  return (
    <div>
      This is component D.
      <button onClick={() => passMsg("From D: Hello sibling E")}>Click</button>
    </div>
  );
}

function E({ msg }) {
  return <div>This is component E. Message from D: {msg} </div>;
}

function App() {
  const [msgb, setMsgb] = useState("");
  const [msgc, setMsgc] = useState("");

  const [msgDtoE, setMsgDtoE] = useState("");

  return (
    <MsgContext.Provider value={{ setMsgb, setMsgc }}>
      <div>
        This is parent component.
        <br />
        Message from B: {msgb}
        <br />
        Message from C: {msgc}
        <br />
        This is from component A:{" "}
        <A msgb={msgb} msgc={msgc} setMsgb={setMsgb} setMsgc={setMsgc} />
        <br />
      </div>

      <div>
        <D passMsg={setMsgDtoE} />
        <E msg={msgDtoE} />
      </div>
    </MsgContext.Provider>
  );
}

export default App;
