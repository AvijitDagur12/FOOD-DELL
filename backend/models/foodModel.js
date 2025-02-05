import mongoose from "mongoose";


const foodSchema=new mongoose.Schema({
        name:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:Number,required:true},
        image:{type:String,required:true},
        category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
export default foodModel;

//chatgpt updated now deactive it when run on the postman only then active it
// import mongoose from "mongoose";

// const foodSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },  // Storing the image filename in the database
//   category: { type: String, required: true },
// });

// const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

// export default foodModel;
