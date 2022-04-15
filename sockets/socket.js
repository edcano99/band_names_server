
const {io} = require('../index');
//mensajes del socket

io.on('connection', client => {
    console.log('Cliente Conectado');
 
     client.on('disconnect', () => {
          console.log('Cliente desconectado');
         });
 
         client.on('mensaje',(payload)=>{
             console.log('mensaje',payload);
 
             io.emit('mensaje',{admin: 'nuevo mensaje'});
         });
   });
 