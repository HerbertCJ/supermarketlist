const List = ({ list }) => {
    return (
        <div>
            {list.map((item) => {
                const { id, title } = item
                return (
                    <div key={id}>{title}</div>
                )
            })}
        </div>
    )
}
export default List