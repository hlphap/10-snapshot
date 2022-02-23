import "./Header.css";
import Form from "./../Form/Form";
import Navigation from "./../Navigation/Navigation";

export default function Header() {
    return (
        <>
            <div className="header">
                <h1 className="header__heading">SnapShot</h1>
                <Form />
                <Navigation />
            </div>
        </>
    );
}
