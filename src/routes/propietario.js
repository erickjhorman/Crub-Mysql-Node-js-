const express = require('express');
const router = express.Router(); // To add routes to use later 

//Function to response to the request of the user 
/*router.get('/', (req, res) =>{
    res.send('Hello word');
});*/

const propietarioController = require('../controller/propietarioController');

router.get('/' , propietarioController.list);
router.post('/add', propietarioController.save); //Create a route to listen from post
router.get('/delete/:id', propietarioController.delete); //To delete from database
router.get('/update/:id', propietarioController.edit);
router.post('/update/:id', propietarioController.update);
module.exports = router;