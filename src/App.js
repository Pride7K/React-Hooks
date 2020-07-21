import React, { useState, useEffect } from 'react';


export default function App() {
  const [location,setLocation] = useState({})

  useEffect(()=>{
    const idEvent = navigator.geolocation.watchPosition(handlePositionReceived)

    // will mount com hooks
    return ()=> navigator.geolocation.clearWatch(idEvent)

  },[])

  function handlePositionReceived({coords}){
    const {latitude,longitude} = coords
    setLocation({latitude,longitude })
  }

  return(
    <>
    Latidude: {location.latitude}<br/>
    Longitude: {location.longitude}
    </>
  )

  /*
  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    async function loadRepo(){
      const response = await fetch("https://api.github.com/users/Pride7K/repos")
      const data = await response.json();
      setRepository(data);
    }
    loadRepo();
  }, [])

  useEffect(()=>{
    const filtered = repositories.filter(repo=>repo.favorite);
    document.title = `Você tem ${filtered.length} Favoritos`
  },[repositories])


  function handleFavorite(id){
    const newRepositores = repositories.map(repo => {
      return repo.id === id ? { ...repo,favorite:!repo.favorite} : repo
     
    })
    setRepository(newRepositores);
  }
  
   // arrow function no button garante que o metodo não seja chamado automaticamente
  return (
    <>
      <ul>
        {repositories.map(repository => <li key={repository.id}>{repository.name}
        {repository.favorite === true ? <span> (Favorito)</span> : ""}
        <button onClick={()=> handleFavorite(repository.id)}>Favoritar</button></li>)}
      </ul>
    </>
  )
  */
}

