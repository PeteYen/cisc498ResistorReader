import '@aws-amplify/ui-react/styles.css';
import {Authenticator} from "@aws-amplify/ui-react";

const History = () => {
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
export default History;