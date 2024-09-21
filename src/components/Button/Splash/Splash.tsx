import { useEffect, useState } from "react"
import styles from "./Splash.module.css"

export default function Splash() {

    const [isAnimate, setIsAnimate] = useState<boolean>(false)
    useEffect(() => {
        if(isAnimate){
            setTimeout(() => {
                setIsAnimate(false)
            },600)
        }
    },[isAnimate])

    return (
        <div
            className={`${styles.btn} ${isAnimate ? styles.animate : ""}`}
            onClick={() => setIsAnimate(true)}
        >Button</div>
    )
}
