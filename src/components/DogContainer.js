import {useEffect, useState} from "react" 
import DogBar from "./DogBar"
import DogSummary from "./DogSummary"
import Filter from "./Filter"
import NewDogForm from "./NewDogForm"


function DogContainer() {

    const [dogs, setDogs] = useState([])
    const [dogSummary, setDogSummary] = useState({})

    function handleSummary(dog) {
        setDogSummary(dog)
    }

    function handleClickGoodBadDog(id, isGoodDog) {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({isGoodDog: isGoodDog})
        })
        .then(res => res.json())
        .then(data => setDogSummary(data))
        
    }

    useEffect(() => {
        fetch("http://localhost:3001/pups")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, []) 

    return (
        <>
            <Filter />
            <DogBar dogs={dogs} handleSummary={handleSummary}/>
            <NewDogForm />
            <DogSummary 
            dog={dogSummary}
            handleClickGoodBadDog={handleClickGoodBadDog} 
            /> 
        </>
    )
}

export default DogContainer