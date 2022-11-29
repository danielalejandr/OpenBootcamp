import { LEVELS } from "./levels.enum";

export class FirstTask {
    name = '';
    surname = '';
    connected = false;
    email = LEVELS.EMAIL


    constructor(name, surname, connected, email){
        this.name = name;
        this.surname = surname;
        this.connected = connected;
        this.email = email;
    }
}