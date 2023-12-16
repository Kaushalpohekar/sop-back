const db = require('../db');

function InsertSOPInput (req,res){
    const {fileName, filePath, screen , duration}  = req.body;
    const insertSOPInputQuery = `INSERT INTO SOP_test(FileName , FilePath , ScreenNo , Duration ) VALUES (?,?,?,?)`;

    db.query(insertSOPInputQuery , [ fileName, filePath, screen , duration ] , (InsertSOPError , InserSOPResult) => { 
        if ( InsertSOPError) {
            res.status(401).json({message : 'Error while inserting data', InsertSOPError})
        }

        res.status(200).json({message : 'Data sucessfully inserted'}) //success status
    }); 
}

function getSOPData (req, res){
    const getSOPDataQuery = ' SELECT * FROM SOP_test';
    db.query(getSOPDataQuery , (getSOPDataError , getSOPDataResult) => {
        if (getSOPDataError) {
            res.status(401).json({message : 'Error while Fetching Data' , getSOPDataError})
        }

        if(getSOPDataResult.length === 0 ){
            res.status(404).json({message : ' No data Found '})
        }
        
        res.json({ getSOPData : getSOPDataResult});

    });


}

module.exports = {
    InsertSOPInput,
    getSOPData,
}

