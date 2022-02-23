import "./Gallery.css";
import { useEffect, useState } from "react";

function Gallery({ data }) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const newData = data.map((img) => {
            return {
                ...img,
                url: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`,
            };
        });
        setImages(newData);
    }, [data]);
    return (
        <div className="gallery">
            <div className="grid">
                <div className="grid__row">
                    {images.map((image) => (
                        <img
                            className="gallery__img grid__col-2"
                            key={image.id}
                            src={image.url}
                            alt={image.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
