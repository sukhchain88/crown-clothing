import SignUpForm from "../../../sign-up/signup.component"
import SignInForm from "../../sign-in/sign-in.component"

import './authentication.style.scss'

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication