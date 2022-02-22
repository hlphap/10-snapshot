import { useContext, useEffect } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import Gallery from "./../Gallery/Gallery";

function Container({ search }) {
    const { images, loading, runSearch } = useContext(PhotoContext);

    useEffect(() => {
        runSearch(search);
        // eslint-disable-next-line
    }, [search]);

    return (
        <div>
            <h2>{search} Picture</h2>
            <Gallery data={images} />
        </div>
    );
}

export default Container;
