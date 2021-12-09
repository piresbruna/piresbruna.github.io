import '../styles/song.scss'
import parchment from '../../public/parchment.png'

export function Hogwartssong(props){
  const style = {
    backgroundImage: `url(${parchment})`,
    //backgroundImage: 'url(http://localhost:8080/parchment.png)',
    backgroundRepeat: 'no-repeat'}
  if(props.song == 'hogwarts'){
    return(
      <div className="song" style={style}>
        <h2>Welcome to Hogwarts!</h2>
        <p>
          Hogwarts, Hogwarts, Hoggy Warty Hogwarts,<br />
          Teach us something please,<br />
          Whether we be old and bald,<br />
          Or young with scabby knees,<br />
          Our heads could do with filling,<br />
          With some interesting stuff,<br />
          For now they're bare and full of air,<br />
          Dead flies and bits of fluff,<br />
          So teach us things worth knowing,<br />
          Bring back what we've forgot,<br />
          Just do your best, we'll do the rest,<br />
          And learn until our brains all rot.
        </p>
      </div>
    )
  }
  else if(props.song == 'red'){
    return(
      <div className="song" style={style}>
        <p>
          You might belong in Gryffindor,<br/>
          Where dwell the brave at heart,<br/>
          Their daring, nerve and chivalry<br/>
          Set Gryffindors apart.
        </p>
      </div>
    )
  }
  else if(props.song == 'yellow'){
    return(
      <div className="song" style={style}>
        <p>
          You might belong in Hufflepuff,<br/>
          Where they are just and loyal,<br/>
          Those patient Hufflepuffs are true<br/>
          And unafraid of toil.
        </p>
      </div>
    )
  }
  else if(props.song == 'blue'){
    return(
      <div className="song" style={style}>
        <p>
          Or yet in wise old Ravenclaw,<br/>
          If you're a ready mind,<br/>
          Where those of wit and learning,<br/>
          Will always find their kind.
        </p>
      </div>
    )
  }
  else if(props.song == 'green'){
    return(
      <div className="song" style={style}>
        <p>
          Or perhaps in Slytherin,<br/>
          You'll make your real friends,<br/>
          Those cunning folk use any means<br/>
          To achieve their ends.
        </p>
      </div>
    )
  }
}