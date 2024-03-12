import User from '../models/User.js'


export const createUser = async (req,res) => {
    const newTour = new User(req.body)
    try {
        const savedUser = await newTour.save()

        res.status(200).json({success:true, message:'Successfully created', data:savedTour})
    } catch (err){
        res.status(500).json({success:false, message:'Failed to created. Try again'})
    }
}


// update tour

export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
         const updatedUser = await Tour.findByIdAndUpdate(id, {
            $set:req.body
         }, {new:true})

         res.status(200).json({
            success:true,
            message: "Successfully updated",
            data: updatedUser
         })
    } catch (err) {
        res.status(500).json({
            success:false,
            message: "failed to update"
            
         })
    }
};


// delete tour 
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id, {
            $set:req.body
         }, {new:true})

         res.status(200).json({
            success:true,
            message: "Successfully deleted"
            
         })
    } catch (err) {
        res.status(500).json({
            success:false,
            message: "failed to delete"
            
         })
    }
};

// get Single tour 

export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
       const user = await User.findById(id);
           

         res.status(200).json({
            success:true,
            message: "Successfully found",
            data: user
         })
    } catch (err) {
        res.status(404).json({
            success:false,
            message: "not found"
            
         })
    }
};

// Get All tour 

export const getAllUser = async (req, res) => {

    const page = parseInt(req.query.page);

    try {
      
        const users = await User.find({}).skip(page * 8).limit(8);

        res.status(200).json({success: true,
            message:"Succeesful",
            data: users,
        
        });


    } catch (err) {
       res.status(404).json({
        success: false,
        message: "not found",
       });
    }
};