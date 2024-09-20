const quizData = [
    {
        question: "Qu'est-ce qu'une variable en JavaScript?",
        answers: [
            { text: "Un type de fonction", isCorrect: false },
            { text: "Une erreur de syntaxe", isCorrect: false },
            { text: "Un opérateur logique", isCorrect: false },
            { text: "Une boîte pour stocker des valeurs", isCorrect: true },
        ],
    },
    {
        question: "Quelle est la syntaxe correcte pour une boucle for?",
        answers: [
            { text: "for (i < 5; i++)", isCorrect: false },
            { text: "for (i = 0; i < 5; i++)", isCorrect: true },
            { text: "for (i = 0; i < 5)", isCorrect: false },
            { text: "for i = 0 to 5", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau?",
        answers: [
            { text: "add()", isCorrect: false },
            { text: "insert()", isCorrect: false },
            { text: "push()", isCorrect: true },
            { text: "append()", isCorrect: false },
        ],
    },
    {
        question: "Que retourne la méthode Math.random()?",
        answers: [
            { text: "Un entier aléatoire", isCorrect: false },
            { text: "Une chaîne de caractères aléatoire", isCorrect: false },
            { text: "Un nombre aléatoire entre 0 et 1", isCorrect: true },
            { text: "Un tableau de nombres aléatoires", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la différence entre '==' et '==='?",
        answers: [
            { text: "'==' et '===' sont identiques", isCorrect: false },
            { text: "'==' compare les valeurs, '===' compare les valeurs et les types", isCorrect: true },
            { text: "'==' compare les types, '===' compare les valeurs", isCorrect: false },
            { text: "'==' est utilisé pour les chaînes, '===' pour les nombres", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour transformer une chaîne en un tableau?",
        answers: [
            { text: "split()", isCorrect: true },
            { text: "toArray()", isCorrect: false },
            { text: "join()", isCorrect: false },
            { text: "slice()", isCorrect: false },
        ],
    },
    {
        question: "Qu'est-ce qu'une fonction en JavaScript?",
        answers: [
            { text: "Une variable", isCorrect: false },
            { text: "Un type de donnée", isCorrect: false },
            { text: "Un bloc de code qui effectue une tâche", isCorrect: true },
            { text: "Un objet", isCorrect: false },
        ],
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable dont la valeur ne peut pas être changée?",
        answers: [
            { text: "let", isCorrect: false },
            { text: "var", isCorrect: false },
            { text: "const", isCorrect: true },
            { text: "static", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour itérer sur les éléments d'un tableau?",
        answers: [
            { text: "map()", isCorrect: false },
            { text: "forEach()", isCorrect: true },
            { text: "filter()", isCorrect: false },
            { text: "reduce()", isCorrect: false },
        ],
    },
    {
        question: "Qu'est-ce qu'une fonction fléchée?",
        answers: [
            { text: "Une fonction qui n'a pas de paramètres", isCorrect: false },
            { text: "Une syntaxe concise pour déclarer des fonctions", isCorrect: true },
            { text: "Une fonction qui retourne une promesse", isCorrect: false },
            { text: "Une méthode de tableau", isCorrect: false },
        ],
    },
    {
        question: "Comment crée-t-on un objet en JavaScript?",
        answers: [
            { text: "let obj = []", isCorrect: false },
            { text: "let obj = ()", isCorrect: false },
            { text: "let obj = new Object()", isCorrect: false },
            { text: "let obj = {}", isCorrect: true },
        ],
    },
    {
        question: "Que signifie le terme 'closure' en JavaScript?",
        answers: [
            { text: "Une fonction qui ne peut pas être rappelée", isCorrect: false },
            { text: "Une fonction qui se souvient de son environnement lexical", isCorrect: true },
            { text: "Une erreur de syntaxe", isCorrect: false },
            { text: "Une méthode de l'objet window", isCorrect: false },
        ],
    },
    {
        question: "Quel est le résultat de l'expression 'typeof null'?",
        answers: [
            { text: "'object'", isCorrect: true },
            { text: "'null'", isCorrect: false },
            { text: "'undefined'", isCorrect: false },
            { text: "'NaN'", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on gérer les promesses en JavaScript?",
        answers: [
            { text: "Avec async/await uniquement", isCorrect: false },
            { text: "Avec try/catch uniquement", isCorrect: false },
            { text: "Avec then() et catch()", isCorrect: true },
            { text: "Avec forEach()", isCorrect: false },
        ],
    },
    {
        question: "Quel est le rôle du mot-clé 'this' en JavaScript?",
        answers: [
            { text: "Il fait référence à une fonction", isCorrect: false },
            { text: "Il est utilisé pour créer des objets", isCorrect: false },
            { text: "Il fait référence à l'objet d'appel", isCorrect: true },
            { text: "Il désigne le contexte global", isCorrect: false },
        ],
    },
    {
        question: "Comment déclarer une fonction asynchrone?",
        answers: [
            { text: "function async nomFonction()", isCorrect: false },
            { text: "nomFonction async()", isCorrect: false },
            { text: "function nomFonction async()", isCorrect: false },
            { text: "async function nomFonction()", isCorrect: true },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log(typeof NaN)'?",
        answers: [
            { text: "'NaN'", isCorrect: false },
            { text: "'undefined'", isCorrect: false },
            { text: "'number'", isCorrect: true },
            { text: "'object'", isCorrect: false },
        ],
    },
    {
        question: "Quel opérateur est utilisé pour tester si une variable est de type undefined?",
        answers: [
            { text: "instanceof", isCorrect: false },
            { text: "is", isCorrect: false },
            { text: "typeof", isCorrect: true },
            { text: "==", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la portée d'une variable déclarée avec 'let'?",
        answers: [
            { text: "Global", isCorrect: false },
            { text: "Bloc", isCorrect: true },
            { text: "Fonction", isCorrect: false },
            { text: "Statique", isCorrect: false },
        ],
    },
    {
        question: "Comment appelle-t-on une fonction immédiatement invoquée?",
        answers: [
            { text: "Callback", isCorrect: false },
            { text: "Closure", isCorrect: false },
            { text: "IIFE", isCorrect: true },
            { text: "Promise", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode transforme un tableau en une chaîne de caractères?",
        answers: [
            { text: "toString()", isCorrect: false },
            { text: "join()", isCorrect: true },
            { text: "concat()", isCorrect: false },
            { text: "slice()", isCorrect: false },
        ],
    },
    {
        question: "Que fait la méthode filter() sur un tableau?",
        answers: [
            { text: "Crée un nouveau tableau avec les éléments transformés", isCorrect: false },
            { text: "Renvoie le premier élément trouvé", isCorrect: false },
            { text: "Crée un nouveau tableau avec tous les éléments qui passent un test", isCorrect: true },
            { text: "Modifie le tableau d'origine", isCorrect: false },
        ],
    },
    {
        question: "Qu'est-ce qu'une promesse en JavaScript?",
        answers: [
            { text: "Un tableau", isCorrect: false },
            { text: "Une fonction", isCorrect: false },
            { text: "Une méthode", isCorrect: false },
            { text: "Un objet représentant la terminaison ou l'échec d'une opération asynchrone", isCorrect: true },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log(0.1 + 0.2 === 0.3)'?",
        answers: [
            { text: "false", isCorrect: true },
            { text: "true", isCorrect: false },
            { text: "undefined", isCorrect: false },
            { text: "NaN", isCorrect: false },
        ],
    },
    {
        question: "Quel est le résultat de '[] + []'?",
        answers: [
            { text: "[]", isCorrect: false },
            { text: "0", isCorrect: false },
            { text: "''", isCorrect: true },
            { text: "null", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on supprimer une propriété d'un objet?",
        answers: [
            { text: "remove obj.propriété", isCorrect: false },
            { text: "delete obj.propriété", isCorrect: true },
            { text: "obj.propriété = null", isCorrect: false },
            { text: "clear obj.propriété", isCorrect: false },
        ],
    },
    {
        question: "Quel est le but de la méthode Object.keys()?",
        answers: [
            { text: "Renvoie un tableau des valeurs d'un objet", isCorrect: false },
            { text: "Crée un nouvel objet", isCorrect: false },
            { text: "Fusionne deux objets", isCorrect: false },
            { text: "Renvoie un tableau des clés d'un objet", isCorrect: true },
        ],
    },
    {
        question: "Comment peut-on créer une instance d'un objet à partir d'une classe?",
        answers: [
            { text: "Classe.new()", isCorrect: false },
            { text: "new instance Classe()", isCorrect: false },
            { text: "Classe()", isCorrect: false },
            { text: "new Classe()", isCorrect: true },
        ],
    },
    {
        question: "Quelle méthode peut être utilisée pour transformer un objet en une chaîne JSON?",
        answers: [
            { text: "JSON.parse()", isCorrect: false },
            { text: "Object.toJSON()", isCorrect: false },
            { text: "JSON.stringify()", isCorrect: true },
            { text: "Stringify.Object()", isCorrect: false },
        ],
    },
    {
        question: "Qu'est-ce que 'hoisting' en JavaScript?",
        answers: [
            { text: "La création d'un tableau", isCorrect: false },
            { text: "La fusion de deux objets", isCorrect: false },
            { text: "Le déplacement des déclarations vers le haut du scope", isCorrect: true },
            { text: "L'exécution d'une fonction", isCorrect: false },
        ],
    },
    {
        question: "Quel type de données peut être utilisé comme clé d'un objet?",
        answers: [
            { text: "Tous les types", isCorrect: false },
            { text: "Uniquement des nombres", isCorrect: false },
            { text: "String et Symbol", isCorrect: true },
            { text: "Uniquement des chaînes", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on faire une requête HTTP avec fetch?",
        answers: [
            { text: "request(url)", isCorrect: false },
            { text: "get(url)", isCorrect: false },
            { text: "fetch(url)", isCorrect: true },
            { text: "http(url)", isCorrect: false },
        ],
    },
    {
        question: "Que renvoie 'Boolean(undefined)'?",
        answers: [
            { text: "true", isCorrect: false },
            { text: "null", isCorrect: false },
            { text: "false", isCorrect: true },
            { text: "undefined", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour vérifier si un tableau contient un élément?",
        answers: [
            { text: "contains()", isCorrect: false },
            { text: "has()", isCorrect: false },
            { text: "includes()", isCorrect: true },
            { text: "exists()", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode renvoie le dernier élément d'un tableau?",
        answers: [
            { text: "pop()", isCorrect: true },
            { text: "shift()", isCorrect: false },
            { text: "slice(-1)", isCorrect: false },
            { text: "last()", isCorrect: false },
        ],
    },
    {
        question: "Comment définir une classe en JavaScript?",
        answers: [
            { text: "class NomClasse {}", isCorrect: true },
            { text: "function NomClasse {}", isCorrect: false },
            { text: "NomClasse: class {}", isCorrect: false },
            { text: "create class NomClasse {}", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log(1 + '1')'?",
        answers: [
            { text: "2", isCorrect: false },
            { text: "'1'", isCorrect: false },
            { text: "NaN", isCorrect: false },
            { text: "'11'", isCorrect: true },
        ],
    },
    {
        question: "Comment peut-on vérifier si une variable est un tableau?",
        answers: [
            { text: "typeof var === 'array'", isCorrect: false },
            { text: "var instanceof Array", isCorrect: false },
            { text: "isArray(var)", isCorrect: false },
            { text: "Array.isArray()", isCorrect: true },
        ],
    },
    {
        question: "Qu'est-ce qu'un événement en JavaScript?",
        answers: [
            { text: "Un type de variable", isCorrect: false },
            { text: "Une fonction", isCorrect: false },
            { text: "Un tableau", isCorrect: false },
            { text: "Une action qui se produit dans le navigateur", isCorrect: true },
        ],
    },
    {
        question: "Quelle fonction est utilisée pour définir une fonction de rappel sur un événement?",
        answers: [
            { text: "on()", isCorrect: false },
            { text: "attachEvent()", isCorrect: false },
            { text: "addEventListener()", isCorrect: true },
            { text: "listen()", isCorrect: false },
        ],
    },
    {
        question: "Quel mot-clé est utilisé pour créer un module en JavaScript?",
        answers: [
            { text: "import", isCorrect: false },
            { text: "export", isCorrect: true },
            { text: "module", isCorrect: false },
            { text: "require", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on rendre une fonction privée dans une closure?",
        answers: [
            { text: "En utilisant le mot-clé private", isCorrect: false },
            { text: "En utilisant le mot-clé protected", isCorrect: false },
            { text: "En la définissant à l'intérieur d'une fonction", isCorrect: true },
            { text: "En la déclarant en dehors de l'objet", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour trier les éléments d'un tableau?",
        answers: [
            { text: "sort()", isCorrect: true },
            { text: "order()", isCorrect: false },
            { text: "arrange()", isCorrect: false },
            { text: "sequence()", isCorrect: false },
        ],
    },
    {
        question: "Qu'est-ce que le 'this' dans une fonction normale?",
        answers: [
            { text: "Fait référence à la fonction elle-même", isCorrect: false },
            { text: "Fait référence au contexte de la fonction", isCorrect: false },
            { text: "Fait référence à null", isCorrect: false },
            { text: "Fait référence à l'objet global", isCorrect: true },
        ],
    },
    {
        question: "Qu'est-ce qu'une fonction récursive?",
        answers: [
            { text: "Une fonction qui retourne une promesse", isCorrect: false },
            { text: "Une fonction sans paramètres", isCorrect: false },
            { text: "Une fonction qui ne fait rien", isCorrect: false },
            { text: "Une fonction qui s'appelle elle-même", isCorrect: true },
        ],
    },
    {
        question: "Quel est le résultat de l'appel '((x) => x * 2)(5)'?",
        answers: [
            { text: "5", isCorrect: false },
            { text: "10", isCorrect: true },
            { text: "undefined", isCorrect: false },
            { text: "2", isCorrect: false },
        ],
    },
    {
        question: "Comment appelle-t-on une fonction qui retourne une autre fonction?",
        answers: [
            { text: "Fonction génératrice", isCorrect: false },
            { text: "Fonction fléchée", isCorrect: false },
            { text: "Fonction anonyme", isCorrect: false },
            { text: "Fonction d'ordre supérieur", isCorrect: true },
        ],
    },
    {
        question: "Que fait la méthode bind()?",
        answers: [
            { text: "Appel d'une fonction immédiatement", isCorrect: false },
            { text: "Liaison d'un contexte à une fonction", isCorrect: true },
            { text: "Création d'une nouvelle fonction", isCorrect: false },
            { text: "Déclaration d'une fonction", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log(typeof (function(){}))'?",
        answers: [
            { text: "'object'", isCorrect: false },
            { text: "'undefined'", isCorrect: false },
            { text: "'function'", isCorrect: true },
            { text: "'string'", isCorrect: false },
        ],
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une fonction à l'intérieur d'une autre fonction?",
        answers: [
            { text: "let", isCorrect: false },
            { text: "function", isCorrect: true },
            { text: "var", isCorrect: false },
            { text: "const", isCorrect: false },
        ],
    },
    {
        question: "Que fait la méthode call()?",
        answers: [
            { text: "Appelle une fonction avec un certain contexte", isCorrect: true },
            { text: "Crée une nouvelle fonction", isCorrect: false },
            { text: "Déclare une fonction", isCorrect: false },
            { text: "Retourne la valeur d'une fonction", isCorrect: false },
        ],
    },
    {
        question: "Quel est le résultat de 'console.log([1, 2, 3].map(x => x + 1))'?",
        answers: [
            { text: "[1, 2, 3]", isCorrect: false },
            { text: "[1, 2]", isCorrect: false },
            { text: "[2, 3, 4]", isCorrect: true },
            { text: "undefined", isCorrect: false },
        ],
    },
    {
        question: "Qu'est-ce qu'une fonction anonyme?",
        answers: [
            { text: "Une fonction qui ne retourne rien", isCorrect: false },
            { text: "Une fonction avec des paramètres", isCorrect: false },
            { text: "Une fonction sans nom", isCorrect: true },
            { text: "Une fonction qui ne peut pas être appelée", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log([1, 2, 3].reduce((acc, val) => acc + val, 0))'?",
        answers: [
            { text: "3", isCorrect: false },
            { text: "0", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "undefined", isCorrect: false },
        ],
    },
    {
        question: "Quel est le rôle d'une fonction de rappel (callback)?",
        answers: [
            { text: "Définir une nouvelle fonction", isCorrect: false },
            { text: "Retourner une valeur", isCorrect: false },
            { text: "Exécuter du code après une certaine opération", isCorrect: true },
            { text: "Créer un tableau", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on définir une fonction qui prend un nombre variable d'arguments?",
        answers: [
            { text: "function(args...)", isCorrect: false },
            { text: "function(args)", isCorrect: false },
            { text: "function(...args)", isCorrect: true },
            { text: "function(arg1, arg2, ...)", isCorrect: false },
        ],
    },
    {
        question: "Quel est le résultat de 'console.log((function(x) { return x * 2; }(3)))'?",
        answers: [
            { text: "3", isCorrect: false },
            { text: "undefined", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "NaN", isCorrect: false },
        ],
    },
    {
        question: "Que signifie 'IIFE'?",
        answers: [
            { text: "Internal Function Invocation Expression", isCorrect: false },
            { text: "Instant Function Initialization Expression", isCorrect: false },
            { text: "Intermittent Function Invocation Expression", isCorrect: false },
            { text: "Immediately Invoked Function Expression", isCorrect: true },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour trouver le premier élément dans un tableau qui satisfait une condition?",
        answers: [
            { text: "filter()", isCorrect: false },
            { text: "find()", isCorrect: true },
            { text: "some()", isCorrect: false },
            { text: "every()", isCorrect: false },
        ],
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une fonction de manière concise?",
        answers: [
            { text: "arrow function", isCorrect: true },
            { text: "function expression", isCorrect: false },
            { text: "function declaration", isCorrect: false },
            { text: "immediate function", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la différence entre une fonction normale et une fonction fléchée?",
        answers: [
            { text: "Les fonctions normales ne peuvent pas être anonymes", isCorrect: false },
            { text: "Les fonctions fléchées ne peuvent pas avoir de paramètres", isCorrect: false },
            { text: "Les fonctions fléchées n'ont pas leur propre 'this'", isCorrect: true },
            { text: "Les fonctions normales ne peuvent pas retourner de valeurs", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on créer un générateur en JavaScript?",
        answers: [
            { text: "function nomFonction*", isCorrect: false },
            { text: "generator nomFonction()", isCorrect: false },
            { text: "function* nomFonction()", isCorrect: true },
            { text: "function* nomFonction {}", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour appeler une fonction après un délai spécifié?",
        answers: [
            { text: "setInterval()", isCorrect: false },
            { text: "callLater()", isCorrect: false },
            { text: "setTimeout()", isCorrect: true },
            { text: "invokeLater()", isCorrect: false },
        ],
    },
    {
        question: "Quel est le résultat de 'console.log([1, 2, 3].map(x => x * 2).filter(x => x > 2))'?",
        answers: [
            { text: "[4, 6]", isCorrect: true },
            { text: "[2, 3]", isCorrect: false },
            { text: "[1, 2, 3]", isCorrect: false },
            { text: "[2, 4, 6]", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log(!!(null))'?",
        answers: [
            { text: "true", isCorrect: false },
            { text: "NaN", isCorrect: false },
            { text: "false", isCorrect: true },
            { text: "undefined", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on définir une fonction qui utilise 'this'?",
        answers: [
            { text: "Avec une fonction fléchée", isCorrect: false },
            { text: "Avec une fonction anonyme", isCorrect: false },
            { text: "Avec une fonction normale", isCorrect: true },
            { text: "Avec une IIFE", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode crée une nouvelle fonction en appliquant un contexte spécifique?",
        answers: [
            { text: "bind()", isCorrect: true },
            { text: "apply()", isCorrect: false },
            { text: "call()", isCorrect: false },
            { text: "set()", isCorrect: false },
        ],
    },
    {
        question: "Comment peut-on transformer une chaîne en tableau en utilisant une fonction?",
        answers: [
            { text: "str.toArray()", isCorrect: false },
            { text: "Array.from(str)", isCorrect: false },
            { text: "str.array()", isCorrect: false },
            { text: "str.split(',')", isCorrect: true },
        ],
    },
    {
        question: "Quelle méthode exécute une fonction à intervalles réguliers?",
        answers: [
            { text: "setTimeout()", isCorrect: false },
            { text: "repeat()", isCorrect: false },
            { text: "setInterval()", isCorrect: true },
            { text: "invoke()", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log((function() { return arguments.length; })(1, 2, 3))'?",
        answers: [
            { text: "2", isCorrect: false },
            { text: "1", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "undefined", isCorrect: false },
        ],
    },
    {
        question: "Quel est le rôle de 'this' dans une fonction fléchée?",
        answers: [
            { text: "Il fait référence à l'objet global", isCorrect: false },
            { text: "Il est toujours null", isCorrect: false },
            { text: "Il fait référence à l'objet lexical", isCorrect: true },
            { text: "Il ne peut pas être utilisé", isCorrect: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour appliquer une fonction sur un tableau et retourner un tableau avec les résultats?",
        answers: [
            { text: "forEach()", isCorrect: false },
            { text: "reduce()", isCorrect: false },
            { text: "map()", isCorrect: true },
            { text: "filter()", isCorrect: false },
        ],
    },
    {
        question: "Comment créer une fonction asynchrone?",
        answers: [
            { text: "function async nomFonction()", isCorrect: false },
            { text: "async nomFonction()", isCorrect: false },
            { text: "async function nomFonction()", isCorrect: true },
            { text: "function nomFonction async()", isCorrect: false },
        ],
    },
    {
        question: "Quel est le rôle de la méthode Promise.all()?",
        answers: [
            { text: "Créer une nouvelle promesse", isCorrect: false },
            { text: "Annuler une promesse", isCorrect: false },
            { text: "Attendre que toutes les promesses soient résolues", isCorrect: true },
            { text: "Exécuter une promesse immédiatement", isCorrect: false },
        ],
    },
    {
        question: "Quelle est la sortie de 'console.log(typeof (() => {}))'?",
        answers: [
            { text: "'object'", isCorrect: false },
            { text: "'undefined'", isCorrect: false },
            { text: "'function'", isCorrect: true },
            { text: "'string'", isCorrect: false },
        ],
    },
    {
        question: "Quel est le résultat de 'console.log([1, 2, 3].every(x => x > 0))'?",
        answers: [
            { text: "false", isCorrect: false },
            { text: "undefined", isCorrect: false },
            { text: "true", isCorrect: true },
            { text: "null", isCorrect: false },
        ],
    },
    {
        question: "Comment déclare-t-on une fonction avec des paramètres par défaut?",
        answers: [
            { text: "function nomFonction(param : valeur)", isCorrect: false },
            { text: "function nomFonction(param -> valeur)", isCorrect: false },
            { text: "function nomFonction(param = valeur)", isCorrect: true },
            { text: "function nomFonction(param : default valeur)", isCorrect: false },
        ],
    },
];

export default quizData;
