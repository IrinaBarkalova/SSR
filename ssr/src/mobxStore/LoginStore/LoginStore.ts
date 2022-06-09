import React from "react";

import {
  GetTokenParams,
  ILoginStore,
  normalizeUserLoginRespModel,
  UserLoginRespModel,
} from "@mobxStore/LoginStore/types";
import { ILocalStore } from "@mobxStore/useLocalStore";
import { Meta } from "@utils/meta";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
type PrivateFields = "_response" | "_meta" | "_login" | "_password";

export default class LoginStore implements ILoginStore, ILocalStore {
  private _meta: Meta = Meta.initial;
  private _login: string = "";
  private _password: string = "";
  private _response: UserLoginRespModel = { email: "", role: "", token: "" };

  constructor() {
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    makeObservable<LoginStore, PrivateFields>(this, {
      _response: observable.ref,
      _meta: observable,
      _login: observable,
      _password: observable,
      response: computed,
      meta: computed,
      login: computed,
      password: computed,
      handleChangeLogin: action,
      handleChangePassword: action,
      getToken: action,
    });
  }

  get response(): UserLoginRespModel {
    return this._response;
  }

  get meta(): Meta {
    return this._meta;
  }

  get login(): string {
    return this._login;
  }
  get password(): string {
    return this._password;
  }

  handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
    this._login = event.target.value;
  }

  handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this._password = event.target.value;
  }

  getToken = async (params: GetTokenParams): Promise<void> => {
    let formData = new FormData();
    formData.append("username", params.login);
    formData.append("password", params.password);
    this._meta = Meta.loading;
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/auth/login",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    runInAction(() => {
      if (response.status === 404) {
        this._meta = Meta.error;
      }
      try {
        this._meta = Meta.success;
        this._response = normalizeUserLoginRespModel(response.data) ?? {
          email: "",
          role: "",
          token: "",
        };
        return;
      } catch (e) {
        this._meta = Meta.error;
        this._response = { email: "", role: "", token: "" };
      }
    });
  };
  destroy(): void {
    this._response = { email: "", role: "", token: "" };
    this._meta = Meta.initial;
    this._login = "";
    this._password = "";
  }
}
