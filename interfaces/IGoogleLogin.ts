interface IGoogleLogin {
  authentication: Authentication;
  error?: any;
  errorCode?: any;
  params: Params;
  type: string;
  url: string;
}

interface Params {
  access_token: string;
  authuser: string;
  code: string;
  hd: string;
  id_token: string;
  prompt: string;
  scope: string;
  state: string;
}

interface Authentication {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  issuedAt: number;
  refreshToken: string;
  scope: string;
  state: undefined;
  tokenType: string;
}
