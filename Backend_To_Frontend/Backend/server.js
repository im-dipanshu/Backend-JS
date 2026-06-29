const express = require('express')
const app = express()


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programmer's Diet",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "JavaScript Logic",
            content: "Why did the JavaScript developer wear glasses? Because they couldn't C#."
        },
        {
            id: 3,
            title: "Database Trouble",
            content: "I told my database a joke... but it didn't get the connection."
        },
        {
            id: 4,
            title: "Lazy Developer",
            content: "A programmer's favorite place is the Foo Bar."
        },
        {
            id: 5,
            title: "Debugging",
            content: "Debugging is like being the detective in a crime movie where you're also the criminal."
        }
    ];
    res.send(jokes)
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server at https://localhost:${port}`)
})