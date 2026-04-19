function gradeQuiz() {
    let score = 0;
    let total = 5;
    let output = "";

let q1 = document.getElementById("q1").value.trim().toLowerCase();

if (q1 === "html") {
    score++;
    output += "<p class='correct'>Q1: Correct</p>";
} else {
    output += "<p class='wrong'>Q1: Incorrect (Answer: HTML)</p>";
}

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
        score++;
        output += "<p class='correct'>Q2: Correct</p>";
    } else {
        output += "<p class='wrong'>Q2: Incorrect (Answer: 1991)</p>";
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "a") {
        score++;
        output += "<p class='correct'>Q3: Correct</p>";
    } else {
        output += "<p class='wrong'>Q3: Incorrect (Answer: p)</p>";
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "c") {
        score++;
        output += "<p class='correct'>Q4: Correct</p>";
    } else {
        output += "<p class='wrong'>Q4: Incorrect (Answer: CERN)</p>";
    }

    // Q5 (multi-select)
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(x => x.value);

    if (answers.includes("a") && answers.includes("b") && answers.length === 2) {
        score++;
        output += "<p class='correct'>Q5: Correct</p>";
    } else {
        output += "<p class='wrong'>Q5: Incorrect (Answers: p, img)</p>";
    }

    let resultText = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML =
        `<h2>${resultText}</h2>
         <p>Score: ${score}/${total}</p>
         ${output}`;
}
