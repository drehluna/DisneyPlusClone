import React from 'react';
import styles from '../../../styles/Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <img src="images/logo.svg"></img>

            <a><img src="images/home-icon.svg" /> INÍCIO </a>
            <a><img src="images/search-icon.svg" /> PESQUISA </a>
            <a><img src="images/watchlist-icon.svg" /> MINHA LISTA </a>
            <a><img src="images/original-icon.svg" /> ORIGINAIS </a>
            <a><img src="images/movie-icon.svg" /> FILMES </a>
            <a><img src="images/series-icon.svg" /> SÉRIES </a>
            <div className={styles.perfil}>
                <a>
                    andre
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0F665F34D7546E6636ED13674CFAA6EB77C756F13A64CD25C28DF9AEFCF98E88/scale?width=96&format=png"></img>
                </a>
            </div>
        </div>
    );
}

export default Header;