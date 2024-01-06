import * as React from 'react';
import styles from "./styles.module.css"
import UserAvatar from '../user_avatar';
export default function UserInfo(){

    const [userInfo, setUserInfo] = React.useState<UserType>();
    const getUserById = React.useCallback(async ()=>{
        const currenUserId = sessionStorage.getItem("user_id");
        if(currenUserId){
            
        }
    },[])
    return(
        <div className={styles.containerUserInfo}>
            <UserAvatar />
            <p className={styles.nome}>nome</p>
            <p className={styles.email}>email</p>
            <p className={styles.sair}>Sair</p>
        </div>
    );
}