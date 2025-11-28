const RestrauntModel = require('../models/restrauntmodel');

const createRestraunt = async (req, res) => {
  try{
    const {name,imageurl,food,time,pickup,delivery,isopen,logourl,rating,ratingcount,code,coords} = req.body;
    if(!name ||!coords){
        return res.status(400).json({message:"Please Provide Name & Address"});

    }
    const newRestraunt =new RestrauntModel({
        name,
        imageurl,
        food,
        time,
        pickup,
        delivery,
        isopen,
        logourl,
        rating,
        ratingcount,
        code,
        coords
        
    });
    await newRestraunt.save();
    res.status(201).json({message:"Restraunt Created Successfully"});

  }
    catch(err){
        console.log(err);   
        res.status(500).send("Server Error in Restraunt Creation");
    }
};

const getRestraunt = async (req, res) => {
try{
  const restraunts = await RestrauntModel.find({});
  if (!restraunts) {
    return res.status(404).send("No Restraunts Available")
  }
  res.status(200).json({ totalCounts: restraunts.length, restraunts });

}catch(err){
  console.log(err);
  res.status(500).send("Server Error in Getting Restraunts").error;
}

};

const getRestrauntById = async (req, res) => {
  try{
    const restrauntid = req.params.id;
    if(!restrauntid){
      return res.status(400).send("Please Provide Restraunt ID");
    }
    const restraunt = await RestrauntModel.findById(restrauntid);
    if(!restraunt){
      return res.status(404).send("Restraunt Not Found");
    }
    res.status(200).json(restraunt);

  }
  catch(err){
    console.log(err);
    res.status(500).send("Server Error in Getting Restraunt by ID");    
  }
};


const deleteRestraunt = async (req, res) => {
  try{
    const restrauntid = req.params.id;
    if(!restrauntid){
      return res.status(400).send("No Restraunt Found Or Provide ID");
    }
     await RestrauntModel.findByIdAndDelete(restrauntid);
    return res.status(200).send("Restraunt Deleted Successfully");
  }
  catch(err){
    console.log(err);
res.status(500).send("Server Error in Delete Restraunt API")
  }
};

module.exports = { createRestraunt,getRestraunt,getRestrauntById,deleteRestraunt};
