import { response } from "express";
import foodModel from "../models/foodModel.js";
import fs from 'fs';
import { log } from "console";


//add food item

const addFood=async(req,res)=>{
     
    let image_filename = `${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
   try {
      await food.save();
      res.json({success:true,message:"Food Added"})
   } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
   }

}
//all list food
const listFood = async(req,res)=>{
          try {
            const foods=await foodModel.find({});
            res.json({success:true ,data:foods})
          } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
            
          }
}

// remove food list item

const removeFood= async(req,res)=>{
      try {
             const food=await foodModel.findById(req.body.id);
             fs.unlink(`uploads/${food.image}`,()=>{})
             await foodModel.findByIdAndDelete(req.body.id);
             res.json({success:true,message:"Food Removed"})
      } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
      }
}




export {addFood,listFood,removeFood}


















//chatgpt updated code use it only when use postman---
// import foodModel from "../models/foodModel.js";
// import fs from "fs";
// import path from "path";
// import axios from "axios"; // To download the image from URL

// // Add food item
// const addFood = async (req, res) => {
//   try {
//     // Check if image URL is provided
//     if (req.body.imageUrl) {
//       // Extract the file name from the URL by removing query parameters
//       const imageUrl = req.body.imageUrl;
//       const imageFilename = imageUrl.split('?')[0].split('/').pop(); // Get the file name before query parameters

//       // Download the image
//       const response = await axios({
//         method: 'get',
//         url: imageUrl,
//         responseType: 'stream', // Stream the response to avoid large memory usage
//       });

//       // Ensure 'uploads' folder exists
//       const uploadsDir = path.resolve("uploads");
//       if (!fs.existsSync(uploadsDir)) {
//         fs.mkdirSync(uploadsDir, { recursive: true });
//       }

//       // Create the path where the image will be saved
//       const imagePath = path.join(uploadsDir, imageFilename);
      
//       // Pipe the image stream to the file system
//       response.data.pipe(fs.createWriteStream(imagePath));

//       // Once the image is saved, create a new food item
//       const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: imageFilename, // Store the filename of the image
//       });

//       // Save food item to database
//       await food.save();
//       res.status(201).json({ success: true, message: "Food added successfully", data: food });
//     } else {
//       // If no image URL provided, send an error message
//       res.status(400).json({ success: false, message: "Image URL is required." });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Error adding food item", error: error.message });
//   }
// }

// //all food list
// const listFood=async(req,res)=>{
//         try {
//             const foods=await foodModel.find({});
//             res.json({Success:true,data:foods})
//         } catch (error) {
//              console.log(error);
//              res.json({success:false,message:"Error"})
             
//         }
// }
// //remove food item

// const removeFood=async (req,res)=>{
//         try {
//               const food=await foodModel.findById(req.body.id);
//               fs.unlink(`uploads/${food.image}`,()=>{})

//               await foodModel.findByIdAndDelete(req.body.id);
//               res.json({success:true,message:"food removed"})
//         } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
        
//         }
// }



// export { addFood,listFood,removeFood };
