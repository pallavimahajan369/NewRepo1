import { Server } from "socket.io";
// import  Connection  from './database/db.js';
// import { connection } from 'mongoose';
// import { getDocument,updateDocument } from "./controller/document-controller.js";


const PORT=9000;



const io=new Server(PORT,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST']
    }
});
io.on("connection", socket=>{

    socket.on("send-changes",delta=>{
        socket.broadcast.emit('receive-changes', delta);
        // console.log(delta);
    })

    // socket.on('save-document', async data =>{
    //     await updateDocument(documentId,data)
    // })
})




// });
