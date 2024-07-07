const { default: mongoose } = require("mongoose");

const Sehema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", Sehema);
export default TodoModel;
