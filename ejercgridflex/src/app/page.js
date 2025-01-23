import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
            <header>
                <img className="logo" src="logoEldenRing.png"></img>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            {/* Sección principal */}
            <main>
                <section className="grid-container">
                    <div className="grid-item item1">Bloque 1</div>
                    <div className="grid-item item2">Bloque 2</div>
                    <div className="grid-item item3">Bloque 3</div>
                    <div className="grid-item item4">Bloque 4</div>
                    <div className="grid-item item5">Bloque 5</div>
                </section>
            </main>

            {/* Pie de página */}
            <footer>
                <p>© 2025 Mi Sitio Web</p>
            </footer>
        </div>
  );
}
