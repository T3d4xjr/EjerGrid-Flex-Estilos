import Image from "next/image";
import styles from "./page.module.css";
import "@/app/styles/global.css";
export default function Home() {
  return (
    <div>
      <header>
        <img className="logo" src="logoEldenRing.png"></img>
        <nav className="menu">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="grid-container">
          <img className="griditem1" src="maliketh.jpg"></img>
          <img className="griditem2" src="godrick.jpg"></img>
          <img className="griditem3" src="malenia.jpg"></img>
          <img className="griditem4" src="radahn.jpg"></img>
          <img className="griditem5" src="radagon.jpg"></img>
        </section>
      </main>

      <footer>
        <p>© 2025 Mi Sitio Web</p>
      </footer>
    </div>
  );
}
