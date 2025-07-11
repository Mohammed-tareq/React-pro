const Button = (props) => {
    const width = props.width ? props.width : "w-full";
    return (
        <button
            className={`${props.className} ${width} rounded-lg text-white px-3 py-3 duration-200 font-medium`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};
export default Button;
