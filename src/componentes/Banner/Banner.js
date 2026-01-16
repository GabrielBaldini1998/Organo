import './Banner.css';
import { Fragment } from 'react';

export const Banner = () => {
    // JSX
    return (
        <Fragment>
            < header className="banner">
                <img src="/imagens/banner.png" alt="Banner principal da página Organo" />
            </header>
        </Fragment>
    )
}
