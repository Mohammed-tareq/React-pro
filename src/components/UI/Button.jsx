const Button = (props) => {
    return (
        <button
            className={`${props.className} ${props.width} p-3  rounded-md text-lg font-bold items-center`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};
export default Button;
