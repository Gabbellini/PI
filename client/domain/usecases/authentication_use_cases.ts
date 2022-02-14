import { Credentials } from "../entitites/Credentials";
import { authenticationRepository } from "../../infraestructure/repository/impl/authentication_repository";

interface _AuthenticationUseCases {
  login(credentials: Credentials): Promise<void>;
  logout(): Promise<void>;
}

class AuthenticationUseCases implements _AuthenticationUseCases {
  async login(credentials: Credentials) {
    return await authenticationRepository.login(credentials);
  }

  async logout() {
    return await authenticationRepository.logout();
  }
}

export const authenticationUseCases: _AuthenticationUseCases =
  new AuthenticationUseCases();
