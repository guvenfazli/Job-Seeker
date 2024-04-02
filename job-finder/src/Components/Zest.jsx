import { useNavigation } from "react-router-dom"

export default function Zest({data}){
  const nav = useNavigation();

  console.log(nav)
  
  return (
    <div>
      {data.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  )
}