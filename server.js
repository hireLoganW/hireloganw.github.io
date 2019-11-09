const express = require('express');
const app = express();


app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false}))

app.get('/', (req,res) => {
  res.render('index.ejs',{projects: [
    {title: 'Fhff',
  image:'https://placehold.it/200x200.jpg'},
    {title: 'Unit Testing | Jest & Enzyme',
    image:'https://dl3.pushbulletusercontent.com/7cgoHR7ADX9ydCYsJVnsMvr6r8rPNvhf/loganjest__1573241629_73.110.41.37.jpg',
  code: '<h2>yo<\/h2>'},{title: 'Fhff3',
    image:'https://placehold.it/200x200.jpg'},
    {title: 'Fhff4',
      image:'https://placehold.it/200x200.jpg'},
    
      

  ],name:'Logan J Wilson',desc: "I\'m A Front End Software Engineer who creates lasting user experiences with",proj1Info:'A Non-Profit client in Miami,Fl. Helping to feed and save lives of abandoned and strays on the streets'})
}) 

// ## about page
app.get('/about', (req,res) => {
  res.render('about.ejs',{name:'about'})
})
// ## work page
app.get('/work', (req,res) => {
  res.render('work.ejs',{projects: [
    {title: 'Fhff',
  image:'https://placehold.it/200x200.jpg'},
    {title: 'Fhff2',
    image:'https://placehold.it/200x200.jpg'}

  ],name:'work'})
})

// ## work 1 deep page
app.get('/work/uno', (req,res) => {
  res.render('uno.ejs',{name:'wrk uno'})
})

// ## login page
app.get('/login', (req,res) => {
  res.render('login.ejs',{name:'login'})
})
app.post('/login', (req,res) => {
  
})
// ## register page
app.get('/register', (req,res) => {
  res.render('register.ejs',{namez:'register'})
})

app.post('/register', async (req,res) => {
  try {
    // const hashedPass = await bcrypt.hash(req.body.password,10)
    // const hashedPassword = await bcrypt.hash(req.body.password,  10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.redirect('/login')
    // console.log(users)
  } catch {
    res.redirect('/register')
  }
  console.log(users)
})






app.listen(3002)