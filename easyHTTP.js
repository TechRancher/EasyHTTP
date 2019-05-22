/**
 * ES5 Test AJAX API
 */

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);
  let self = this.http;
  this.http.onload = function() {
    if (self.status === 200) {
      callback(null, self.responseText); // null was added for easy of understanding
    } else {
      callback("Error: " + self.status, null); // null was added for easy of understanding.
    }
  };
  this.http.send();
};
// Make HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this.http;
  this.http.onload = function() {
    callback(null, self.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this.http;
  this.http.onload = function() {
    callback(null, self.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make HTTP DELETE request
