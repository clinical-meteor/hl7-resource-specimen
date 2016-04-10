describe('clinical:hl7-resources-specimen', function () {
  var server = meteor();
  var client = browser(server);

  it('Specimens should exist on the client', function () {
    return client.execute(function () {
      expect(Specimens).to.exist;
    });
  });

  it('Specimens should exist on the server', function () {
    return server.execute(function () {
      expect(Specimens).to.exist;
    });
  });

});
