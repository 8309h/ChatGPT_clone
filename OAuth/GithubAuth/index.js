
const express = require('express')

require('dotenv').config()

const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())





app.get("/auth/github", async (req, res) => {
    let { code } = req.query
    console.log(code)

    const accessToken = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            client_id: process.env.githubclientid ,
            client_secret: process.env.githubclientsecret ,
            code:code
        })
    }).then((res) => res.json())

    console.log(accessToken)

    let user = await fetch(`https://api.github.com/user`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken.access_token}`
        }
    })

    user = await user.json()

    console.log(user)

    let userEmail = await fetch(`https://api.github.com/user/emails`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken.access_token}`
        }
    })

    userEmail = await userEmail.json()

    let Email = userEmail[0].email

    // let gitusser = await gituser(Email, user)

    console.log("==>",Email,user.name)

    let token = jwt.sign({ id: user._id }, "github", { expiresIn: "6hr" })
   

    const frontendURL1 = `http://127.0.0.1:5500/index.html`



    res.send(`
                <a href="${frontendURL1}?token=${token}&Name=${user.name}" id="myid" style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #222222; margin: 0; padding: 0; overflow: scroll;">
                    <img src="https://i.pinimg.com/originals/2e/9c/68/2e9c6878eae5bbcdaa2d07ed4dbd79b8.gif" alt="">
                </a>
                <script>
                    let a = document.getElementById('myid')
                    setTimeout(()=>{
                        a.click()
                    },4000)
                    console.log(a)
                </script>
        `)


})




// async function gituser(Email, user) {
//     //console.log(Email,user)
//     const gituser = await UserModel.findOne({ Email })

//     if (!gituser) {
//         console.log("Add new User in DB")
//         let newuser = new UserModel({
//             Email,
//             Name: user.name,
//             Password: "12345678",
//             Address: user.location,
//             Gender: "Male",
//             Role: "User",
//             ismailverified: true
//         })
//         await newuser.save()
//         return newuser
//     } else {
//         console.log("user is present db")
//         return gituser

//     }

// }


app.listen(3000, ()=>{
    console.log("connected")
})
