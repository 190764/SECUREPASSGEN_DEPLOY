const express = require('express');
const connectDb = require('./utils/connectDb');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/userRoute');
const passwordRouter = require('./routes/passwordRoute');
const otpRouter = require('./routes/otpRoute');
const cors = require('cors');

const server = express();
(async function () {
  await connectDb();
})();

server.use(express.json());
server.use(cors());
server.use('/password-api/users', userRouter);
server.use('/password-api/passwords', passwordRouter);
server.use('/password-api/otp', otpRouter);
server.use(errorHandler);

const path = require("path");
app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

server.listen(3000, () => console.log('Server started'));
