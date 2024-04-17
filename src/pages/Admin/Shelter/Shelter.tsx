import { Button } from "../../../components/common/Button";
import { Sidebar } from "../../../components/common/Sidebar";
import styles from "./Shelter.module.css";

export function Shelter() {
  return (
    <>
      <Sidebar></Sidebar>
    <div className={styles.container}>
      <form action="" method="put">
        <label htmlFor="">Whatsapp</label>
        <input type="text" name="whatsApp" id="" />
      </form>
      <Button>Salvar alteração</Button>
    </div>
    </>
  );
}
