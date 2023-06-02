
import { useState,useEffect} from 'react';
import Cardlist from './components/card-list/cardlist'
import './App.css';
import SearchBox from './components/searchbox/searchbox';




const App = () => {

const [searchField,setSearchField] =useState('');
const [monster,setMonster]=useState([]);
const [filteredMonster,setFilterMonster]=useState(monster);


  useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce =>responce.json())
    .then((users)=>setMonster(users)
    )

  },[]);

useEffect(()=>{

  const newfilteredMonster=monster.filter((mon)=>{
      return mon.name.toLocaleLowerCase().includes(searchField);
  }) 
  setFilterMonster(newfilteredMonster);

},[monster,searchField])




const onSearchChange=(event)=>{
        
    
    const searchFieldString =event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);

  }




  
  return (
     <div className="App">
    <h1 className='app-title'>Monster Roler Desk</h1>

     <SearchBox className='monsters-search-box'
     onChangeHandler={onSearchChange} placeholder='serach monster'/>

   

     <Cardlist monster={filteredMonster}/>


    </div>

    

  )
}




export default App;
