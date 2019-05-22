const http = new easyHTTP();

// GET Posts
// http.get("https://jsonplaceholder.typicode.com/posts/", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET single Post
// http.get("https://jsonplaceholder.typicode.com/posts/2", function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// Create POST
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create PUT
http.put("https://jsonplaceholder.typicode.com/posts/60", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
