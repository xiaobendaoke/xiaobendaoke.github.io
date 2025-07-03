var posts=["2025/04/11/demo/","2025/06/17/论文教程/","2025/07/03/项目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };