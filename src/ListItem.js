

const ListItem = ({item}) => {
    console.log(item);
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

export default ListItem