import { apiKey } from "./../apis/config";
import axios from "axios";
import { useState, createContext } from "react";

export const PhotoContext = createContext();

function PhotoContextProvider({ children }) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = (query) => {
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
            )
            .then((res) => {
                setImages(res.data.photos.photo);
                setLoading(false);
            })
            .catch((error) => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    };

    return (
        <PhotoContext.Provider value={{ images, loading, runSearch }}>
            {children}
        </PhotoContext.Provider>
    );
}

export default PhotoContextProvider;
