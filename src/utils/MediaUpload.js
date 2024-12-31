import { createClient } from "@supabase/supabase-js";


const key =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmF
            zZSIsInJlZiI6Inh2dXhzd3Z4ZHN4emZqdHNkb3JuIiwicm9sZSI6ImFu
            b24iLCJpYXQiOjE3MzUzOTQ2NzIsImV4cCI6MjA1MDk3MDY3Mn0.WBdf
            4BPSGdNVmg2rP6fhwd1tmIoD1qZ8vkRJLX4MLq8`;

 const url= "https://xvuxswvxdsxzfjtsdorn.supabase.co"

export default function UploadMeadiaToSupabase(file){
      
    return new Promise((resolve, reject) => {
        if(file==null){
          reject("file not added");
        }

       const fileName =file.name
        const extension = fileName.split(".")[fileName.split(".").length-1];
        
        const supabase =createClient(url,key);

         const timestamp =new Date().getTime()
         console.log(timestamp +"." + extension)


         supabase.storage.from("images").upload(file.name,file,
         {
            cashControl : "3600",
            upsert : false
         }).then(()=>{
            const publicUrl =supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
            resolve(publicUrl);
         }).catch((err)=>{
            reject(err);
         });
    });
}




// if(file==null){
//                alert("Please put your file");
//                return
//             }
       
//         console.log(file)
    
        
//         if(extension !="jpg" && extension !="png"){
//             alert("Please seleat a jpg or png file")
//             return
//         }
    
        
       
        
