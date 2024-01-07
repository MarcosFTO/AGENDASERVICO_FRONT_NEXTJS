import * as React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/button";
import { authService } from "@/modules/auth/service";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

enum KeyPressed{
  Enter = 'Enter'
}

export default function Login() {
  const [email, setEmail] = React.useState<string>("");
  const [senha, setPassword] = React.useState<string>("");
  const router = useRouter();

  const gettingValueEmail = (str: string) => {
    setEmail(str);
  };
  const gettingValuePassword = (str: string) => {
    setPassword(str);
  };
  // execulta toda vez que a pagina é carregada porque não tem dependecia []
  React.useEffect(() => {
    const loggedInfo = sessionStorage.getItem("loggedin");
    if (loggedInfo === "true") {
      router.push("/dashboard");
    }
  }, []);

  const loginFunc = React.useCallback(async () => {
    const loginInfo = await authService.Login({ email: email, senha: senha });
    if (loginInfo) {
      const decodingToken: TokenDecode = jwtDecode(loginInfo.token);
      sessionStorage.setItem("loggedin", "true");
      sessionStorage.setItem("email", loginInfo.email);
      sessionStorage.setItem("token", loginInfo.token);
      sessionStorage.setItem("user_id", decodingToken.id);
      router.push("/dashboard");
    }
  }, [email, senha]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerLogin}>
        <div className={styles.containerLogoTitle}>
          <Image
            src={"/logo-services.jpg"}
            alt="logo login"
            width={70}
            height={70}
          />
          <h1 className={styles.titleService}>Services</h1>
        </div>
        <div className={styles.containerInputs} onKeyDown={(key)=>{
          key.stopPropagation();
          if(key.code === KeyPressed.Enter){
            loginFunc();
          }
        }}>
          <Input
            label="Email"
            value={email}
            onchange={gettingValueEmail}
            alt={"Input Email"}
            width={450}
            placeholder="ex: marcos@gmail.com"
            labelWeight={700}
          />
          <Input
            label="Senha"
            value={senha}
            onchange={gettingValuePassword}
            alt={"Input password"}
            width={450}
            type="password"
            customStyle={{ marginTop: "2rem" }}
            labelWeight={700}
          />
        </div>
        <div className={styles.containerBtnForgetPass}>
          <Button
            onClick={loginFunc}
            backgroundColor="#081225"
            padding={[13, 75, 13, 75]}
            borderRadius
            color="#B5C2CA"
            fontSize={19}
            fontWeight={500}
          >
            Fazer Login
          </Button>
          <p className={styles.forgetPass}>Esqueceu sua Senha?</p>
        </div>
      </div>
    </div>
  );
}
