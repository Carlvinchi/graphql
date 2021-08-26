import { nanoid } from "nanoid";

import axios from "axios";

// A simple class to serve as a data source or pseudo database
class Course {
    constructor(id, {courseName, category,price, language, email, techStack,teachingAssists})
    { 
         this.id = id
         this.courseName = courseName
         this.category = category
         this.price = price
         this.language = language
         this.email = email
         this.techStack = techStack
         this.teachingAssists = teachingAssists
    }

}

// a holder for the inputs we will pass
const courseHolder = {} 


const resolvers = {
    getCourse : ({ id }) => {
        console.log(courseHolder)
        return new Course(id, courseHolder[id])
    },
    
    createCourse: ({ input }) => {
        let id = nanoid() 
        // store inputs at an index with id as the index value or key 
        courseHolder[id] = input
        
        // return a new course object
        return new Course(id,input)
    },

    getPostFromAPI: async() => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return result.data
    }

}

export default resolvers