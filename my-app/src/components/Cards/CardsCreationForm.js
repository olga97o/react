import React, {useRef, useState} from "react";
import styles from "./CardsCreationForm.scss"

const CardsCreationForm = (({onSubmit}) => {

    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const imageUrlRef = useRef(null);
    const genderRef = useRef(null);
    const [valueInput, setValueInput] = useState({
        id: Date.now(),
        title: '',
        price: '',
        gender: '',
        imageUrl: ''
    })

    const inputArr = document.getElementsByTagName('input');

    const submit = e => {
        e.preventDefault();
        if (Object.values(valueInput).filter(el => el.length === 0).length === 0) {
            onSubmit(valueInput);
            setValueInput({
                ...valueInput,
                id: Date.now(),
                title: '',
                price: '',
                gender: '',
                imageUrl: ' '
            });
        } else {
            for (let input of inputArr) {
                console.log('input.ref', input.ref);
                console.log('titleRef', titleRef);
                if (input.value.length === 0) {
                    const portal = document.createElement('div');
                    portal.style.width = '200px';
                    portal.style.background = 'red';
                    portal.innerText = "This field is required!";
                    input.focus();
                    input.after(portal);
                }
                /*if (input.value.length === 0) {
                    switch () {
                        case 'titleRef':
                        titleRef.current.focus();
                            break;
                        case 'priceRef':
                           priceRef.current.focus();
                            break;
                        case 'genderRef':
                            genderRef.current.focus();
                            break;
                        case 'imageUrlRef':
                            imageUrlRef.current.focus();
                            break;
                    }
                }*/
            }
        }
    }

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
        <form id="form" style={styles} onSubmit={submit}>
            <h3>You can add your card.</h3>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" value={valueInput.title} onChange={handleInputChange}
                   ref={titleRef}/>
            <label htmlFor="price">Price:</label>
            <input id="price" type="number" value={valueInput.price} onChange={handleInputChange}
                   ref={priceRef}/>
            <div>
                <label htmlFor="gender">Male:</label>
                <input id="gender" type="radio" checked={valueInput.gender === "male"}
                       onChange={() => setValueInput({...valueInput, gender: 'male'})}
                       ref={genderRef}/>
                <label htmlFor="gender">Female:</label>
                <input id="gender" type="radio" checked={valueInput.gender === "female"}
                       onChange={() => setValueInput({...valueInput, gender: 'female'})}/>
            </div>
            <label htmlFor="imageUrl">Image:</label>
            <input id="imageUrl" type="text" src={valueInput.imageUrl} onChange={handleInputChange}
                   ref={imageUrlRef}/>
            <button className="buttonSubmit" type="submit">Add card</button>
        </form>
    )

})

export default CardsCreationForm;