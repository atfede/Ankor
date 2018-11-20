import {ExtratoNfe} from "./ExtratoNfe";

export interface User {
  email: string;
  password: string;
  displayName: string;
  companyName: string;
  certificate: string;
  extratoNfe : ExtratoNfe;
}
