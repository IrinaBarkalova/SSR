import {
  getProfileParams,
  IProfileStore,
  normalizeProfile,
  ProfileInitialModel,
  ProfileModel,
} from "@mobxStore/ProfileStore/types";
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
type PrivateFields = "_response" | "_meta";

export default class ProfileStore implements IProfileStore, ILocalStore {
  private _meta: Meta = Meta.initial;
  private _response: ProfileModel = ProfileInitialModel();

  constructor() {
    makeObservable<ProfileStore, PrivateFields>(this, {
      _response: observable.ref,
      _meta: observable,
      response: computed,
      meta: computed,
      getProfile: action,
    });
  }

  get response(): ProfileModel {
    return this._response;
  }

  get meta(): Meta {
    return this._meta;
  }

  getProfile = async (params: getProfileParams): Promise<void> => {
    this._meta = Meta.loading;
    const response = await axios({
      method: "get",
      url: `http://localhost:8080/api/${params.role}/profile`,
      headers: { Authorization: `Bearer ${params.token}` },
    });
    runInAction(() => {
      if (response.status === 404) {
        this._meta = Meta.error;
      }
      try {
        this._meta = Meta.success;
        this._response =
          normalizeProfile(response.data) ?? ProfileInitialModel();
        return;
      } catch (e) {
        this._meta = Meta.error;
        this._response = ProfileInitialModel();
      }
    });
  };
  destroy(): void {
    this._response = ProfileInitialModel();
    this._meta = Meta.initial;
  }
}
