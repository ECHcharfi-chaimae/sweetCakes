import React, { useRef, useState } from "react";
import { COLORS } from "../assets/theme";

const UploadFile = ({ data, setData, name }) => {

    const inputFile = useRef(null)
    const [img, setImg] = useState(null);

    const updateValue = (e) => {
        setData({
            ...data,
            [name]: e.target.files[0],
        });

        // setImgUrl(URL.createObjectURL(e.target.files[0]));
        setImg(e.target.files[0]);
    }

    return (
        <div>
            <div className="file-upload">
                <div className="file-upload-select" onClick={() => inputFile.current.click()}>
                    <div className="file-select-button">Choose File</div>
                    <div className="file-select-name">
                        { img !== null ? `${img.name.slice(0,15)}...` : "No file choosen..."}
                    </div>
                    <input
                        type="file"
                        name={name}
                        ref={inputFile}
                        onChange={updateValue}
                        accept="image/png, image/jpeg"
                    />
                </div>
            </div>

            <div
                style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: 25,
                    boxShadow: "3px 5px 8px rgba(0,0,0,0.2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow:"hidden",
                    objectFit:"contain",
                    marginTop: 20,
                }}
            >
                {img !== null ?

                    <img src={URL.createObjectURL(img)} alt={img.name} style={{ width:"100%" }}/>
                    :
                    <i className="fas fa-images" style={{ color: COLORS.purple.primary, fontSize: 100 }}></i>
                }

            </div>
        </div>
    )
}

export default UploadFile;