
//? стили
import './Field.css';

function Field({
  className,
  readOnly = false,
  isPlaceholder = true,
  inputName,
  fieldName,
  value,
  handleChange,
  minLength,
  maxLength,
  type,
  required = true,
  children,
  showPass = false }) {

  const placeholder = isPlaceholder ? 'Enter your ' + fieldName.toLowerCase() : ''

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
        className={'field__input ' + className}
        id={fieldName}

        readOnly={readOnly}
        step={1}
        min={10}
        max={null}
      />
      {children}
    </article>
  );
}

export default Field;
