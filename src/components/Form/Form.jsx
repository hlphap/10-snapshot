import { PhotoContext } from "../../context/PhotoContext";

import { useContext } from "react";

function Form() {
    const { images, loading, runSearch } = useContext(PhotoContext);

    return (
        <form action="">
            <input type="text" placeholder="Search" />
            <button type="submit" onClick={runSearch}>
                Search
            </button>
        </form>
    );
}

export default Form;
