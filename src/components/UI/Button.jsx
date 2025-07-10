

const Button = (props)=>{
    return (
<button className={`${props.className} p-3 w-full rounded-md text-lg font-bold items-center`}> {props.children}</button>
    );
}
 export default Button;