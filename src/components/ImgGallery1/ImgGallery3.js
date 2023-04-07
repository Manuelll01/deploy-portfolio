import React, {useState} from "react";
import "./ImgGallery.css"
/*interior*/
const images = [
    "./img/apartament_interior1b.jpg",
    "./img/apartament_interior2b.jpg",
    "./img/apartament_interior3b.jpg",
    "./img/apartament_interior4b.jpg",
    "./img/apartament_interior5b.jpg",
    "./img/apartament_interior6b.jpg",
    "./img/apartament_interior7b.jpg",
    "./img/apartament_interior8b.jpg",
    "./img/apartament_interior9b.jpg",
    "./img/apartament_interior10b.jpg",
    "./img/apartament_interior11b.jpg",
    "./img/apartament_interior12b.jpg",
    "./img/apartament_interior13b.jpg",
]

export const  ImgGallery3 = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) => {
        setData({img, i})
    }
    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1})
            console.log(i)
            console.log(images.length)
            if(i === images.length - 1) {
                setData({img: images[0], i: 0})
            }
        }
        else if(action === 'prev-img') {
            setData({img: images[i - 1], i: i - 1})
            console.log(i)
            console.log(images.length)
            if(i === 0) {
                setData({img: images[images.length - 1], i: images.length - 1})
            }
        }
        
        else if(!action){
            setData({img: '', i: 0});
        }
    }
    return(
        <>
        {data.img && /* daca data.img are ceva atunci da return true si se randeaza acest element, daca nu are nimica nu se randeaza */
            <div  className="unu">
                <div onClick={() => imgAction()} className="background-ImgGallery" >

                </div>
                
                    <button onClick={() => imgAction()} className="buton-x-ImgGallery"><i class="fa-solid fa-x"></i></button>
                    <button className="prev-btn-ImgGallery" onClick={() => imgAction('prev-img')}><i class="fa-sharp fa-solid fa-arrow-left-long"></i></button>
                    <img src={data.img} className="imagine-ImgGallery"></img>
                    <button className="next-btn-ImgGallery" onClick={() => imgAction('next-img')}><i class="fa-solid fa-arrow-right-long"></i></button>
                
                
            </div>
        }


        <div className="ImgGallery-container">
            {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                className ="imagine-ImgGallery-afara"
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
        </div>
        </>
    )
}