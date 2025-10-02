
export default function SelectRol({value, onChange}){
    return(
        <select 
            value={value} 
            onChange={onChange}
            >
                <option value="">Elige el rol del personaje</option>
                <option value="top">top</option>
                <option value="mid">mid</option>
                <option value="jg">jg</option>
                <option value="adc">adc</option>
                <option value="supp">supp</option>
        </select>
    )
}
