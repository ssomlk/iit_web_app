import { forwardRef, useImperativeHandle } from 'react'
import styles from './slider.module.css';

function Slider(props, ref) {

    // Exposing fucntions to outside this component
    // ao that they cab be called from external events.
    useImperativeHandle(ref, () => ({
        slideLeft() {
            var slider = document.getElementById("carSlider");
            slider.scrollLeft = slider.scrollLeft + 500;
        },
        slideRight() {
            var slider = document.getElementById("carSlider");
            slider.scrollLeft = slider.scrollLeft - 500;
        }
    }), []);

    return (
        <div id="carSlider" className={styles.sliderContainer}>
            <div className={styles.slider}>
                {props.cardInfo.map((data, index) => {
                    return (
                        <div key={index} className={styles.card}>
                            {data}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default forwardRef(Slider)