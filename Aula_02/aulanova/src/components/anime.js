// function anime(props) {
//     return (
//         <div>
//             <img src={props.foto} alt={props.nome} height= "150px" />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
// };
// export default anime

function anime({nome, foto, idade, profissao}) {
    return (
        <div>
            <img src={foto} alt={nome} height= "150px" />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
};
export default anime