export function Header(props){
  return(
  <header>
    <img src={props.house.house} alt={props.house.description} />
    <h1>Hogwarts School of Wichtcraft and Wizardry</h1>
    <img src={props.house.house} alt={props.house.description} />
  </header>
  )
}