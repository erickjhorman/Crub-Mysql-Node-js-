const controller = {};


// The method list is a consult in the database
/*controller.list =  (req, res) =>{
    res.send('Erick');
}; */

controller.list =  (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select * From propietario' , (err, propietarios) =>{
  if (err) {
      res.json(err);
      //next(err); To manage the erros
  }
  console.log(propietarios);
   res.render('propietarios', {
    data: propietarios // I save the data from the database to the variable data
   })// To send the response to the view
        });
    });
}; 

//Method to save into database
controller.save = (req, res) => {
    const data = req.body;
    //console.log(req.body);
    //res.send('works')

     req.getConnection((err, conn) =>{

        if (err) {
            res.json(err);
        } conn.query('INSERT INTO propietario set ?',[data], (err, propietarios) =>{
            console.log(propietarios);
            res.redirect('/');  // To redirect to the main page
        });
       
    });
}

controller.edit = (req, res) => {
    
    const {id}  = req.params;
    console.log(id);
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM propietario WHERE id= ?', [id], (err, propietario )=> {
         console.log(propietario);
         res.render('propietario_edit', {
            data: propietario[0]
         });
           
        });
});
};

controller.update = (req, res) => {
    
    const {id}  = req.params;
    console.log(id);
    const nuevoPropietario = req.body //New data of the owner
    req.getConnection((err, conn) =>{
        conn.query('UPDATE propietario set ? WHERE id= ?' , [nuevoPropietario, id],(err, rows) => {
            res.redirect('/');
        })
    })
           
      

};


//Method to delete from database
controller.delete = (req, res) => {
    //console.log(req.params.id); //Params means to receive un parameters from the view
    //res.send('worls')
   //const id = req.params.id;
   const {id}  = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM propietario WHERE id= ?', [id], (err, rows )=> {
        if (err) {
            res.json(err)
        }  res.redirect('/');  // To redirect to the main page
    });
})

};
module.exports = controller;