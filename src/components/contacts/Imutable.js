export default class Imutable {
  constructor() {
    this.obj = null;
  }

  list(obj) {
    if (Object.entries(obj).length > 0) {
      const result = [];

      for (let i = Object.entries(obj).length - 1; i >= 0; i -= 1) {
        result.push(obj[i]);
      }

      this.obj = result;
      return this;
    }

    this.obj = obj;
    return this;
  }

  push(obj) {
    this.obj = this.obj.concat(obj);
    return this;
  }

  delete(id) {
    this.obj = this.obj.filter((contact) => contact.id !== id);
    return this;
  }

  update(user) {
    const uptade = this.obj;
    uptade[this.obj.findIndex(
      (contact) => contact.id === user.id
    )] = user;
    this.obj = uptade;
    return this;
  }

  toJS() {
    return this.obj;
  }
}
