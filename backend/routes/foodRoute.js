import express from "express";
import { addFood, listFood , removeFood} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter=express.Router();

//Img storage Enginee

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
              return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

// image file is not now uploaded because thunder climet is want a paid user to use img file 
//so for now we postpons the all code realted to file send from thunder client.

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;


//updated from chatgpt use it when use it on postman
// import express from "express";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import fs from "fs";
// import path from "path";

// const foodRouter = express.Router();

// // Ensure 'uploads' folder exists
// const uploadsDir = path.resolve("uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true }`${Date.now()}${file.originalname}`);
// }

// // POST route for adding food (now using image URL)
// foodRouter.post("/add", addFood);
// foodRouter.get("/list",listFood)
// foodRouter.post("/remove",removeFood)


//export default foodRouter;

