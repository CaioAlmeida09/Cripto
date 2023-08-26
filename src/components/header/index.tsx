import {
  House,
  ChatCircleDots,
  BellSimpleRinging,
  Briefcase,
  MagnifyingGlass,
  SignOut,
} from "@phosphor-icons/react";

import perfil from "../../assets/teste1.jpg";
import { useState } from "react";
import Rectangle from "../../assets/Rectangle.png";

import styles from "./header.module.css";

export function Header() {
  function Teste() {
    setSearch((search) => search + 1);
  }
  function BackMenu() {
    setSearch(1);
  }
  function testeInicio() {
    setNot(false);
    setMsg(false);
    setVaga(false);
    setInicio(true);
  }
  function testeVaga() {
    setNot(false);
    setMsg(false);
    setVaga(true);
    setInicio(false);
  }
  function testeMsg() {
    setNot(false);
    setMsg(true);
    setVaga(false);
    setInicio(false);
  }
  function testeNot() {
    setNot(true);
    setMsg(false);
    setVaga(false);
    setInicio(false);
  }

  function ChamarPerfil() {
    setUsuario(usuario + 1);
  }

  const [search, setSearch] = useState(1);
  const [inicio, setInicio] = useState(false);
  const [vaga, setVaga] = useState(false);
  const [msg, setMsg] = useState(false);
  const [not, setNot] = useState(false);

  const [usuario, setUsuario] = useState(0);
  return (
    <>
      <header className={styles.container}>
        <section className={styles.inicio}>
          <h2>Logo</h2>
        </section>
        {search % 2 !== 0 ? (
          <section className={styles.centro}>
            <div className={styles.DivInicio}>
              <p onClick={testeInicio}>
                <House size={32} /> Início
              </p>
              {inicio === true ? (
                <div className={styles.azul}></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={styles.DivCentro}>
              <p onClick={testeVaga}>
                <Briefcase size={32} /> Vagas
              </p>
              {vaga === true ? (
                <div className={styles.azul}></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={styles.DivCentro}>
              <p onClick={testeMsg}>
                <ChatCircleDots size={32} /> Mensagens
              </p>
              {msg === true ? (
                <div className={styles.azulzin}></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={styles.DivCentro}>
              <p onClick={testeNot}>
                <BellSimpleRinging size={32} /> Notificações
              </p>
              {not === true ? (
                <div className={styles.azulzin}></div>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        ) : (
          <div> </div>
        )}

        <section className={styles.right}>
          {search % 2 === 0 ? (
            <>
              <p onClick={BackMenu}>
                {" "}
                <MagnifyingGlass size={32} />{" "}
              </p>
              <input
                className={styles.input}
                placeholder="Procure algo na nossa rede "
              />
            </>
          ) : (
            <p onClick={Teste}>
              <MagnifyingGlass size={32} />
            </p>
          )}

          <p>
            <SignOut size={32} />
          </p>
          <img
            onClick={ChamarPerfil}
            className={styles.buttonPerfil}
            src={perfil}
          />
        </section>
      </header>
      <main className={styles.body}>
        {usuario % 2 === 0 ? (
          <div> </div>
        ) : (
          <div className={styles.usuario}>
            <img src={Rectangle} />
            <section>
              <img className={styles.ImgPerfil} src={perfil} />
              <h2>Caio Vinicius</h2>
              <h4>Ui Designer</h4>
              <button> Ver Perfil </button>
            </section>
          </div>
        )}
      </main>
    </>
  );
}
