https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A9090%2F&explorerURLState=N4IgzghgbgpgJgYQPYBsUwMYBcCWSB2AknCAFwgAsFcAjDQJwDMA7ALQAcAbDDK9cwAZW9GgFY4rGDXbsIGTs3oUATBhAAacNHjI0mXAQCi%2BLACcAnsTIgaEUTGbtqrZgCMqfdo0asIMTuysrjBKAVIAZtScIAC%2BQA&referrer=operation_collections

// LINK studio.apollographq

HOW TO RUN

1:
In docker-compose.yml, config this with your environment variable and docker port
Create .env at root, add the following code to the newly created file:
DATABASE_URL="mysql://db_user:db_password@localhost:3308/db_name?schema=public"
Run with this command: $ docker-compose up -d
2:
Then - run this command to create structure of project database:
$ npx prisma migrate dev
3:
Start project:
$ yarn start
4:
Testing:

    Create User: DONT NEED AUTHORIZE
    mutation  {
        registerUser(
            fullname: "test1",
            password: "123",
            gender: "male",
            email: "test1@gmail.com",
            phonenumber: "123456",
            role: "ADMIN") {
            id
            fullname
            password
            gender
            email
            phonenumber
            role
            }
        }
    Get all user: DONT NEED AUTHORIZE
    query {
        getUser {
            fullname
            email
            gender
            phonenumber
            role
        }
    Get user by email: DONT NEED AUTHORIZE
    query {
        getUserByEmail(email: "vbvbs@gmail.com") {
            fullname
            email
            gender
            phonenumber
            role
        }
    }
    Login:
    mutation {
        loginUser(email:"test8@gmail.com",password:"123"){
            token
            userData{
            fullname
            password
            gender
            email
            phonenumber
            role
        }
    }

}

    Update user: NEED ADMIN ROLE (copy your token when login )
    mutation{
        updateUser(email:"test1@gmail.com",password:"123",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1NDY1Mjk2NiwiZXhwIjoxNjU0NzM5MzY2fQ.Cbqok4PtgRweOuMGzGK-6lDYfHPqCYAQdC3OaMNsYm4") {
            id
            fullname
            password
            gender
            email
            role
        }
    }
    Delete user: NEED ADMIN ROLE (copy your token when login )
        mutation{
        deleteUser(email:"phihasaso2419@gmail.com",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NTQ2MTI2NzAsImV4cCI6MTY1NDY5OTA3MH0.YaWQUGpIQCmpbQ0NRd44DtHYcCVRmUSiuVcaj1iCC0A"){
        message
            }
        }
    Get amount of new user register in one day
        query{
            getAmountOfNewUserOnDay(date:"2022-07-07") {
            amount
            }
        }
    Get amount of user login in one day
        query {
            getAmountOfUserActiveOnDay(date: "2022-06-08") {
            amount
        }

}

}
