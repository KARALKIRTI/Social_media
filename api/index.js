import  express  from "express";
//import { parsePath } from "react-router-dom";
const app=express()
import userRoutes from "./route/users.js"
import postRoutes from "./route/posts.js"
import likeRoutes from "./route/likes.js"
import authRoutes from "./route/auth.js"
import commentRoutes from "./route/comments.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import multer from "multer";
import relationshipRoutes from "./route/relationships.js"
//import cookieParser from "cookie-parser";
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null,Date.now() + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file=req.file;
    res.status(200).json(file.filename);
})
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)
app.use("/api/users",userRoutes)
app.use("/api/relationships",relationshipRoutes)
app.listen(8800,()=>{
    console.log("API working")
})