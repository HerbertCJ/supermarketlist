import { useState } from "react";

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({status: false, type: '', msg: ''})

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
