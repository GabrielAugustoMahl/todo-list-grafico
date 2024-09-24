import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export class Api {
    constructor(db: Firestore, auth:Auth){
        console.log('Construindo API!')
    }
} 