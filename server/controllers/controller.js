const userModel = require("../models/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => res.redirect('/'))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while saving the data in the database..",
      })
    );
};

exports.find = (req, res) => {
  if (req.query.id) {
      const id = req.query.id;
      userModel.findById(id)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: `User not found with ${id}!!!`,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error while retrieving the user." });
      });
  } else {
    userModel
      .find()
      .then((users) => res.send(users))
      .catch((err) =>
        res.status(500).send({
          message:
            err.message ||
            "Error while retrieving the users from the database..",
        })
);
  }
};

exports.update = (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update user with ${id}. Maybe user not found!!`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error while updating.." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete user with ${id}. Maybe user not found!!`,
        });
      }
      res.send("User deleted successfully..");
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error while deleting.." });
    });
};
