
export const handelTxt = (txt , max=50)=>{
    if(txt.length > max) return `${txt.slice(0, max)}...`;
    return txt;
}