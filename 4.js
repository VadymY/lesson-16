/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {
    reverse(str){
        return str.split("").reverse().join("");
    }

    uppercaseFirst(str){
        return  str.split("")[0].toUpperCase() + str.substring(1, str.length);
    }

    uppercaseAll(str){
        let ret_arr = [];
        let arr = str.split(" ");
        for (let i = 0; i < arr.length; i++){
            ret_arr.push(arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length));
        }
        return ret_arr.join(" ");
    }
};

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;