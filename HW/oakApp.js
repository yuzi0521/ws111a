import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
    return `<html>
  <head>
  <style>
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
    console.log('ctx.request.url=', ctx.request.url)
    let pathname = ctx.request.url.pathname
    if (pathname.startsWith("/login")) {
        ctx.response.body = page(`
       <form action="" method="post">
       <h1>Sign in</h1>
       <p>
         <input type="text" name="user" value="" placeholder="User Name"/>
       </p>
       <p>  
         <input type="password" name="password" value="" placeholder="Password"/>
       </p>
         <button onclick="document.location='http://127.0.0.1:8000'">Submit</button>
       </form>
    `)
    }
    else {
        ctx.response.body = page(`
      <h1>HOME</h1>
      <a href="http://127.0.0.1:8000/login">didn't have a account ?try to Sign in</a>
    `)
    }
    // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
