const User = require("./../models/userSchema");

module.exports = async (req, res) => {
  const userData = await User.find({
    result: {
      $exists: true,
    },
  });
  //   console.log("exam", req.session.userInfo?.userId);
  res.render("appointments", {
    pageTitle: "Appointments",
    allApps: userData,
    singleUser: null,
  });
};
