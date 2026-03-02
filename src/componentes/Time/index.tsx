import { Colaborador } from '../Colaborador'
import { ColaboradorProps } from '../Colaborador'
import './Time.css'

interface TimeProps {
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
    colaboradores: ColaboradorProps[];
}

const Time = ({nome, corPrimaria, corSecundaria, colaboradores}: TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => 
                    <Colaborador
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        corDeFundo={corPrimaria} 
                        imagem={colaborador.imagem}
                    /> 
                )}
            </div>
        </section> 
        : ''
    )
}

export default Time