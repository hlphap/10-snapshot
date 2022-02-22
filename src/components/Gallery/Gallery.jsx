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
        <div>
            {images.map((image) => (
                <img key={image.id} src={image.url} alt={image.title} />
            ))}
        </div>
    );
}

export default Gallery;
