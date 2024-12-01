//PART 1
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  const motorcycle = document.getElementById("motorcycle");
  
  document.getElementById("randomColorBtn").addEventListener("click", () => {
    motorcycle.style.backgroundColor = getRandomColor();
  });
  
  document.getElementById("resetBtn").addEventListener("click", () => {
    motorcycle.style.backgroundColor = "#dcdcdc";
  });
  
  document.getElementById("colorDropdown").addEventListener("change", (event) => {
    motorcycle.style.backgroundColor = event.target.value;
  });
  
  //PART 2
  function evaluateGrades() {
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("result").style.display = "none";
  
    const name = document.getElementById("name").value.trim();
    const math = parseInt(document.getElementById("math").value);
    const science = parseInt(document.getElementById("science").value);
    const english = parseInt(document.getElementById("english").value);
    const filipino = parseInt(document.getElementById("filipino").value);
    const pe = parseInt(document.getElementById("pe").value);
  
    if (
      !name ||
      isNaN(math) ||
      isNaN(science) ||
      isNaN(english) ||
      isNaN(filipino) ||
      isNaN(pe) ||
      math < 0 ||
      math > 100 ||
      science < 0 ||
      science > 100 ||
      english < 0 ||
      english > 100 ||
      filipino < 0 ||
      filipino > 100 ||
      pe < 0 ||
      pe > 100
    ) {
      document.getElementById("errorMessage").textContent =
        "Please enter valid values for all fields. Grades must between 0 and 100.";
      return;
    }
  
    function getGradeCategory(grade) {
      if (grade >= 90) return "Excellent";
      else if (grade >= 80) return "Good";
      else if (grade >= 70) return "Average";
      else if (grade >= 60) return "Poor";
      else return "Fail";
    }
  
    const grades = [
      { subject: "Math", grade: math },
      { subject: "Science", grade: science },
      { subject: "English", grade: english },
      { subject: "Filipino", grade: filipino },
      { subject: "P.E.", grade: pe },
    ];
  
    let excellentCount = 0;
    let poorFailCount = 0;
    let gradeCategories = "";
  
    grades.forEach((subjectGrade) => {
      const category = getGradeCategory(subjectGrade.grade);
      gradeCategories += `<p><strong>${subjectGrade.subject}:</strong> ${category}</p>`;
      if (category === "Excellent") excellentCount++;
      if (category === "Poor" || category === "Fail") poorFailCount++;
    });
  
    let ranking = "";
    if (excellentCount === 5) {
      ranking = "Top Honor Student";
    } else if (excellentCount >= 3) {
      ranking = "Second Honorable Student";
    } else if (poorFailCount === 5) {
      ranking = "Repeater";
    } else {
      ranking = "Needs Improvement";
    }
  
    document.getElementById("studentName").textContent = "Student: " + name;
    document.getElementById("gradeResult").innerHTML = gradeCategories;
    document.getElementById("ranking").textContent = "Ranking: " + ranking;
    document.getElementById("result").style.display = "block";
  }
  
  //PART 3
  // Task A: FizzBuzz
  document.getElementById("fizzbuzz-btn").addEventListener("click", () => {
    let output = "";
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += "FizzBuzz\n";
      } else if (i % 3 === 0) {
        output += "Fizz\n";
      } else if (i % 5 === 0) {
        output += "Buzz\n";
      } else {
        output += `${i}\n`;
      }
    }
    document.getElementById("fizzbuzz-output").textContent = output;
  });
  
  document.getElementById("clear-fizzbuzz-btn").addEventListener("click", () => {
    document.getElementById("fizzbuzz-output").textContent = "";
  });
  
  // Task B: 99 Bottles of Beer
  document.getElementById("bottles-btn").addEventListener("click", () => {
    let output = "";
    for (let i = 99; i > 0; i--) {
      if (i === 1) {
        output += `${i} bottle of beer on the wall, ${i} bottle of beer.\n`;
        output += `Take one down and pass it around, no more bottles of beer on the wall.\n`;
      } else {
        output += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
        output += `Take one down and pass it around, ${i - 1} ${
          i - 1 === 1 ? "bottle" : "bottles"
        } of beer on the wall.\n`;
      }
    }
    output += "No more bottles of beer on the wall, no more bottles of beer.\n";
    output +=
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    document.getElementById("bottles-output").textContent = output;
  });
  
  document.getElementById("clear-bottles-btn").addEventListener("click", () => {
    document.getElementById("bottles-output").textContent = "";
  });
  
  // Task C: Fibonacci Sequence
  document.getElementById("fib-btn").addEventListener("click", () => {
    const terms = parseInt(document.getElementById("fib-terms").value, 10);
    if (!terms || terms <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
  
    let fibSequence = [];
    if (terms === 1) {
      fibSequence = [0];
    } else if (terms >= 2) {
      fibSequence = [0, 1];
      for (let i = 2; i < terms; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
      }
    }
    document.getElementById("fibonacci-output").textContent =
      fibSequence.join(", ");
  });
  
  document.getElementById("clear-fib-btn").addEventListener("click", () => {
    document.getElementById("fibonacci-output").textContent = "";
    document.getElementById("fib-terms").value = "";
  });
  