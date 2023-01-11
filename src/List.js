import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({ list, handleEdit, handleDelete }) => {
    return (
        <div className='market-list'>
            {list.map((item) => {
                const { id, title } = item
                return (
                    <article key={id} className='market-item'>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button type="button" className='edit-btn' onClick={() => handleEdit(id)}><FaEdit /></button>
                            <button type="button" className='delete-btn' onClick={() => handleDelete(id)}><FaTrash /></button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default List