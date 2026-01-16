import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por <a href="https://github.com/GabrielBaldini1998" target="_blank" rel="noopener noreferrer">Gabriel Baldini.</a>
            </p>
        </section>
    </footer>)
}

export default Rodape