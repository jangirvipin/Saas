import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create users
    const user1 = await prisma.user.upsert({
        where: { githubId: 'github_123' },
        update: {},
        create: {
            username: 'alice_dev',
            githubId: 'github_123',
        },
    });

    const user2 = await prisma.user.upsert({
        where: { githubId: 'github_456' },
        update: {},
        create: {
            username: 'bob_coder',
            githubId: 'github_456',
        },
    });

    // Create contributions
    await prisma.contribution.createMany({
        data: [
            {
                id: 'contrib_1',
                userId: user1.id,
                title: 'Fix navbar issue',
                about: 'Fixed alignment issues in the navbar',
                repoUrl: 'https://github.com/example/project',
                prUrl: 'https://github.com/example/project/pull/1',
                company: 'Open Source Org',
                difficulty: 'EASY',
                description: 'Simple CSS fixes',
                status: 'APPROVED',
                contributionType: 'Open-Source',
                skill: 'CSS, HTML',
            },
            {
                id: 'contrib_2',
                userId: user2.id,
                title: 'Implement API caching',
                about: 'Added Redis caching for better performance',
                repoUrl: 'https://github.com/example/api',
                prUrl: 'https://github.com/example/api/pull/42',
                company: 'Tech Startup',
                difficulty: 'HARD',
                description: 'Improved response times using Redis',
                status: 'PENDING',
                contributionType: 'Startup',
                skill: 'Node.js, Redis',
            },
        ],
        skipDuplicates: true, // Prevent duplicate inserts
    });

    console.log('✅ Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
