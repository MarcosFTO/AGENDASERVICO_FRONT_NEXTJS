import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../button";
import UserInfo from "./components/user_Info";

type Props = {
  title: string;
};

export default function Sidebar(props: Props) {
  return (
    <div className={styles.containerSidebar}>
      <div>
        <div className={styles.containerLogoTitle}>
          <Image
            src={"/logo-services.jpg"}
            alt="logo login"
            width={40}
            height={40}
          />
          <p className={styles.title}>{props.title}</p>
        </div>
        <div className={styles.containerLinks}>
          <Button
            onClick={() => console.log("redirect")}
            backgroundColor="#081225"
            padding={[8, 75, 8, 75]}
            borderRadius
            color="#B5C2CA"
            fontSize={19}
            fontWeight={500}
          >
            Inicio
          </Button>
          <Button
            onClick={() => console.log("redirect")}
            padding={[8, 75, 8, 75]}
            borderRadius
            color="#081225"
            fontSize={19}
            fontWeight={500}
          >
            Funcionários
          </Button>
          <Button
            onClick={() => console.log("redirect")}
            padding={[8, 75, 8, 75]}
            borderRadius
            color="#081225"
            fontSize={19}
            fontWeight={500}
          >
            Clientes
          </Button>
        </div>
      </div>
      <div className={styles.containerUser}>
        <UserInfo />
      </div>
    </div>
  );
}
