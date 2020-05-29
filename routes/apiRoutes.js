const Fit = require("../models/fitness.js");

router.post("/api/fitness", function (req, res) {
    Fit.find()
        .then(function (data) {
            res.json(data)
        })
})