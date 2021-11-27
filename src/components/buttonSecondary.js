import './buttonSecondary.css';

const ButtonSecondary = (props) => {
    return (
        <div className="buttonSec">
            <span className="buttonTextSec">{props.text}</span>
        </div>
    );
};

export default ButtonSecondary;
