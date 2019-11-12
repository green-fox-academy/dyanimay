"use strict";

var test = require("tape");
var request = require("supertest");
var app = require("../server");

test("First test!", function(t) {
  t.end();
});

test("Correct users returned", function(t) {
  request(app)
    .get("/api/users") //it makes a request to these end points
    .expect("Content-Type", /json/) //the header can be anything but has to be in json
    .expect(200)
    .end(function(err, res) {
      var expectedUsers = ["John", "Betty", "Hal"];

      t.error(err, "No error");
      t.same(res.body, expectedUsers, "Users as expected");
      t.end();
    });
});