
JsonRoutes.Middleware.use(
    '/api/*',
    oAuth2Server.oauthserver.authorise()   // OAUTH FLOW - A7.1
);




JsonRoutes.add("get", "/specimens/:id", function (req, res, next) {
  console.log('GET /specimens/' + req.params.id);

  var accessTokenStr = (req.params && req.params.access_token) || (req.query && req.query.access_token);
  var accessToken = oAuth2Server.collections.accessToken.findOne({accessToken: accessTokenStr});

  if (accessToken) {
    console.log('accessToken', accessToken);
    console.log('accessToken.userId', accessToken.userId);

    var id = req.params.id;
    console.log('Specimens.findOne(id)', Specimens.findOne(id));

    JsonRoutes.sendResult(res, {
      code: 200,
      data: Specimens.findOne(id)
    });
  } else {
    JsonRoutes.sendResult(res, {
      code: 401
    });
  }
});
