//class for creating object of every question
class question {
  constructor(ques, a, b, c, d, correct) {
    this.ques = ques;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correct = correct;
  }
}

// creating array for each category that stores question as objects
const questionPipes = [];
const questionProbability = [];
const questionAges = [];
const questionPAndL = [];

//creating object from class questions containing question and answer for
//each category

// __________________________________________________________

//                      pipes and cisterns

// _____________________________________________________________

for (let i = 0; i < 10; i++) {
  let questionText, optionA, optionB, optionC, optionD, correctAnswer;
  switch (i) {
    case 0:
      (questionText =
        "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:"),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 1:
      (questionText =
        "A pump can fill a tank with water in 2 hours. In light of a break in the tank, it takes 7/3 hours to fill the tank. The hole can discharge the filled tank in:"),
        (optionA = "7/3");
      optionB = "7";
      optionC = "8";
      optionD = "14";
      correctAnswer = "D";
      break;

    case 2:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 3:
      (questionText =
        " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe in hours is:"),
        (optionA = "6");
      optionB = "10";
      optionC = "15";
      optionD = "30";
      correctAnswer = "C";
      break;

    case 4:
      (questionText =
        "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes? "),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 5:
      (questionText =
        " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe in hours is:"),
        (optionA = "6");
      optionB = "10";
      optionC = "15";
      optionD = "30";
      correctAnswer = "C";
      break;

    case 6:
      (questionText =
        "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:"),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 7:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 8:
      (questionText =
        "A pump can fill a tank with water in 2 hours. In light of a break in the tank, it takes 7/3 hours to fill the tank. The hole can discharge the filled tank in:"),
        (optionA = "7/3");
      optionB = "7";
      optionC = "8";
      optionD = "14";
      correctAnswer = "D";
      break;

    case 9:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;
  }
  const que = new question(
    questionText,
    optionA,
    optionB,
    optionC,
    optionD,
    correctAnswer
  );

  // Append the question object to the questionPipes array
  questionPipes.push(que);
}

// _________________________________________________________

//                     probability

// _________________________________________________________

for (let i = 0; i < 10; i++) {
  let questionText, optionA, optionB, optionC, optionD, correctAnswer;
  switch (i) {
    case 0:
      (questionText =
        "Three unbiased coins are tossed. What is the probability of getting at most two heads?"),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "7/8";
      correctAnswer = "B";
      break;

    case 1:
      (questionText =
        "If you rolled a 6-sided dice, what is the probability of rolling a 3?"),
        (optionA = "1/6");
      optionB = "2/3";
      optionC = "3/6";
      optionD = "5/6";
      correctAnswer = "A";
      break;

    case 2:
      (questionText =
        "If you flipped 2 coins, what is the probability that both will land on tails?"),
        (optionA = "2/4");
      optionB = "3/4";
      optionC = "1/4";
      optionD = "0/4";
      correctAnswer = "C";
      break;

    case 3:
      (questionText =
        "A lolly bag contains 2 red, 3 green and 2 blue gum balls. What is the probability of selecting a green one?"),
        (optionA = "2/7");
      optionB = "5/7";
      optionC = "4/7";
      optionD = "3/7";
      correctAnswer = "D";
      break;

    case 4:
      (questionText =
        "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes? "),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 5:
      (questionText =
        " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe in hours is:"),
        (optionA = "6");
      optionB = "10";
      optionC = "15";
      optionD = "30";
      correctAnswer = "C";
      break;

    case 6:
      (questionText =
        "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:"),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 7:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 8:
      (questionText =
        "A pump can fill a tank with water in 2 hours. In light of a break in the tank, it takes 7/3 hours to fill the tank. The hole can discharge the filled tank in:"),
        (optionA = "7/3");
      optionB = "7";
      optionC = "8";
      optionD = "14";
      correctAnswer = "D";
      break;

    case 9:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;
  }
  const que = new question(
    questionText,
    optionA,
    optionB,
    optionC,
    optionD,
    correctAnswer
  );

  // Append the question object to the questionPipes array
  questionProbability.push(que);
}

// _________________________________________________________

//                     Ages

// _________________________________________________________

