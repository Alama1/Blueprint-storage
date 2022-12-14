import axios from 'axios';

import React,{Component} from 'react';
import './FileUpload.css'

class FileUploader extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
        axios.post("http://localhost:3001/api/uploadfile", formData, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    };

    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>

                    <p>File Type: {this.state.selectedFile.type}</p>
                </div>
            );
        } else {
            return
        }
    };

    render() {

        return (
            <div>
                <div>
                    <h3 className="headerText">Upload blueprint</h3>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default FileUploader;
