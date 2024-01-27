import React, {useState} from 'react';
import { Form } from './components/Form';
import { Comment } from './components/Comment';

function App() {
  const [data, setData] = useState([]);
  const uploadData = (newComment) => {
    setData([...data, newComment]);
  };

  return (
    <>
      <div>
        <Form sendForm={uploadData} />
        <Comment data={data} />
      </div>
    </>
  )
}

export default App;
