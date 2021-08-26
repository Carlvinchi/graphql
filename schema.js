import { buildSchema } from "graphql";

const schema = buildSchema(`
        type Post {
            userId: Int
            id: Int
            title: String
            body: String
        }


        type Course {
            id: ID
            courseName: String
            category: String
            price: Int
            language: String
            email: String
            techStack: Stack
            teachingAssists: [TeachingAssist]
        }

        type TeachingAssist {
            firstName: String
            lastName: String
            Experience: Int
        }

        enum Stack {
            WEB
            MOBILE
            OTHER
        }
        
        type Query {
            getCourse(id: ID): Course
            getPostFromAPI: [Post]
        }

        input CourseInput {
            id: ID
            courseName: String!
            category: String
            price: Int!
            language: String
            email: String
            techStack: Stack
            teachingAssists: [TeachingAssistInput]
        }

        input TeachingAssistInput  {
            firstName: String
            lastName: String
            Experience: Int
        }

        type Mutation {
            createCourse(input: CourseInput): Course
        }
`);

/*
aY5l6JG-VMYPg21khOKwS
mutation{
  createCourse(input: {
    courseName: "Intro to graphQL" 
    price: 50
    techStack: WEB
    teachingAssists: [
      {
      firstName: "Confi"
      lastName: "Antwi"
      Experience: 2
    },
      {
        firstName: "Mick"
        lastName: "Vicki"
        Experience: 4
      } 
    ]
  }){
    id
    courseName
  }
}

query{
  getCourse(id: "qTUq95HVFTDpqRd57zdJg"){
    id
    courseName
    teachingAssists{
      Experience
    } 
  }
}
M5tJbBhqpqu7IyJVrruf9
ObUPEJYy2RIdYebonQ6xW
mutation{
  createCourse(input: {
    courseName: "Intro to SE" 
    price: 100
    techStack: MOBILE
    teachingAssists: [
      {
      firstName: "Jephi"
      lastName: "Kay"
      Experience: 7
    },
      {
        firstName: "Gad"
        lastName: "Sey"
        Experience: 3
      } 
    ]
  }){
    id
    courseName
    teachingAssists{
      firstName
      Experience
    }
  }
}

query{
  getPostFromAPI{
    id
    body
  }
}

*/


export default schema