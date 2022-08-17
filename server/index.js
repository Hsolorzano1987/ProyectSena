const { response } = require('express');
const express = require('express');
const { request } = require('http');
const morgan = require('morgan');
const app = express();
const path = require('path');



const {mongoose} = require('./database');



//settings
app.set('port', process.env.PORT || 3000);




//middlewares
app.use(morgan('dev'));
app.use(express.json());



//routes
app.use('/api/empleados',require('./routes/empleados.routes'));
app.get('/',(request, response) => {
    console.log(path.resolve(__dirname))
    response.sendFile(path.resolve(__dirname,'index.html'))
})









//iniciar servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});