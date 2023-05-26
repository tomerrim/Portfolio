import { firebaseConfig } from "@/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export class FireBaseApp {
    static fireBaseApp = undefined;
    static db = undefined;

    static init() {
        this.fireBaseApp = initializeApp(firebaseConfig);
        this.db = getFirestore(this.fireBaseApp);
    }
}