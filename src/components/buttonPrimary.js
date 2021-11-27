import './buttonPrimary.css';

const ButtonPrimary = (props) => {
    return (
        <div className="button">
            <span className="buttonText">{props.text}</span>
        </div>
    );
};

export default ButtonPrimary;
