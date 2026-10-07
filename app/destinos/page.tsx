import CardDestino from "@/components/CardDestino/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";

export default function Destinos() {
    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Conheça nossos destinos</h1>

            <div className={styles.lista}>
                {destinos.map((destino) => (
                    <CardDestino
                        key={destino.id}
                        destino={destino}
                    />
                ))}
            </div>
        </section>
    );
}