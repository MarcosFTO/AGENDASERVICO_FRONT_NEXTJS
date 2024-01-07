import * as React from "react";
import styles from "./styles.module.css";
import { userService } from "@/modules/user/service";
import UserAvatar from "../user_avatar";
import { useRouter } from "next/router";
export default function UserInfo() {

  const [userInfo, setUserInfo] = React.useState<UserType>();
  const router = useRouter();

  const getUserById = React.useCallback(async () => {
    const currenUserId = sessionStorage.getItem("user_id");
    if (currenUserId) {
      const userInf = await userService.findUserById(currenUserId);
      setUserInfo(userInf);
    }
  }, []);

  React.useEffect(() => {
    getUserById();
  }, []);
  const handleLogOut = () => {
    sessionStorage.clear();
    router.push("/login");
  };
  return (
    <div className={styles.containerUserInfo}>
      <UserAvatar photo={userInfo?.foto}/>
      <p className={styles.nome}>
        {userInfo && userInfo.nome ? userInfo.nome : ""}
      </p>
      <p className={styles.email}>
        {userInfo && userInfo.email ? userInfo.email : ""}
      </p>
      <p className={styles.sair} onClick={handleLogOut}>
        Sair
        </p>
    </div>
  );
}
