//path allows the return of the path of the folder where the current JS files resides
const path = require("/path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);

//If no API routes are hit, send the react APP
router.use((req, res) =>
res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router; 