for (let i = 0; i < 10; i++) {
  let questionText, optionA, optionB, optionC, optionD, correctAnswer;
  switch (i) {
    case 0:
      (questionText =
        "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?"),
        (optionA = "2");
      optionB = "2 3/4";
      optionC = "3";
      optionD = "2 1/2";
      correctAnswer = "A";
      break;

    case 1:
      (questionText =
        "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?"),
        (optionA = "4");
      optionB = "8";
      optionC = "10";
      optionD = "none of these";
      correctAnswer = "A";
      break;

    case 2:
      (questionText =
        "A father said to his son, I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:"),
        (optionA = "2/4");
      optionB = "3/4";
      optionC = "1/4";
      optionD = "0/4";
      correctAnswer = "C";
      break;

    case 3:
      (questionText =
        "A lolly bag contains 2 red, 3 green and 2 blue gum balls. What is the probability of selecting a green one?"),
        (optionA = "2/7");
      optionB = "5/7";
      optionC = "4/7";
      optionD = "3/7";
      correctAnswer = "D";
      break;

    case 4:
      (questionText =
        "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes? "),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 5:
      (questionText =
        " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe in hours is:"),
        (optionA = "6");
      optionB = "10";
      optionC = "15";
      optionD = "30";
      correctAnswer = "C";
      break;

    case 6:
      (questionText =
        "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:"),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 7:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 8:
      (questionText =
        "A pump can fill a tank with water in 2 hours. In light of a break in the tank, it takes 7/3 hours to fill the tank. The hole can discharge the filled tank in:"),
        (optionA = "7/3");
      optionB = "7";
      optionC = "8";
      optionD = "14";
      correctAnswer = "D";
      break;

    case 9:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;
  }
  const que = new question(
    questionText,
    optionA,
    optionB,
    optionC,
    optionD,
    correctAnswer
  );

  // Append the question object to the questionPipes array
  questionAges.push(que);
}

// _________________________________________________________

//                     Profit and loss

// _________________________________________________________

for (let i = 0; i < 10; i++) {
  let questionText, optionA, optionB, optionC, optionD, correctAnswer;
  switch (i) {
    case 0:
      (questionText =
        "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?"),
        (optionA = "2");
      optionB = "2 3/4";
      optionC = "3";
      optionD = "2 1/2";
      correctAnswer = "A";
      break;

    case 1:
      (questionText =
        "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?"),
        (optionA = "4");
      optionB = "8";
      optionC = "10";
      optionD = "none of these";
      correctAnswer = "A";
      break;

    case 2:
      (questionText =
        "A father said to his son, I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:"),
        (optionA = "2/4");
      optionB = "3/4";
      optionC = "1/4";
      optionD = "0/4";
      correctAnswer = "C";
      break;

    case 3:
      (questionText =
        "A lolly bag contains 2 red, 3 green and 2 blue gum balls. What is the probability of selecting a green one?"),
        (optionA = "2/7");
      optionB = "5/7";
      optionC = "4/7";
      optionD = "3/7";
      correctAnswer = "D";
      break;

    case 4:
      (questionText =
        "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes? "),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 5:
      (questionText =
        " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe in hours is:"),
        (optionA = "6");
      optionB = "10";
      optionC = "15";
      optionD = "30";
      correctAnswer = "C";
      break;

    case 6:
      (questionText =
        "Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:"),
        (optionA = "5/11");
      optionB = "6/11";
      optionC = "7/11";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 7:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;

    case 8:
      (questionText =
        "A pump can fill a tank with water in 2 hours. In light of a break in the tank, it takes 7/3 hours to fill the tank. The hole can discharge the filled tank in:"),
        (optionA = "7/3");
      optionB = "7";
      optionC = "8";
      optionD = "14";
      correctAnswer = "D";
      break;

    case 9:
      (questionText =
        "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:"),
        (optionA = "2");
      optionB = "4/3";
      optionC = "7/3";
      optionD = "8/11";
      correctAnswer = "B";
      break;
  }
  const que = new question(
    questionText,
    optionA,
    optionB,
    optionC,
    optionD,
    correctAnswer
  );

  // Append the question object to the questionPipes array
  questionPAndL.push(que);
}
