import './Button.css';

const Button = ({ type, icon, children, width, onClick, padding }) => {
  return (
    <button
      id="globalBtn"
      type={type}
      style={{ width: width, padding: padding }}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
