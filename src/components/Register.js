import '@aws-amplify/ui-react/styles.css';
import {Authenticator} from "@aws-amplify/ui-react";

const Register = () => {
    return (
        <Authenticator>
            {({signOut}) => (
                <div>
                    <button onClick={signOut}>signOut</button>
                </div>
                )}
        </Authenticator>
    );
};
export default Register;