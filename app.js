const http = require('http');

//Connection settings
//a port is an end point of communication
const port = 3000;
//hostname: IP which is associated with my device connected to a computer network
const hostname = '127.0.0.1'; //localhost

//Call back function to be executed when a users request to a server 
const respond = (request, response) => {
    console.log(request.url);
};

//Create a server
http.createServer(respond);

//listen to user request Server.
Server.listen(port, hostname, () => {console.log(`listening on port; ${port}, hostname: ${hostname}`)});
