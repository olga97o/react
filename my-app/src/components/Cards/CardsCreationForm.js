import {useState} from "react";
import styles from "./CardsCreationForm.scss"

export default function CardsCreationForm({onSubmit}) {
    const [valueInput, setValueInput] = useState({
        id: Date.now(),
        title: '',
        price: '',
        gender: '',
        imageUrl: ''
    })

    function handleInputChange(e) {
        const target = e.target;
        const val = target.type === 'src' ? target.src : target.value;
        const name = target.id;
        setValueInput({
            ...valueInput,
            [name]: val
        });
    }

    return (
        <form style={styles} onSubmit={e => {
            e.preventDefault();
            onSubmit(valueInput);
            setValueInput({
                ...valueInput,
                title: '',
                price: '',
                gender: '',
                imageUrl: ''
            });
        }}>
            <h3>You can add your card.</h3>
            <label htmlFor="title">Title:</label>
            <input id="title" required type="text" value={valueInput.title} onChange={handleInputChange}/>
            <label htmlFor="price">Price:</label>
            <input id="price" required type="number" value={valueInput.price} onChange={handleInputChange}/>
            <div>
                <label htmlFor="gender">Male:</label>
                <input id="gender" type="radio" checked={valueInput.gender === "male"}
                       onChange={() => setValueInput({...valueInput, gender: 'male'})}/>
                <label htmlFor="gender">Female:</label>
                <input id="gender" type="radio" checked={valueInput.gender === "female"}
                       onChange={() => setValueInput({...valueInput, gender: 'female'})}/>
            </div>
            <label htmlFor="imageUrl">Image:</label>
            <input id="imageUrl" required type="text" src={valueInput.imageUrl} onChange={handleInputChange}/>
            <button className="buttonSubmit" type="submit">Add card</button>
        </form>
    )

}