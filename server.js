const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello world Testing Node EB Github Update CI/CD!')
})


let port = process.env.PORT || 3000;
console.log('port ', port)
console.log('env port ', process.env.PORT);


app.listen(port, () => {
    console.log(`Server is up on ${port}`)
})