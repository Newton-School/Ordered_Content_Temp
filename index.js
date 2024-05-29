// There is a file named newton.txt in the root directory that already contains some text. 
// Two pieces of content need to be appended to this file. The first piece of content (content1) is shorter than the second one (content2).
// However, the order of the appended content is not preserved. Fix the issue to ensure that content1 is appended first, 
// followed by content2, maintaining the correct order.



const fs = require("fs")
const path = require("path")



const filePath = path.join(__dirname, "./newton.txt")

const content1 = "Bob Striv"
const content2 = ` In the heart of a bustling city, there stood an ancient library that had witnessed
    countless generations come and go. This library, known as the Grand Archives, was
    a treasure trove of knowledge, its shelves lined with books that spanned every 
    conceivable subject. From ancient manuscripts and historical records to the latest scientific journals, 
    the Grand Archives held it all. The building itself was a marvel of architecture, with towering columns, 
    intricate carvings, and vast stained-glass windows that cast colorful patterns of light on the marble floors.`



fs.appendFile(filePath, content2, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("written successfully content2")
    }
})

fs.appendFile(filePath, content1, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("written successfully content1")
    }
})

// answer 
// use appendfile synchronously
// try {

//     fs.appendFileSync(filePath, content2)
// } catch (error) {
//     console.log(error);
// }

// try {
//     fs.appendFileSync(filePath, content1)
// }
// catch(error){
//     console.log(error)
// }