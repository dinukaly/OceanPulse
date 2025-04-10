// express framework
// body-parser
// mongoose framework

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;


//end points

const userRoute = require("./routes/UserRoute");
const boatLocationRoute = require("./routes/BoatLocationRoute");
const messageRoute = require("./routes/MessageRoute");
const sosAlertRoute = require("./routes/SosAlertRoute");
const weatherLogRoute = require("./routes/WeatherLogRoute");
const riskPredictionRoute = require("./routes/RiskPredictionRoute");
const communityAlertRoute = require("./routes/CommunityAlertRoute");

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb:127.0.0.1:27017/oceanpulse_db').then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log(error);
});

app.use('/api/v1/users',userRoute);
app.use('/api/v1/boatLocations',boatLocationRoute);
app.use('/api/v1/messages',messageRoute);
app.use('/api/v1/sosAlerts',sosAlertRoute);
app.use('/api/v1/weatherLogs',weatherLogRoute);
app.use('/api/v1/riskPredictions',riskPredictionRoute);
app.use('/api/v1/communityAlerts',communityAlertRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
