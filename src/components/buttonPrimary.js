import './buttonPrimary.css';

const ButtonPrimary = (props) => {
    return (
        <div onClick={() => props.abc.abc()} className="button">
            <span className="buttonText">{props.text}</span>
        </div>
    );
};

export default ButtonPrimary;
