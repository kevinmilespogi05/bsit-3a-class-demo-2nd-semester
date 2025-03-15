import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    // const addUser = await prisma.user.create({
    //     data: {
    //         name: "Bob Smith",
    //         email: "bobsmith@gmail.com",
    //         age: 25,
    //         post: {
    //             create: [
    //                 {
    //                     title: "Post 1",
    //                     content: "Content 1",
    //                 },
    //                 {
    //                     title: "Post 2",
    //                     content: "Content 2",
    //                 }
    //             ]
    //         }
    //     }
    // })

    // const getAllPosts = await prisma.post.findMany()

    const deleteUserAndPosts = await prisma.user.delete({
        where: {
            userId: "f4d3e991-0e93-40ea-b42b-afb9514c7c61"
        }
    })

    console.dir(deleteUserAndPosts, { depth: null })

    // const getUserWithPosts = await prisma.user.findUnique({
    //     where: {
    //         userId: "f4d3e991-0e93-40ea-b42b-afb9514c7c61"
    //     },
    //     include: {
    //         post: true
    //     }
    // })

    // console.dir(getUserWithPosts, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })