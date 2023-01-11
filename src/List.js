const List = ({ list, handleEdit, handleDelete }) => {
    return (
        <div>
            {list.map((item) => {
                const { id, title } = item
                return (
                    <div key={id}>
                        {title}
                        <button type="submit" onClick={() => handleEdit(id)}>edit</button>
                        <button type="submit" onClick={() => handleDelete(id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default List