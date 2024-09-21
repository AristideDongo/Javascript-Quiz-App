export type Question = {
  question: string;
  correctAnswer: string;
};

export const functionQuestions: Question[] = [
  {
    question:
      "Comment déclare-t-on une fonction nommée 'greet' en JavaScript ?",
    correctAnswer: "function greet() {}",
  },
  {
    question:
      "Quelle est la syntaxe correcte pour appeler une fonction nommée 'calculate' ?",
    correctAnswer: "calculate();",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction sum(a, b) { return a + b; }\nconsole.log(sum(2, 3));",
    correctAnswer: "5",
  },
  {
    question:
      "Comment déclare-t-on une fonction fléchée qui additionne deux nombres en JavaScript ?",
    correctAnswer: "(a, b) => a + b",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction greet(name) { return 'Hello, ' + name; }\nconsole.log(greet('Alice'));",
    correctAnswer: "Hello, Alice",
  },
  {
    question:
      "Comment peut-on passer des arguments par défaut à une fonction ?",
    correctAnswer: "function myFunction(a, b = 2) {}",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction multiply(a, b) { return a * b; }\nconsole.log(multiply(2));",
    correctAnswer: "NaN",
  },
  {
    question:
      "Comment peut-on définir une fonction qui retourne une fonction ?",
    correctAnswer: "function outer() { return function inner() {}; }",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction outer() { var x = 10; return function inner() { return x; }; }\nconst getX = outer(); console.log(getX());",
    correctAnswer: "10",
  },
  {
    question:
      "Comment une fonction peut-elle accepter un nombre indéfini d'arguments ?",
    correctAnswer: "En utilisant le rest operator '...args'",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction sumAll(...args) { return args.reduce((a, b) => a + b, 0); }\nconsole.log(sumAll(1, 2, 3));",
    correctAnswer: "6",
  },
  {
    question: "Qu'est-ce qu'une fonction récursive ? Donnez un exemple.",
    correctAnswer:
      "Une fonction qui s'appelle elle-même. Exemple: function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction f(a, b) { return a + b; }\nconsole.log(f(1, 2, 3));",
    correctAnswer: "3",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction test() { return arguments.length; }\nconsole.log(test(1, 2, 3));",
    correctAnswer: "3",
  },
  {
    question:
      "Comment peut-on créer une fonction qui utilise 'this' dans un objet ?",
    correctAnswer:
      "var obj = { value: 10, method: function() { return this.value; } };",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nvar a = 1;\nfunction f() { return a; }\na = 2;\nconsole.log(f());",
    correctAnswer: "2",
  },
  {
    question: "Comment peut-on faire une fonction asynchrone ?",
    correctAnswer: "En utilisant le mot-clé 'async'",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nconst obj = { x: 1, f: function() { return this.x; } }; console.log(obj.f());",
    correctAnswer: "1",
  },
  {
    question: "Qu'est-ce qu'une closure ? Donnez un exemple.",
    correctAnswer:
      "Une fonction qui a accès à son scope lexical. Exemple: function outer() { let x = 10; return function inner() { return x; }; }",
  },
  {
    question: "Quelle est la différence entre 'call' et 'apply' ?",
    correctAnswer:
      "'call' prend des arguments séparés, 'apply' prend un tableau d'arguments",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction f(a, b) { return a + b; }\nconsole.log(f(1)(2));",
    correctAnswer: "TypeError",
  },
  {
    question:
      "Comment peut-on utiliser des promesses avec des fonctions de rappel ?",
    correctAnswer: "En utilisant .then()",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction returnFunction() { return function() { return 42; }; }\nconsole.log(returnFunction()());",
    correctAnswer: "42",
  },
  {
    question: "Qu'est-ce qu'un 'thunk' ? Donnez un exemple.",
    correctAnswer:
      "Une fonction qui encapsule une autre fonction. Exemple: function thunk() { return 42; }",
  },
  {
    question: "Comment peut-on créer une fonction génératrice ?",
    correctAnswer: "function* myGenerator() {}",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction add(a, b) { return a + b; }\nconst addTwo = add.bind(null, 2);\nconsole.log(addTwo(3));",
    correctAnswer: "5",
  },
  {
    question:
      "Comment peut-on optimiser une fonction qui utilise beaucoup de ressources ?",
    correctAnswer: "En utilisant la mémorisation",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction findMax(...numbers) { return Math.max(...numbers); }\nconsole.log(findMax(1, 5, 3, 9, 2));",
    correctAnswer: "9",
  },
  {
    question:
      "Comment peut-on créer une méthode d'objet qui utilise une fonction fléchée ?",
    correctAnswer: "const obj = { method: () => this.value };",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nconst arr = [1, 2, 3];\narr.forEach(function(element) { console.log(element); });",
    correctAnswer: "1, 2, 3",
  },
  {
    question: "Qu'est-ce qu'une fonction de première classe ?",
    correctAnswer:
      "Une fonction qui peut être assignée à une variable, passée comme argument, et retournée par d'autres fonctions",
  },
  {
    question:
      "Comment appelle-t-on une fonction qui est définie à l'intérieur d'une autre fonction ?",
    correctAnswer: "Une fonction imbriquée",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction createCounter() { let count = 0; return function() { count++; return count; }; }\nconst counter = createCounter(); console.log(counter());",
    correctAnswer: "1",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction outer() { var x = 10; return function inner() { return x; }; }\nconst inner = outer(); console.log(inner());",
    correctAnswer: "10",
  },
  {
    question:
      "Comment peut-on utiliser 'setTimeout' pour exécuter une fonction après un délai ?",
    correctAnswer: "setTimeout(function() { /* code */ }, 1000);",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction f() { return x; }\nvar x = 1;\nconsole.log(f());",
    correctAnswer: "1",
  },
  {
    question:
      "Comment peut-on définir des méthodes de prototype en JavaScript ?",
    correctAnswer: "MyConstructor.prototype.myMethod = function() {};",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nconst obj = { x: 1, f() { return this.x; } }; console.log(obj.f());",
    correctAnswer: "1",
  },
  {
    question: "Qu'est-ce qu'une fonction auto-invoquée ?",
    correctAnswer:
      "Une fonction qui s'exécute immédiatement après sa définition",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction f(a, b = 5) { return a + b; }\nconsole.log(f(2));",
    correctAnswer: "7",
  },
  {
    question:
      "Comment peut-on définir une fonction qui retourne une promesse ?",
    correctAnswer:
      "function asyncFunction() { return new Promise((resolve, reject) => { /* code */ }); }",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nfunction f() { return arguments.length; }\nconsole.log(f(1, 2, 3));",
    correctAnswer: "3",
  },
  {
    question: "Comment peut-on définir une méthode statique dans une classe ?",
    correctAnswer: "static myMethod() { /* code */ }",
  },
  {
    question:
      "Quelle est la sortie de cette fonction ?\n\nconst square = x => x * x;\nconsole.log(square(5));",
    correctAnswer: "25",
  },
  {
    question: "Comment peut-on faire une fonction qui manipule le DOM ?",
    correctAnswer:
      "document.querySelector('#myElement').textContent = 'Hello';",
  },
];
