var API = require("../lib/API");
var middleware = require("../lib/middleware");
var version = "1.0";
var apiroute = "/api/" + version + "/";

module.exports = {
  setup: function (app, webmakerAuth) {
    // make id parameters
    app.param("makeid", API.makeid);

    app.post(
      apiroute + "feature",
      middleware.isLoggedIn,
      middleware.isAdmin,
      API.feature
    );

    app.get("/", function(req, res) {
      res.render("index.html", {
        csrf: req.csrfToken()
      });
    });

    app.post(
      "/verify",
      webmakerAuth.handlers.verify
    );

    app.post(
      "/authenticate",
      webmakerAuth.handlers.authenticate
    );

    app.post(
      "/logout",
      webmakerAuth.handlers.logout
    );

    app.post(
      "/auth/v2/create",
      webmakerAuth.handlers.createUser
    );

    app.post(
      "/auth/v2/uid-exists",
      webmakerAuth.handlers.uidExists
    );

    app.post(
      "/auth/v2/request",
      webmakerAuth.handlers.request
    );

    app.post(
      "/auth/v2/authenticateToken",
      webmakerAuth.handlers.authenticateToken
    );

    app.post(
      "/auth/v2/verify-password",
      webmakerAuth.handlers.verifyPassword
    );

    app.post(
      "/auth/v2/request-reset-code",
      webmakerAuth.handlers.requestResetCode
    );

    app.post(
      "/auth/v2/reset-password",
      webmakerAuth.handlers.resetPassword
    );
  }
};
