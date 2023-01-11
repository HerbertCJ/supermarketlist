import { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({ status: false, type: '', msg: '' })

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter a value')
    }
    else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    }
    else {
      showAlert(true, 'success', 'item added to the list')
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
    showAlert(true, 'danger', 'item removed')
    const newList = [...list].filter((item) => item.id !== id)
    setList(newList)
  }

  const showAlert = (status = false, type = "", msg = "") => {
    setAlert({ status, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className='market-form'>
        {alert.status && <Alert {...alert} removeAlert={showAlert} />}
        <h3>SuperMarket List</h3>
        <div className="form-control">
          <input type="text" className="market" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 &&
        <div className="market-container">
          <List list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      }
    </section>
  );
}

export default App;
