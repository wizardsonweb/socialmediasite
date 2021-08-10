import Image from "next/image";
import {signIn} from "next-auth/client";

function Login() {
    return (
        <div className="grid display-items-center p-5">
            <Image
            src="https://links.papareact.com/t4i"
            height={300} width={300} objectFit="contain"
            />
            <h1 className="loginbtn" onClick={signIn} >Log in with Facebook</h1>
        </div>
    )
}

export default Login
