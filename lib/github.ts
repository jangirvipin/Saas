import { request, gql } from "graphql-request";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const token = process.env.GITHUB_TOKEN; // Store in .env

export async function fetchGitHubContributions(username: string) {
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

    const data:any = await request(GITHUB_GRAPHQL_API, query, { login: username }, headers);

    return data.user.contributionsCollection.contributionCalendar.weeks.flatMap((week:any):any=> week.contributionDays);
}
