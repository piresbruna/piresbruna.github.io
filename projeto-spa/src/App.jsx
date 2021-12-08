import './styles/global.scss'
import hogwarts from './img/hogwarts.png'
import gryffindor from './img/gryffindor.png'
import hufflepuff from './img/hufflepuff.png'
import ravenclaw from './img/ravenclaw.png'
import slytherin from './img/slytherin.png'
import {Hogwartssong} from './components/Hogwartssong.jsx'
import { Header } from './components/Header'
import { useState } from 'react'

export function App(){
  const [song, setSong] = useState('hogwarts')
  const [house, setHouse] = useState({house: hogwarts, description: 'Hogwarts Crest'})

  function chooseHouse(button){
    setSong(button)
    if(button == 'red'){
      setHouse({house: gryffindor, description: 'Gryffindor crest'})
    }
    else if(button == 'yellow'){
      setHouse({house: hufflepuff, description: 'Hufflepuff Crest'})
    }
    else if(button == 'blue'){
      setHouse({house: ravenclaw, description: 'Ravenclaw Crest'})
    }
    else if(button == 'green'){
      setHouse({house: slytherin, description: 'Slytherin Crest'})
    }
    else{
      setHouse({house: hogwarts, description: 'Hogwarts Crest'})
    }
  }
 
  return(
  <>
    <Header house={house}/>
    <main>
        <Hogwartssong song={song}/>
        <h3>Choose your House</h3>
        <div className="buttongroup">
          <button id="red" type="button" 
            onClick={() => chooseHouse('red')}
          >Gryffindor</button>
          <button id="yellow" type="button" 
            onClick={() => chooseHouse('yellow')}
          >Hufflepuff</button>
        </div>
        <div className="buttongroup">
          <button id="blue" type="button" 
            onClick={() => chooseHouse('blue')}
          >Ravenclaw</button>
          <button id="green" type="button" 
            onClick={() => chooseHouse('green')}
          >Slitherin</button>
        </div>
        <button id="hogwarts" type="button" 
            onClick={() => chooseHouse('hogwarts')}
          >Back to Hogwarts</button>
    </main>
  </>
  )
}