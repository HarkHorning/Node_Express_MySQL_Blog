import express from "express";
import { getPosts, getThisPost } from "./mysql.js"
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use((err, req, res, next) => {
    console.error("Ahhhh", err.stack)
    res.status(500).send("Darn!")
})

app.get('/', async (req, res) => {
    const posts = await getPosts();
    res.render('home.ejs', {
        posts
    });
})

app.get('/search', async (req, res) => {
    const searched = req.query.searched;
    const unfilteredPosts = await Blog.find();
    const posts = unfilteredPosts.filter(post => post.title.toLocaleLowerCase().includes(searched.toLocaleLowerCase()));
    res.render('home.ejs', {
        posts
    });
})

//single post
app.get('/post/:id', async (req, res) => {
    let slug = req.params.id;
    const data = await Blog.findById( { _id: slug } );
    res.render('post.ejs', {
        data
    })

})

//login
app.get('/loginTemp', async (req, res) => {
    res.render('loginTemp.ejs', {
    });
})

app.get('/login', async (req, res) => {
    const username = req.query.userName;
    const password = req.query.password;
    const loginInfo = await Login.find();
        if (username === loginInfo[0].username && password === loginInfo[0].password) {
            res.render('success.ejs')
        } else {
            res.render('failure.ejs')
        }
    // }
})

//CreateAccount
app.get('/createAccount', async (req, res) => {
    res.render('createAccount.ejs', {
    });
})

app.get('/signup', async (req, res) => {
    const username = req.query.userName;
    const password = req.query.password;
    const createUser = new Login({
        username: username,
        password: password,
    })
    createUser.save();
    res.render('loginTemp.ejs', {
    });
})

// workshop
app.get('/workshop', async (req, res) => {
    res.render('workshop.ejs', {

    })
})

//listening on port
app.listen(port, () => {
    console.log(`listening on port:${port}`);
})