const readLineSync = require('readline-sync');

const input = readLineSync.question('Let us start a quiz based on time complexity for you.\nEnter your name and start:\n');

console.log(`Hello ${input}!\n`); 


const questionAnswer = [
  //1
  {
    questionStatement : 
    `What is the time complexity of the following code :
    int a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }`,
    options:{
      a: 'O(N)',
      b:'O(N*log(N))',
      c:'O(N * Sqrt(N))',
      d:'O(N*N)'
    },
    answer: 'd',
    explanation: 
    `Total number of runs = N + (N - 1) + (N - 2) + ... 1 + 0
= N * (N + 1) / 2
= 1/2 * N^2 + 1/2 * N
O(N^2) times.`
},
//2
{
    questionStatement : 
    `What is the time complexity of the following code :
    int i, j, k = 0;
    for (i  = n/2; i <= n; i++) {
        for (j = 2; j <= n; j = j * 2) {
            k = k + n/2;
        }
    }`,
    options:{
      a:'Θ(n)',
      b:'Θ(nLogn)',
      c:'Θ(n^2 / Logn)',
      d:'Θ(n^2Logn)'
    },
    answer: 'b',
    explanation: 
    `j would run for O(log n) steps. i runs for n/2 steps. So, total steps = O (n/ 2 * log (n)) = O(n logn)`
},
//3
{
    questionStatement : 
    `What is the worst case time complexity of the following code :
    
    int searchNumOccurrence(vector<int> &V, int k, int start, int end) {
      if (start > end) return 0;
      int mid = (start + end) / 2;
      if (V[mid] < k) return searchNumOccurrence(V, k, mid + 1, end);
      if (V[mid] > k) return searchNumOccurrence(V, k, start, mid - 1);
      return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);
    }
    `,
    options:{
      a:`O(N)`,
      b:`O(N * sqrt N)`,
      c:`O(log^2 N )`,
      d:`O(log N)`
    },
    answer: `a`,
    explanation: 
    `T(N) = 2 * T(N/2) + constant
      = 4 * T(N/4) + constant ( 2 * constant = another constant )
      = 8 * T(N/8) + constant
      = N * T(N/N) + constant
      = N + constant
      = O(N)`
},
//4
{
    questionStatement : 
    `What is the time complexity of the following code :
    int j = 0;
        for(int i = 0; i < n; ++i) {
            while(j < n && arr[i] < arr[j]) {
                j++;
            }
        }
    `,
    options:{
      a:`O(n^2)`,
      b:`O(nlogn)`,
      c:`O(n)`,
      d:`O(n(logn)^2)`,
    },
    answer: `c`,
    explanation: 
    `Note that the variable j is not initialized for each value of variable i.
    Hence, the inner j++ will be executed at most n times.
    The i loop also runs n times.
    So, the whole thing runs for O(n) times.`
},
//5
{
    questionStatement : 
    `what is time complexity of following code :
      int count = 0;
        for (int i = N; i > 0; i /= 2) {
            for (int j = 0; j < i; j++) {
                count += 1;
            }
        }
    `,
    options:{
      a:`O(N)`,
      b:`O(N * log(log(N)))`,
      c:`O(N * Sqrt(N))`,
      d:`O(N * log N)`,
    },
    answer: `a`,
    explanation: 
    `In the first iteration, the j loop runs N times.

In the second iteration, the j loop runs N / 2 times. 

In the ith iteration, the j loop runs N / 2^i times. 

So, the total number of runs of loop = N + N / 2 + N / 4 + ... 1 

= **N * ( 1 + 1/2 + 1/4 + 1/8 + ... ) < 2 * N** 
`
}]

const quizStart = (questionAnswer) =>{
  let score = 0, q =1;
  questionAnswer.forEach((eachQuestion) => {
    console.log(`${q++} : ${eachQuestion.questionStatement}`);

    Object.keys(eachQuestion.options).forEach((key) =>{
      console.log(`${key} : ${eachQuestion.options[key]}`);
    });
    console.log();
    let ans = readLineSync.question("Enter your answer: ");
    while(ans!=='a' &&  ans!=='b' && ans!=='c' && ans!=='d'){
      console.log('Pleast enter a b c or d \n');
      ans = readLineSync.question("Enter your answer: ");
    }
    if(ans == eachQuestion.answer){
      console.log("Correct Answer!!\n");
      score += 10;
    }
    else{
      console.log(`Wrong Answer!! Correct answer is ${eachQuestion.answer}.\n`);
    }
    console.log(`Explanation :\n${eachQuestion.explanation}\n`);
  });
  console.log(`Your score is ${score}.`);
}

quizStart(questionAnswer);