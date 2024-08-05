// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//     num > 4;
// });

// const newNums = [];

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(newNums);

const books = [
    { name: "Book 1", genre: "Genre 1", publishYear: 2001 },
    { name: "Book 2", genre: "Genre 2", publishYear: 2002 },
    { name: "Book 3", genre: "Genre 3", publishYear: 2003 },
    { name: "Book 4", genre: "Genre 4", publishYear: 2004 },
    { name: "Book 5", genre: "Genre 5", publishYear: 2005 },
];

const userBooks = books.filter((bk) => {
    return bk.genre == "History";
});
