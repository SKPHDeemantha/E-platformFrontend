import { useState } from "react"
import UploadMeadiaToSupabase from "../utils/MediaUpload";

export default function FileUploardTest(){

    const [file,SetFile] =useState(null)

 async  function handleUpload(){
          UploadMeadiaToSupabase(file).then((url)=>{
            console.log(url)
          }).catch((err)=>{
            console.log(err)
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