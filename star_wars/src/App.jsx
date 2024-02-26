import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({});
  const [data2, setData2] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then(r => r.json()) //jsona çevirdik.
      .then(a => {
        setData(a);
      })
  }, [])

  console.log(data);

  return (
    <div>
      {data.name}
    </div>
  )
}

export default App
