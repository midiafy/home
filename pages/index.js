import "../styles.scss";
import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
      <title>Midiafy | Economize dinheiro com agências e freelancers</title>
    </Head>
    <body>
      <section className="hero is-success is-fullheight">
        <div className="hero-head">
          <header className="navbar is-spaced">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="static/logo.png" />
                </a>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroC"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">início</a>
                  <a className="navbar-item">a midiafy</a>
                  <a className="navbar-item">recursos</a>
                  <a className="navbar-item">preços</a>
                  <span className="navbar-item">
                    <a className="button is-success is-inverted is-outlined">
                      <span className="icon">
                        <i className="fas fa-sign-in-alt" />
                      </span>
                      <span>Login</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <h1 className="title is-size-1">
                  manter as redes sociais da sua empresa nunca foi tão fácil
                </h1>
                <h2 className="subtitle">
                  selecione o seu ramo abaixo para publicar GRATUITAMENTE um
                  post PERSONALIZADO na sua página do Facebook. é grátis, fácil
                  e sem anúncios.
                </h2>
                <div className="field is-grouped">
                  <div className="control is-expanded">
                    <input
                      className="input is-large"
                      type="text"
                      placeholder="consultório odontológico"
                    />
                  </div>
                  <div className="control">
                    <a className="button is-info is-large">avançar</a>
                  </div>
                </div>
              </div>
              <div className="column has-text-right">
                <img
                  src="static/dentist.png"
                  style={{
                    height: "90%",
                    width: "90%",
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </div>
);

export default Home;
