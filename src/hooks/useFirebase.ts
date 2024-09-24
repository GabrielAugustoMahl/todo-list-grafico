import { useContext } from "react";
import { FirebaseContext } from "../context/firebaseContext";

export const useFirebase = () => {
    const contexto = useContext(FirebaseContext)

    if(!contexto){
        throw new Error ('useFirebase só pode ser usado dentro do contexto FirebaseContext')
    }

    return contexto.api
}