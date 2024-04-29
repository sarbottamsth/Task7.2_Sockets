var expect = require("chai").expect;
var request = require("request");

describe("GET api/items", function () {

  // Testing get request of the items
  // defining url of API
  var url = "http://localhost:3000/api/items";

  it("should return a list of items", function (done) {
    request.get(url, function (error, response, body) {
      body = JSON.parse(body)

      expect(response.statusCode).to.equal(200);
      // Testing get by key or index

      expect(body).to.be.an("array").and.to.have.lengthOf(2);
      expect(body[0].item_name).to.equal("Timex UFC Pro 1");
      expect(body[1].item_name).to.equal("Timex UFC Pro 44mm Silicone Strap Watch");

      done(); 
    });
  });

  // Testing the request if API url is not correct
  it("should return error when api url is incorrect", function (done) {
    
    var incorrectUrl = "http://localhost:3000/api/test-incorrect";
    request.get(incorrectUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal("Error: URL not found");

      done(); 
    });
  });

});
