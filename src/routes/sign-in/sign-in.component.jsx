import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (

        <div>
            <h1>Sign in</h1>
            <button className={"bg-amber-400 p-4"} onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>

    )
}


export default SignIn;
