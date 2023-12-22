const db = require('../db');

//content CRUD

function InsertSOPData(req,res){
    const {fileName, filePath, screen , duration}  = req.body;
    const insertSOPInputQuery = `INSERT INTO SOP_content(FileName , FilePath , ScreenNo , Duration ) VALUES (?,?,?,?)`;

    db.query(insertSOPInputQuery , [ fileName, filePath, screen , duration ] , (InsertSOPError , InserSOPResult) => { 
        if ( InsertSOPError) {
            res.status(401).json({message : 'Error while inserting data', InsertSOPError})
        }

        res.status(200).json({message : 'Data sucessfully inserted'}) //success status
    }); 
}

function getSOPData (req, res){
    const getSOPDataQuery = ' SELECT * FROM SOP_content';
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

function deleteSOPData(req,res){
    const ID = req.params.ID;
    const deleteSOPDataQuery = `DELETE FROM SOP_content WHERE ID = ? `;
    db.query(deleteSOPDataQuery , [ID], (deleteSOPDataError , deleteSOPResult) => {
        if(deleteSOPDataError){
            res.status(401).json({message:'Error while Deleting Error'},deleteSOPDataError)
        }

        res.status(200).json({message : 'Data Deleted Successfully'});
    })
} 


const updateSOPData = (req, res) => {
    const ID = req.params.ID;
    const {fileName, filePath, screen , duration}  = req.body;
    const UpdateSOPDataQuery = `UPDATE SOP_content fileName = ?, filePath = ?, screenNo = ?, Duration = ? WHERE ID = ?`;
    db.query(UpdateSOPDataQuery, [fileName, filePath, screen , duration, ID], (UpdateSOPDataError, UpdateSOPDataResult) =>{
        if(UpdateSOPDataError){
            res.status(401).json({message : 'error while updating SOP Data', UpdateSOPDataError});
        }
        if(!UpdateSOPDataResult){
            res.status(404).json({mesage : 'update not done'})
        }
        res.status(200).json({message : 'successfully updated SOP data'});
    });
}


//Screen CRUD

function addScreen(req, res){
    const {screenName}  = req.body;
    const insertScreenQuery = `INSERT INTO SOP_content(ScreenName) VALUES ?`;

    db.query(insertScreenQuery , [ screenName ] , (InsertSOPError , InserSOPResult) => { 
        if ( InsertSOPError) {
            res.status(401).json({message : 'Error while inserting data', InsertSOPError})
        }

        res.status(200).json({message : 'Data sucessfully inserted'}) //success status
    }); 
}

function deleteScreen(req,res){
    const ID = req.params.ID;
    const deleteSOPDataQuery = `DELETE FROM screens WHERE ScreenID = ? `;
    db.query(deleteSOPDataQuery , [ID], (deleteSOPDataError , deleteSOPResult) => {
        if(deleteSOPDataError){
            res.status(401).json({message:'Error while Deleting Error'},deleteSOPDataError)
        }

        res.status(200).json({message : 'Data Deleted Successfully'});
    })
}

function getAllscreens(req,res){
    const getSOPDataQuery = ' SELECT * FROM screens';
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

function getContentForScreen(req, res){
    const {ScreenID} = req.body;
    const getContentQuery = `SELECT * FROM SOP_content WHERE ScreenID = ?`;
    db.query(getContentQuery,[ScreenID], (getContentError, getContentResult) =>{
        if(getContentError){
            return res.status(401).json({message : 'Error while retriving data', error : getContentError})
        }
        screenData = getContentResult
        res.json({getContentForScreen : screenData});
    });
}

module.exports = {
    InsertSOPData,
    getSOPData,
    deleteSOPData,
    updateSOPData,
    addScreen,
    deleteScreen,
    getAllscreens,
    getContentForScreen,
}

