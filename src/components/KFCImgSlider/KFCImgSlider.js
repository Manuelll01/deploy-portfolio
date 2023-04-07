import React, { useMemo, Children } from "react";
import styles from './KFCImgSlider.css'


export const KFCImgSlider = ({children}) => {
    const slides = useMemo(() => {
        if(children.length > 1) {
            let items = Children.map(children, (child, index) => 
                <li key={index} className={styles.slide}>
                    {child}
                </li>
            )

            return[
                <li key={children.length + 1} className={styles.slide}>
                    {children[children.length - 1]}
                </li>,
                ...items,
                <li key={children.length + 2} className={styles.slide}>
                    {children[0]}
                </li>,
                
            ]
        }

        return <li className={styles.slide}>{children[0]}</li>
    }, [children]);
    return(
        <div className={styles.Root}>
            <ul className={styles.Container}>
                {slides}
            </ul>
        </div>
    )
}