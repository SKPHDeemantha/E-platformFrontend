import { useState } from "react"
import UploadMeadiaToSupabase from "../utils/MediaUpload";
import toast from "react-hot-toast";

export default function FileUploardTest(){

    const [file,SetFile] =useState(null);


 async  function handleUpload(){
          UploadMeadiaToSupabase(file).then((url)=>{
            console.log(url)
            toast.success("Image is uploaded successfully.");
          }).catch((err)=>{
             console.log("oops! coudn't upload image",err)
             toast.error("Please try again");
          })
 }
    return(
        <div>
            <h1>Enter your File</h1>
            <input type="File" onChange={(e)=>{
                SetFile(e.target.files[0])
            }}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}