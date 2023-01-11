import { useState } from "react";
import List from "./List";

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({ status: false, type: '', msg: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      console.log('dados vazios');
    }
    else if(name && isEditing) {
      console.log('editar item');
    }
    else {
      const newItem = {id: new Date().getMilliseconds().toString(), title: name}
      setList([...list, newItem])      
    }
  }

  return (
    <div>
      <section>
        <h3>SuperMarket List</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">
              {isEditing ? 'Edit' : 'Submit'}
            </button>
          </form>
        </div>
        {list.length > 0 &&
          <div className="list">
            <List list={list} />
          </div>
        }
      </section>
    </div>
  );
}

export default App;
