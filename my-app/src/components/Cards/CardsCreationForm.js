import {useCallback, useState} from "react";

export default function CardsCreationForm({onSubmit}) {
    const [valueInput, setValueInput] = useState({
        id: Date.now(),
        title: '',
        price: '',
        gender: '',
        imageUrl: ''
    })

    function handleInputChange (e) {
        const target = e.target;
        const val = target.type === 'src' ? target.src : target.value;
        const name = target.id;
        setValueInput({
            ...valueInput,
            [name]: val
        });
    }

    return (
        <form onSubmit={() => onSubmit(valueInput)}>
            <label htmlFor="title">Title:</label>
            <input id="title" required type="text" value={valueInput.title} onChange={handleInputChange}/>
            <label htmlFor="price">Price:</label>
            <input id="price" required type="number" value={valueInput.price} onChange={handleInputChange}/>
            <label htmlFor="gender">Male:</label>
            <input id="gender" type="radio" checked={valueInput.gender === "male"}
                   onChange={() => setValueInput({...valueInput, gender: 'male'})}/>
            <label htmlFor="gender">Female:</label>
            <input id="gender" type="radio" checked={valueInput.gender === "female"}
                   onChange={() => setValueInput({...valueInput, gender: 'female'})}/>
            <label htmlFor="imageUrl">Image:</label>
            <input id="imageUrl" type="text" src={valueInput.imageUrl} onChange={handleInputChange}/>
            <button type="submit">Add card</button>
        </form>
    )

}