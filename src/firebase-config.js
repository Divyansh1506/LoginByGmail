import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "Your Api Key",           // Replace 
  authDomain: "Your Auth Domain",   // Replace
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, provider };
