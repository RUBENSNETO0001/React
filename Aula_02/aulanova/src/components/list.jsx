import Item from "./Item"

function List(){
    return(
        <>
            <p>Lista de marcas</p>
            <ul>
                <Item marca="ferrari" lançamentoano={1920}/>
                <Item />
            </ul>
        </>
    )
}
export default List