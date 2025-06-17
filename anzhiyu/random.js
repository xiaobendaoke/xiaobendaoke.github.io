var posts=["2025/06/17/教程/","2025/04/11/demo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };