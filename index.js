var jsonServer = require("json-server");
var db = require("./db.js");
var fs = require("fs");
const cors = require("cors");

var server = jsonServer.create();

// important to do this for now.sh to work
// https://spectrum.chat/zeit/general/how-do-i-upload-a-file-to-the-tmp-directory~a1548ae0-91b1-42f5-9388-c79673ba09e4
fs.writeFileSync("/tmp/db.json", JSON.stringify(db()));

// important to have /tmp here otherwise now.sh won't write to file
// https://stackoverflow.com/questions/43389724/lambda-function-error-erofs-read-only-file-system-open-tmp-test-zip-proc
var router = jsonServer.router("/tmp/db.json");
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
server.options("*", cors());
server.use(middlewares);

server.post("/briefs/:id/:vote", (req, res) => {
    const briefs = router.db.get("briefs").value();
    const briefIndex = briefs.findIndex((item) => item.id === Number(req.params.id));

    if (briefIndex > -1) {
        const brief = briefs[briefIndex];
        const users = router.db.get("users").value();
        const user = users.filter((item) => item.id === brief.userId)[0];

        if (req.params.vote === "upvote") {
            briefs[briefIndex].upvotes = briefs[briefIndex].upvotes + 1;
            router.db.set("briefs", briefs);
            res.status(201).send({ ...briefs[briefIndex], user });
        } else if (req.params.vote === "downvote") {
            briefs[briefIndex].downvotes = briefs[briefIndex].downvotes + 1;
            router.db.set("briefs", { ...briefs[briefIndex], user });

            res.status(201).send(briefs[briefIndex]);
        }
        res.status(404).send();
    } else {
        res.status(404).send();
    }
});

server.post("/questions/:id/:vote", (req, res) => {
    const questions = router.db.get("questions").value();
    const questionIndex = questions.findIndex((item) => item.id === Number(req.params.id));

    if (questionIndex > -1) {
        if (req.params.vote === "upvote") {
            questions[questionIndex].upvotes = questions[questionIndex].upvotes + 1;
            router.db.set("questions", questions);
            res.status(201).send(questions[questionIndex]);
        } else if (req.params.vote === "downvote") {
            questions[questionIndex].downvotes = questions[questionIndex].downvotes + 1;
            router.db.set("questions", questions);
            res.status(201).send(questions[questionIndex]);
        }
        res.status(404).send();
    } else {
        res.status(404).send();
    }
});

server.post("/question_answers/:id/:vote", (req, res) => {
    const question_answers = router.db.get("question_answers").value();
    const question_answerIndex = question_answers.findIndex((item) => item.id === Number(req.params.id));

    if (question_answerIndex > -1) {
        if (req.params.vote === "upvote") {
            question_answers[question_answerIndex].upvotes = question_answers[question_answerIndex].upvotes + 1;
            router.db.set("question_answers", question_answers);
            res.status(201).send(question_answers[question_answerIndex]);
        } else if (req.params.vote === "downvote") {
            question_answers[question_answerIndex].downvotes = question_answers[question_answerIndex].downvotes + 1;
            router.db.set("question_answers", question_answers);
            res.status(201).send(question_answers[question_answerIndex]);
        }
        res.status(404).send();
    } else {
        res.status(404).send();
    }
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});

server.use(router);
server.listen(port, function () {
    console.log("JSON Server is running on http://localhost:" + port);
});
