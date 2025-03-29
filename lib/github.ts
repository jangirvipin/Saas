import { request, gql } from "graphql-request";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const token = process.env.GITHUB_TOKEN; // Store in .env

export async function fetchGitHubContributions(username: string) {
    if (!token) {
        throw new Error("GitHub token is not configured");
    }

    const query = gql`
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    try {
        const data: any = await request(GITHUB_GRAPHQL_API, query, { login: username }, headers);

        if (!data?.user) {
            throw new Error("User not found");
        }

        return data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
            (week: any): any => week.contributionDays
        );
    } catch (error: any) {
        console.error(`Error fetching GitHub data for user ${username}:`, error.message);
        throw new Error(`Could not fetch GitHub data: ${error.message}`);
    }
}