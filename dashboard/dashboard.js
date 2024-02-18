const db = require('../db');
const fs = require('fs');
const mime = require('mimetype');
const pdf2pic = require('pdf2pic');


//content CRUD

function InsertSOPData(req, res) {
  const { fileName, base64Data, screen, duration } = req.body;

  // Use timestamp to generate a unique filename
  const timestamp = Date.now();
  const uniqueFileName = `${timestamp}_${fileName}`;

  // Convert base64 to buffer
  const decodedFile = Buffer.from(base64Data, 'base64');

  // Use Multer to handle file upload
  fs.writeFileSync(`./uploads/${uniqueFileName}`, decodedFile);

  const insertSOPInputQuery = `
    INSERT INTO SOP_content(FileName, FilePath, ScreenID, Duration, TimeStamp)
    VALUES (?, ?, ?, ?, NOW())
  `;

  db.query(
    insertSOPInputQuery,
    [uniqueFileName, `./uploads/${uniqueFileName}`, screen, duration],
    (InsertSOPError, InsertSOPResult) => {
      if (InsertSOPError) {
        return res.status(401).json({ message: 'Error while inserting data', InsertSOPError });
      }

      return res.status(200).json({ message: 'Data successfully inserted' });
    }
  );
}


function getSOPData(req, res) {
    try {
        const getSOPDataQuery = ' SELECT * FROM SOP_content';

        db.query(getSOPDataQuery, (getSOPDataError, getSOPDataResult) => {
            if (getSOPDataError) {
                // Use a try-catch block here to catch any potential errors
                try {
                    throw getSOPDataError; // Throw the error to catch it in the catch block
                } catch (error) {
                    res.status(401).json({ message: 'Error while Fetching Data', error: error.message });
                }
            } else {
                if (getSOPDataResult.length === 0) {
                    res.status(404).json({ message: 'No data found' });
                } else {
                    res.json({ getSOPData: getSOPDataResult });
                }
            }
        });
    } catch (error) {
        // Handle any synchronous errors outside of the callback
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}


// function deleteSOPData(req, res) {
//     const FileName = req.params.FileName;
//     const deleteSOPDataQuery = `DELETE FROM SOP_content WHERE FileName = ? `;

//     try {
//         db.query(deleteSOPDataQuery, [FileName], (deleteSOPDataError, deleteSOPResult) => {
//             if (deleteSOPDataError) {
//                 res.status(401).json({ message: 'Error while Deleting Data', error: deleteSOPDataError.message });
//             } else {
//                 // Access the FilePath from the result or wherever it is stored in your database
//                 const filePath = deleteSOPResult[0].FilePath; // Make sure to adjust this based on your actual structure

//                 // Use fs.unlink to delete the file
//                 fs.unlink(filePath, (unlinkError) => {
//                     if (unlinkError) {
//                         res.status(500).json({ message: 'Error while deleting file', error: unlinkError.message });
//                     } else {
//                         res.status(200).json({ message: 'Data and file deleted successfully' });
//                     }
//                 });
//             }
//         });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// }
function deleteSOPData(req, res) {
    const FileName = req.params.FileName;
    const selectSOPDataQuery = `SELECT FilePath FROM SOP_content WHERE FileName = ?`;

    try {
        db.query(selectSOPDataQuery, [FileName], (selectSOPDataError, selectSOPResult) => {
            if (selectSOPDataError) {
                res.status(401).json({ message: 'Error while fetching data', error: selectSOPDataError.message });
            } else {
                if (selectSOPResult.length === 0) {
                    res.status(404).json({ message: 'Data not found for the given FileName' });
                } else {
                    const filePath = selectSOPResult[0].FilePath;

                    const deleteSOPDataQuery = `DELETE FROM SOP_content WHERE FileName = ?`;

                    db.query(deleteSOPDataQuery, [FileName], (deleteSOPDataError) => {
                        if (deleteSOPDataError) {
                            res.status(401).json({ message: 'Error while deleting data', error: deleteSOPDataError.message });
                        } else {
                            // Use fs.unlink to delete the file
                            fs.unlink(filePath, (unlinkError) => {
                                if (unlinkError) {
                                    res.status(500).json({ message: 'Error while deleting file', error: unlinkError.message });
                                } else {
                                    res.status(200).json({ message: 'Data and file deleted successfully' });
                                }
                            });
                        }
                    });
                }
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
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
    const insertScreenQuery = `INSERT INTO screens(ScreenName) VALUES (?)`;

    db.query(insertScreenQuery , [ screenName ] , (InsertSOPError , InserSOPResult) => { 
        if ( InsertSOPError) {
            return res.status(401).json({message : 'Error while inserting data', InsertSOPError})
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

function getAllscreens(req, res) {
    const getSOPDataQuery = 'SELECT * FROM screens';
    
    db.query(getSOPDataQuery, (getSOPDataError, getSOPDataResult) => {
        if (getSOPDataError) {
            // Send an error response and return to avoid further execution
            return res.status(401).json({ message: 'Error while Fetching Data', error: getSOPDataError });
        }

        if (getSOPDataResult.length === 0) {
            // Send a response for no data found and return to avoid further execution
            return res.status(404).json({ message: 'No data Found' });
        }

        // Send the successful response
        res.json({ getSOPData: getSOPDataResult });
    });
}


function updateScreen(req, res){
    const {screenName} = req.body;
    const screenId = req.params.screenId;
    const updateScreenQuery = `Update screens SET ScreenName = ? WHERE ScreenID = ?`
    db.query(updateScreenQuery, [screenName, screenId], (updateScreenError , updateScreenResult) =>{
        if(updateScreenError){
            return res.status(401).json({messsage : 'error while updating Screen', updateScreenError});
        }
        if(updateScreenResult.affectedRows === 0){
            return res.status(404).json({message : 'no rows affected'});
        }
        res.status(200).json({message : 'Successfully updated screen data'});
    });
}

function getContentForScreen(req, res) {
    try {
        const { screenName } = req.params;
        const getContentQuery = `SELECT * FROM SOP_content WHERE ScreenName = ?`;
        
        db.query(getContentQuery, [screenName], (getContentError, getContentResult) => {
            if (getContentError) {
                // Use a try-catch block here to catch any potential errors
                try {
                    throw getContentError; // Throw the error to catch it in the catch block
                } catch (error) {
                    res.status(401).json({ message: 'Error while retrieving data', error: error.message });
                }
            } else {
                const screenData = getContentResult;
                res.json({ getContentForScreen: screenData });
            }
        });
    } catch (error) {
        // Handle any synchronous errors outside of the callback
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}


async function getSOPDataByScreenId(req, res) {
  const { screenId } = req.params;

  const getSOPDataQuery = `
    SELECT FileName, FilePath, ScreenID, Duration, TimeStamp
    FROM SOP_content
    WHERE ScreenID = ? order by ID ASC
  `;

  db.query(getSOPDataQuery, [screenId], async (getSOPError, getSOPResult) => {
    if (getSOPError) {
      return res.status(500).json({ message: 'Error while retrieving data'});
    }

    if (getSOPResult.length === 0) {
      return res.status(404).json({ message: 'No data found for the given screenId' });
    }

    // Read the file asynchronously and convert to base64
    const responseData = getSOPResult.map(async (row) => {
      try {
        const fileData = await fs.promises.readFile(row.FilePath);
        const mimeType = mime.lookup(row.FilePath);
        const base64Data = fileData.toString('base64');
        return {
          FileName: row.FileName,
          ScreenID: row.ScreenID,
          Duration: row.Duration,
          TimeStamp: row.TimeStamp,
          Base64File: {
            data: base64Data,
            mimeType: mimeType,
          },
        };
      } catch (readFileError) {
        console.error('Error reading file:', readFileError);
        return null;
      }
    });

    // Wait for all asynchronous file reads to complete
    Promise.all(responseData).then((data) => {
      const validData = data.filter((item) => item !== null);
      return res.status(200).json({ message: 'Data successfully retrieved', data: validData });
    });
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
    updateScreen,
    getSOPDataByScreenId
}

