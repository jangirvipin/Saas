# GitHub Showcase


<p align="center">
  A platform for developers to showcase their open source contributions.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#api-routes">API Routes</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## Features

🌟 **Share Your Contributions** - Showcase your open source contributions with the community

🔍 **Discover Others' Work** - Browse contributions from other developers

📊 **GitHub Integration** - Connect with GitHub to display your contribution statistics

👥 **Community Recognition** - Get feedback and recognition for your open source work

🏷️ **Categorization** - Organize contributions by difficulty, type, and skills

⚡ **Modern Tech Stack** - Built with Next.js, Prisma, and PostgreSQL

## Tech Stack

- **Frontend**: Next.js with TypeScript, Tailwind CSS, and ShadCN UI
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: GitHub OAuth
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v20+)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-showcase.git
   cd github-showcase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables (see [Environment Variables](#environment-variables))

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file with the following variables:

```
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/github_showcase"

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Next Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitHub API
GITHUB_TOKEN=your_github_personal_access_token
```

## Screenshots

<p align="center">
  <img src="/api/placeholder/800/450" alt="Dashboard" />
  <em>Dashboard view showing recent contributions</em>
</p>

<p align="center">
  <img src="/api/placeholder/800/450" alt="Profile page" />
  <em>User profile with GitHub activity visualization</em>
</p>

<p align="center">
  <img src="/api/placeholder/800/450" alt="Contribution details" />
  <em>Detailed view of a contribution</em>
</p>

## API Routes

### Authentication

- `GET /api/auth/[...nextauth]` - NextAuth authentication routes

### Contributions

- `GET /api/contributions` - Get all approved contributions
- `GET /api/contributions/:id` - Get a specific contribution
- `POST /api/contributions` - Create a new contribution
- `PUT /api/contributions/:id` - Update a contribution
- `DELETE /api/contributions/:id` - Delete a contribution

### Users

- `GET /api/users/:username` - Get user profile
- `GET /api/users/:username/contributions` - Get user's contributions

## Database Schema

The application uses the following database schema:

```prisma
model User {
  id            String         @id @default(cuid())
  username      String         @unique
  githubId      String         @unique
  createdAt     DateTime       @default(now())
  contributions Contribution[]
}

model Contribution {
  id               String     @id @default(cuid())
  user             User       @relation(fields: [userId], references: [id])
  userId           String
  title            String
  about            String
  repoUrl          String
  prUrl            String
  company          String?
  difficulty       Difficulty
  description      String     @default("")
  status           Status     @default(PENDING)
  createdAt        DateTime   @default(now())
  updatedAt        DateTime   @updatedAt
  contributionType String
  skill            String
}

enum Status {
  PENDING
  APPROVED
  REJECTED
}

enum Difficulty {
  EASY
  MODERATE
  HARD
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [GitHub API](https://docs.github.com/en/graphql)

---

<p align="center">
  Made with ❤️ by Vipin
</p>