// ----------------------------------------------------- THA - DAY 8 -  EXPRESS MIDDLEWARE -----------------------------------------------------------//

// ---------------------------------------------------------- READ EXPRESS DOCUMENTATION ----------------------------------------------------------//



app = express()
app.listen(5000)

app.get(url,(callback)(req,res){
	res.Status(200);   //not sendstatus()
	res.send();
})
// ********************
const body_parse = require('body-parser');
// Start server:
// >nodemon index.js
// Post request :
// >npm install --save body-parser
// ********************
every //code should be inside index.js 

//code 1
app.get("/",(callback)(req,res)==>{
	
	res.json(req.query);

});

//code  2 for next callback (AKA Middlewares are executed before other functions are exec)

app.get("/",(req,res,next)==>{
	
	console.log("first call");
	next();
,(req,res)==>{	
	res.status(200);
	res.json(req.query);
})

//code 3
const adminReq = (req,res,next)==>{ //middleware func to routing to diff func
	
	console.log("first call");
	if(req.query.admin ==="true"){ // checking string not boolean true
	next();	
		}
	else{
		res.status(400).send("for admin")
		}
//OTHER CODE
console.log("outside")
}

const sendResp = (req,res) ==>{
	
	res.json(req.query);
} 

app.get("/",adminReq,sendResp);

//code
app.use(adminReq); // (common middleware like login check) here before every kind of requests the adminReq() is called

//code 4
// Request goes from client: axios('/').then().catch();
app.use(adminReq);
const adminReq = (req,res,next)==>{ 
	
	console.log("first call");
	if(req.query.auth ==="asxysacxzc"){ 
check auth validation for APIs called with redis or psql database before every calls
	next();	//now call API
		}
	
	else{
	res.status(401).send("un authroized")
}
//OTHER CODE
console.log("outside")
}

const sendResp = (req,res) ==>{
	
	res.json(req.query);
} 

app.get("/",adminReq,sendResp);
		


//code 5
app.use(body_parser.urlencoded({extended : true}));
// OR for JSOn
app.use(body_parser.json());

			// OR
app.use(express.urlencoded({extended : true}));
// OR for JSOn
app.use(express.json());
		
		
// Even if refresh we will get 304 status code because get request are cached and POST calls are not
// POSTMAN EXAMPLES:
// >
// sending req:http://localhost:5000/?q=something&something ==> {2 diff varibles are send}

// >
// sending req:http://localhost:5000/?q=encodeURIComponent("something&something") ==> {one varible is send}

// >

// sending req:http://localhost:5000/?admin=true

// >
// sending req:http://localhost:5000/?auth=asxysacxzc

// >
// sending post req: http://localhost:5000/
		// BODY ==> { "hello": hello}
