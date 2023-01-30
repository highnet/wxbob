import BaseExtension from "wehub";

export default class Wxbob extends BaseExtension {
    activate() {
        console.log("Activated ", this.extensionName);
    }
}