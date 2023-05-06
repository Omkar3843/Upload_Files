const File = require("../models/File");

// localfileupload -> handler function

exports.localFileUpload = async (req, res) => {

    try{

        // Fetch File
        const file = req.files.file;
        console.log("FILE AAGYI JEE ->",file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;

        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            sucess:true,
            message:'Local File Uploaded Sucessfully',
        });
    }
    catch (error){
        console.log(error);
    }
}