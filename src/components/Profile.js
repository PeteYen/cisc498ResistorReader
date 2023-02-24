import './Profile.scss'
import {Link} from "react-router-dom";

const Profile = () => {

    return (
        <>
        <div className="profileContainer">
                <div className="wide-cardHeader">
                    <h2>Personal Information</h2>
                    <span className="wide-card__header__action">
                    </span>
                    <br/>

                <div className="wide-card__body">
                    <div className="user-info">
                        <p><strong>user name：</strong> oliver</p>
                        <p><strong>password：</strong>*******</p>

                        <p><strong>email:</strong> 12345@gmail.com</p>
                    </div>
                </div>
                    </div>
            <div className="BtnContainer">
                <button><Link to="/History"
                className='history'
                >History</Link></button>
                <button>Edit information</button>
            </div>
        </div>
        </>
    )
}

export default Profile