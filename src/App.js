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
    if (!name) {
      console.log('ALERTA dados vazios');
    }
    else if (name && isEditing) {     
    setList(list.map((item) => {
      if(item.id === editId) {
        return { ...item, title: name }        
      }
      return item
    }))    
    setName('')
    setEditId(null)
    setIsEditing(false)
    }
    else {
      const newItem = { id: new Date().getMilliseconds().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const handleEdit = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }

  const handleDelete = (id) => {
    const newList = [...list].filter((item) => item.id !== id)
    setList(newList)
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
            <List list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
          </div>
        }
      </section>
    </div>
  );
}

export default App;
