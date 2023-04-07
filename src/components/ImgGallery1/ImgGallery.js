import React, {useState} from "react";
import "./ImgGallery.css"
/*poze din stadiul de constructie*/
const images = [
    "./img/constructie1.jpg",
    "./img/constructie2.jpg",
    "./img/constructie3.jpg",
    "./img/constructie4.jpg",
    
]

export const  ImgGallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) => {
        setData({img, i})
    }
    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1})

            if(i === images.length - 1) {
                setData({img: images[0], i: 0})
            }
        }
        else if(action === 'prev-img') {
            setData({img: images[i - 1], i: i - 1})
            
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
            {images.map((element, i) => (
                            <img
                                key={i}
                                src={element}
                                className ="imagine-ImgGallery-afara"
                                alt=""
                                onClick={() => viewImage(element, i)}
                            />
                        ))}
        </div>
        </>
    )
}