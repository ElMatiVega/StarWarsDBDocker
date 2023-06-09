const express = require("express");
const morgan= require('morgan');
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"))
app.use("/characters", createProxyMiddleware({
	target:"http://characters:8001",
	changeOrigin:true
}))
app.use("/characters/:id", createProxyMiddleware({
	target:"http://characters:8001",
	changeOrigin:true
}))

app.use("/films", createProxyMiddleware({
	target:"http://films:8002",
	changeOrigin:true
}))
app.use("/films/:id", createProxyMiddleware({
	target:"http://films:8002",
	changeOrigin:true
}))

app.use("/planets", createProxyMiddleware({
	target:"http://planets:8003",
	changeOrigin:true
}))
app.use("/planets/:id", createProxyMiddleware({
	target:"http://planets:8003",
	changeOrigin:true
}))

app.use("*", (req, res) => {
	res.status(404).send("Not found");
  });

app.listen(8000, ()=>{
    console.log('Gateway on port 8000');
})