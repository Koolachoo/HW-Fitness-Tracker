var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fitness = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
{
    toJSON: {
     
      virtuals: true
    }
  }
);

fitness.virtual("totalDuration").get(function () {
  
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});


const Fit = mongoose.model("Fit", fitness);

module.exports = Fit;