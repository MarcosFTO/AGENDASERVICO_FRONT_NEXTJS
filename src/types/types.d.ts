interface Login {
  email: string;
  senha: string;
}
interface TokenResponse {
  token: string;
  email: string;
};
interface TokenDecode{
  id: string;
  iat: number;
}

