import { useEffect } from "react";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css";
import { Skeleton } from "../../components/common/Skeleton";
import { PetFiter } from "../../components/common/PetFilter";


export function Pets() {
  useEffect(() => {}, []);
  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        <main className={styles.list}>
          <PetFiter className={styles.filters}/>             

        </main>
        <Skeleton count={10} containerClassName={styles.skeleton} />
      </div>
    </Grid>
  );
}
