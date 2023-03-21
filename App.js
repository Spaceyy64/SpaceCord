import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDE8utcXsoppcE-l3WFnR_xhA5Vxn_eB4A",
  authDomain: "spacecord-29233.firebaseapp.com",
  projectId: "spacecord-29233",
  storageBucket: "spacecord-29233.appspot.com",
  messagingSenderId: "809086301764",
  appId: "1:809086301764:web:bb1c9d2044e47ec39e6e11"
});

function App() {
    const [user, setUser] = useState(() => auth.currentUser);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateCHanged(user => {
         if (user) {
            setUser(user);
         } else {
            setUser(null);
         }
        if (initializing) {
            setInitializing(false);
        }
        });
        return unsubscribe;
    }, [])

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();

        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    }
};

const signOut = async () => {
    try {
        await firebase.auth().signOut();
    } catch(error) {
        console.log(error.message);
    }
};

if (initializing) return "Loading...";

return(
    <div>
        {user ? (
            'Welcome to Spacecord'
        ) : (
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        )
    }
    </div>
);