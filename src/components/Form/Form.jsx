import "./Form.css";

import { PhotoContext } from "../../context/PhotoContext";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

function Form() {
    const { runSearch } = useContext(PhotoContext);
    const [search, setSearch] = useState("");

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    let history = useHistory();

    return (
        <form
            className="form"
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                history.push(`/search/${search}`);
                runSearch(search);
            }}
        >
            <input
                className="form__input"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleOnChange}
            />
            <button
                className="form__btn-submit"
                type="submit"
                disabled={!search}
            >
                Search
            </button>
        </form>
    );
}

export default Form;
