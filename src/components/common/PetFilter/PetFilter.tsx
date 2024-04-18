import { FormHTMLAttributes } from "react"

interface IPetFilter extends FormHTMLAttributes<HTMLFormElement>{
    
}


export function PetFiter({...rest}:IPetFilter){
    return(

        <form {...rest}>
            <span/>Especie
            <select id="type">
                <option value="*">Todos</option>
                <option value="dog">Cachorro</option>
                <option value="cat">Gato</option>
                <option value="penguin">Pinguim</option>
            </select> 
            <label htmlFor="size">Porte</label>
            <select id="size">
                <option value="*">Todos</option>
                <option value="small">Pequeno</option>
                <option value="medium">Medio</option>
                <option value="big">Grande</option>
            </select>
            <label htmlFor="gender">Sexo</label>
            <select id="gender">
                <option value="*">Todos</option>
                <option value="female">Femea</option>
                <option value="male">Macho</option>
                <option value="attackHelicpter">Helicoptero de ataque</option>
            </select>
        </form>
    )
}