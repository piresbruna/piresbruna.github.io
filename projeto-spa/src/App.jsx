import Hogwarts from '../public/Hogwarts.jpg'
import { Changehouse } from './components/Changehouse'
import './styles/global.scss'


export function App(){
  return(
    <div style={{ 
      backgroundImage: `url(${Hogwarts})`,
      //backgroundImage: 'url(http://localhost:8080/Hogwarts.jpg)',
      backgroundRepeat: 'no-repeat center/cover',
      width:'100vw',
      height: '100vh'
    }}>
    <Changehouse />
    </div>
  )
}