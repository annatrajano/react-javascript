import "./formInput.css";

const FormInput = (props) => {

        return (

            <div className="form-input">
                <label>{props.label}</label>
                <input placeholder={props.placeholder}/>
            </div>
        )

}

export default FormInput;