function openConnection(){
    let mysql = require('mysql');
    
    // llamar al componente de mysql
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'leticia1994',
        database: 'isaflor'
    });
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            console.log('Connected to the database');
        }
    });
    
    return connection; // Return the connection object
}

function closeConnection(connection) {
    connection.end((err) =>{
        if(err){
            throw err;
        }
        
        console.log('closing the database');
        connection.destroy();
    });
}

module.exports = {
    openConnection,
    closeConnection // Export the openConnection function
};