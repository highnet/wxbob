import BaseExtension from "wehub";

export default class Wxbob extends BaseExtension {
  activate() {
    console.log("Activated ", this.extensionName);
    this.addEventListener("helloBob", this.receiveHello);
  }
  receiveHello() {
    console.log("Bob received a hello");
  }
}
