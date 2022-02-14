import { Credentials } from "../../../domain/entitites/Credentials";
import http from "../http";

interface _AuthenticationRepository {
  login(credentials: Credentials): Promise<void>;
  logout(): Promise<void>;
}

class AuthenticationRepository implements _AuthenticationRepository {
  async login(credentials: Credentials): Promise<void> {
    return http.post("/login", credentials);
  }

  async logout(): Promise<void> {
    return http.post("/logout");
  }
}

export const authenticationRepository: _AuthenticationRepository =
  new AuthenticationRepository();
