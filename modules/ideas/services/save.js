const ideasModel = require("../model");
const { v4: uuidv4 } = require('uuid');

async function saveIdea(req, res) {
  req.body["ideaID"] = uuidv4();
  
  try {
    const idea = new ideasModel(req.body);
    const newIdea = await idea.save();
    console.log(newIdea);

    return res
      .status(200)
      .send({ code: 200, message: "idea saved", data: newIdea });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error saving the idea" });
  }
}

module.exports = saveIdea;
