import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const userWithPost = await prisma.user.findMany({
        include: {
            post: true
        }
    });

    console.dir(userWithPost, { depth: null });

    return;
    const user = await prisma.user.create({
        data: {
            email: "test@mail.com",
            name: "Juan Dela Cruz",
            age: 26,
            post: {
                create: [
                    {
                        title: "test1",
                        content: "123"
                    },
                    {
                        title: "test2",
                        content: "123"
                    }
                ]
            }
        }
    })
    console.log(user);
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