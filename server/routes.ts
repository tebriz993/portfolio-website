import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy endpoint
  app.get("/api/github/repos", async (req, res) => {
    try {
      const response = await fetch(
        "https://api.github.com/users/tebriz993/repos?sort=updated&per_page=20",
        {
          headers: {
            "User-Agent": "Portfolio-Website",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();
      
      // Filter out forks and sort by stars/activity
      const filteredRepos = repos
        .filter((repo: any) => !repo.fork)
        .sort((a: any, b: any) => {
          // Sort by stars first, then by update date
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

      res.json(filteredRepos);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      res.status(500).json({ 
        error: "Failed to fetch repositories",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
