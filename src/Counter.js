import { useState } from "react"
import styles from './Counter.module.css'

function Counter({...props}){

    const limitValue = props.limitValue;
    const maxValue = props.maxValue;
    const minValue = props.minValue;
    
    const [counter, setCounter] = useState(0)
    const [isOver5, setIsOver5] = useState(false)

    const isOver5Setter = (actualCounter) => {
        if (actualCounter > limitValue){
            setIsOver5(true)
        }
        else {
            setIsOver5(false)
        }
    }
    const Increment = () => {
        const newValue = counter + 1;
        setCounter(newValue)
        isOver5Setter(newValue)
    }
    const Decrement = () => {
        const newValue = counter - 1;
        setCounter(newValue)
        isOver5Setter(newValue)
        
    }


    return (
        <>
        <p>
            {counter}
        </p>
        <div className={styles.buttonContainer}>
        <button disabled={counter >= maxValue} onClick={Increment}>
            Increment Counter
        </button>

        <button disabled={counter <= minValue} onClick={Decrement}>
            Decrement Counter
        </button>
        </div>
        
        
        {
            counter !== Number(limitValue) &&
            <>
            {isOver5 ? <p>
                Mon Compteur est supérieur de {limitValue} et sa valeur est {counter}
            </p> : <p>Mon Compteur est inférieur à {limitValue}</p>}
            </>
        }

        {/* <p>
            { counter < 5 ? <strong> Le compteur est en dessous de 5 </strong> : <strong> Le compteur est au dessus de 5 </strong>}
        </p> */}

        
        </>
    )

}

export default Counter