const Input = ({ name, type, placeHolder, focus, handle, setFocus, data }) => {
  return (
    <label
      className={`input-label ${focus ? "border-primary" : "border-gray"} `}
    >
      <input
        name={name.toLowerCase()}
        id={name.toLowerCase()}
        type={type}
        className="input-wrapper"
        onChange={handle}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div
        className={`block ${!data && !focus ? "have" : " not-have"}
          
        `}
      >
        <div style={focus ? { color: "purple" } : { color: "gray" }}>
          {placeHolder}
        </div>
      </div>
    </label>
  );
};
export default Input;
