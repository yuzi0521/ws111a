export function layout(title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>
      body {
        padding: 80px;
        font: 16px Helvetica, Arial;
        color: White;
        background-color:SlateBlue; 
        background-image: linear-gradient(to bottom right, SlateBlue,lightblue);
        text-shadow: 1px 1px 5px black, 0 0 30px LightBlue, 0 5px 5px MediumPurple;
      }
  
      h1 {
        
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }

      a{
        color: White;
        font: 16px Helvetica, Arial;
        text-shadow: 1px 1px 5px black, 0 0 30px LightBlue, 0 5px 5px MediumPurple;
      }

      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }

      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],input[type=password],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text],input[type=password] {
        width: 500px;
      }

      input[type="submit"]{
        padding:5px 15px; 
        border:2px  groove;
        cursor:pointer;
        -webkit-border-radius: 5px;
        border-radius: 5px; 
        background-color:SlateBlue; 
        background-image: linear-gradient(to bottom right, SlateBlue,lightblue);
      }

      input[type="button"]{
        padding:5px 15px; 
        border:2px  groove;
        cursor:pointer;
        -webkit-border-radius: 5px;
        border-radius: 5px; 
        background-color:SlateBlue; 
        background-image: linear-gradient(to bottom right, SlateBlue,lightblue);
      }

    </style>
  </head>
  <body>
    <section id="content">
      ${content}
    </section>
  </body>
  <script>
    function jump(){
        window.location.href="http://127.0.0.1:8027";
    };
  </script>
  </html>
  `
}

export function loginUi() {
  return layout('Login', `
  <h1>登入</h1>
  <form action="/login" method="post">
    <p>暱稱 : <input type="text" placeholder="username" name="username"></p>
    <p>密碼 : <input type="password" placeholder="password" name="password"></p>
    <p>
    <input type="submit" value="登入">
    <input type="button" onclick="javascrtpt:jump()" value="返回首頁">
    </p>
    <p>尚未擁有帳號? <a href="/signup">註冊新帳號</p>
  </form>
  `)
}

export function signupUi() {
  return layout('Signup', `
  <h1>註冊</h1>
  <form action="/signup" method="post">
    <p>暱稱 : <input type="text" placeholder="username" name="username"></p>
    <p>密碼 : <input type="password" placeholder="password" name="password"></p>
    <p>信箱 : <input type="text" placeholder="email" name="email"></p>
    <p>
    <input type="submit" value="創辦帳號">
    <input type="button" onclick="javascrtpt:jump()" value="返回首頁">
    </p>
  </form>
  `)
}

export function success() {
  return layout('Success', `
  <h1>Success!</h1>
   你可以<a href="/">回到首頁</a>或再次<a href="/login">登入</a>!
  `)
}

export function fail() {
  return layout('Fail', `
  <h1>Fail!</h1>
  你可以<a href="/">回到首頁</a>或<a href="JavaScript:window.history.back()">返回上一頁</a> !
  `)
}

export function list(posts, user) {
  console.log('list: user=', user)
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post.body} -- by ${post.username}</h2>
      <p><a href="/post/${post.id}">查看留言</a></p>
    </li>
    `)
  }
  let content = `
  <h1>留言板</h1>
  <p>${(user == null) ? '請先<a href="/login">登入</a>才可留言!' : '歡迎 ' + user.username + ' !' + '你想要 <a href="/post/new">留下新留言</a> 或是 <a href="/logout">登出</a> !'}</p>
  <p>目前有<strong>${posts.length}</strong>則留言!</p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return layout('Posts', content)
}

export function newPost() {
  return layout('New Post', `
  <h1>留言</h1>
  <p>寫下你想說的話:</p>
  <form action="/post" method="post">
    <p><textarea placeholder="留下想說的話..." name="body"></textarea></p>
    <p>
      <input type="submit" value="確定">
      <input type="button" onclick="javascript:window.history.back()" value="返回">
    </p>
  </form>
  `)
}

export function show(post) {
  return layout('post area', `
    
      <p>${post.body}</p>
      <p>-- by ${post.username}</p>
    
    <br>
    <p><input type="button" onclick="javascript:window.history.back()" value="返回"></p>
  `)
}
