import axios from "axios";

export default class MusicService {
  _proxy = 'https://thingproxy.freeboard.io/fetch';
  _apiBase = 'https://api.deezer.com';
  _url = `${this._proxy}/${this._apiBase}`;

  async getResource() {
    try {
      const { data } = await axios.get(`${this._url}/chart/0/tracks`);
      return data.data;

    } catch (error) {
      console.log(error);
    }
  }

  async searchMusic (query='') {
    try {
      const { data } = await axios.get(`${this._url}/search?q=${query}`);
      return data.data;

    } catch (error) {
      console.log(error)
    }
  }
}