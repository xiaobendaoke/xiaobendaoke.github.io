var posts=["2025/04/11/demo/","2025/06/17/论文教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };