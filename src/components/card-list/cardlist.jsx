
import './card-list.css'
import Card from '../card/card';


const Cardlist = ({monster}) => (
<div className='card-list'>
        {monster.map((monster)=>{
            return <Card key={monster.id} monster={monster}/>;
        })}
        </div>
  
)



 
export default Cardlist;