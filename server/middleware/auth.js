function withAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  else res.status(401).send("You haven't logged in yet");
}

module.exports = withAuth;