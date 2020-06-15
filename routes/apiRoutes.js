const Fit = require("../models/fitness.js");
module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Fit.find()
            .then(function (data) {
                res.json(data)
            })
    });

    app.post("/api/workouts", function (req, res) {
        Fit.create({})
            .then(function (data) {
                res.json(data)
            })
    });

    app.put("/api/workouts/:id", function ({body, params}, res) {
        Fit.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(function (data) {
                res.json(data)
            })
    });

}