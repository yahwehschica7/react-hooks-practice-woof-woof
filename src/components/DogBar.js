import Filter from "./Filter"


function DogBar({dogs, handleSummary}) {
   
    return(
        <div id="dog-bar">
            {dogs.map(dog => {
                return <span onClick={() => {handleSummary(dog)}} key={dog.id}>
                    {dog.name}
                </span>
            })} 
        </div>
    )
}

export default DogBar 