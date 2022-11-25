import {Component} from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.png';
import FileUploader from "./fileUploader/FileUpload.component";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logoUrl} alt="Dish"/>
                <div className="fileUploader">
                    <FileUploader/>
                </div>
            </div>
        )
    }
}

export default Header;
