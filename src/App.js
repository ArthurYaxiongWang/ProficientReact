import { useState, useEffect } from "react";

const url = "https://geek.itheima.net/v1_0/channels";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonList) => setData(jsonList.data.channels));
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
