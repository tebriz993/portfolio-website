import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Loader2 } from "lucide-react";
import { useGitHubRepos } from "@/hooks/use-github";

export function ProjectsSection() {
  const { data: repos, isLoading, error } = useGitHubRepos();

  const displayProjects = repos?.slice(0, 6) || [];

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          {isLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Loading projects from GitHub...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                Unable to load GitHub repositories at the moment.
              </p>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          )}

          {displayProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-primary to-blue-600 relative rounded-t-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Github className="h-16 w-16 text-white/80" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description || "No description available"}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {project.language && (
                            <Badge variant="outline">{project.language}</Badge>
                          )}
                          {project.topics?.slice(0, 2).map((topic) => (
                            <Badge key={topic} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                          {project.homepage && (
                            <a
                              href={project.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/tebriz993"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
