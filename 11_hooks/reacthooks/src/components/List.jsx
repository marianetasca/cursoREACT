import { useEffect, useState } from "react";

const List = ({getItems}) => {
    const [myItems, setMyitems] = useState([]);
    useEffect(() => {
        console.log("buscando itens do db...")
        setMyitems(getItems)
    }, [getItems])
  return (
    <div>{myItems && myItems.map((item) => (
        <p key={item}> {item}</p>
    ))}</div>
  )
}

export default List