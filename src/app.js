const express = require('express')
const path = require ("path")
const hbs = require ('hbs')
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'hbs');

const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

const viewsDirectory = path.join (__dirname , "../page/views" )
app.set( "views" , viewsDirectory)

const partialsPath = path.join (__dirname , "../page/partials")
hbs.registerPartials(partialsPath)

app.get("/" , (req , res) => {
    res.render("index" , {
        title:"Shimaa Mohamed",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut officia, accusantium mollitia laudantium dolorum dolore.",
        btn: "About Me"
    })
})

app.get("/about" , (req, res) => {
    res.render("about" , {
        title: "About Me",
        btn: "Gallery",
        img:""
    })
})

app.get("/contact" , (req, res) => {
    res.render("contact" , {
        title: "Contact Me",
        subTitle: "Write to me",
        btn: "",
        img: "img/contact-img.svg",
    })
})

app.get("/gallery" , (req, res) => {
    res.render("gallery" , {
        title: "Gallery",
        il1:"All",
        il2:"web",
        il3:"graphic",
        il4:"marketing",
        img1:"img/gallery-01.png",
        img2:"img/gallery-02.png",
        img3:"img/gallery-03.jpg",
        img4:"img/gallery-04.png",
        img5:"img/gallery-05.jpg",
        img6:"img/gallery-06.png",
    })
})

app.listen(port, () => {
    console.log(`listen to port ${port}`)
    })