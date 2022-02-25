import React, {useState} from "react"

function NewDogForm() {

    const [formData, setFormData] = useState({
        "name": "",
      "isGoodDog": "",
      "image":""
    })

    function handleOnChange(e) {
        setFormData( {
            ...formData, 
            [e.target.name] : e.target.value
        })
    }
    
    function handleSubmit(e) {
         const newDog = {
        "name": formData.name,
        "isGoodDog": formData.isGoodDog,
        "image": formData.image
        }

        fetch(`http://localhost:3001/pups/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newDog)
        })
        .then(res => res.json())
        .then(data => (data))
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Dog Name:</label><input onChange={handleOnChange} name="name"></input>
            <label>Is Good Dog?:</label><input onChange={handleOnChange} name="isGoodDog" type="checkbox"></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default NewDogForm