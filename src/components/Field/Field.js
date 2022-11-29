
import './Field.css';

function Field({ inputName, fieldName, value, handleChange, minLength, maxLength, type, required = true, children, showPass = false }) {

  const placeholder = 'Enter your ' + fieldName.toLowerCase()

  return (
    <article className="field">
      {/* name input */}
      <h2 className='field__name'>
        {fieldName}
      </h2>

      {/* input */}
      <input
        value={value || ''}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        name={inputName}
        type={showPass ? 'text' : type}
        required={required}
        placeholder={placeholder}
        className='field__input'
        id={fieldName}
      />
      {children}
    </article>
  );
}

export default Field;
