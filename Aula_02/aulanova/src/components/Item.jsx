import PropTypes from 'prop-types'

function Item({marca, lançamentoano}){
    return(
        <>
            <li>{marca} - {lançamentoano}</li>
        </>
    )
}
Item.propTypes = { // "propTypes" com "p" minúsculo
    marca: PropTypes.string.isRequired,  //  Valida que 'marca' deve ser string e obrigatória
    lançamentoAno: PropTypes.number.isRequired //  Valida que 'lançamentoAno' deve ser número e obrigatório
};

Item.defaultProps = { 
    marca: 'Marca inexistente',
    lançamentoAno: 0
};

export default Item