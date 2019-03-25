import Api from '@/service/Api';

export default {
  register(creds) {
    return Api.post('register', creds);
  }
};
