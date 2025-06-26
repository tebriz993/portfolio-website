import { Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIArticle() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
            
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                Research Publication
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Will Artificial Intelligence Replace Humans?
              </h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Tabriz Latifov</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>International British Congress - London, UK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Abstract</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This research explores the complex relationship between artificial intelligence and human labor, 
                      examining whether AI will replace humans entirely or create new opportunities for collaboration. 
                      Through comprehensive analysis of current trends, technological capabilities, and future projections, 
                      this paper provides insights into the evolving landscape of human-AI interaction.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p className="leading-relaxed mb-4">
                      The rapid advancement of artificial intelligence has sparked intense debate about its impact on human 
                      employment and society. As AI systems become increasingly sophisticated, questions arise about whether 
                      these technologies will complement human capabilities or ultimately render human workers obsolete.
                    </p>
                    <p className="leading-relaxed">
                      This paper examines multiple perspectives on AI's role in the future workforce, analyzing both the 
                      potential benefits and challenges that emerge from human-AI collaboration.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Current State of AI Technology</h2>
                    <p className="leading-relaxed mb-4">
                      Today's artificial intelligence systems excel in specific domains such as pattern recognition, 
                      data analysis, and automated decision-making. Machine learning algorithms have demonstrated 
                      remarkable capabilities in areas ranging from medical diagnosis to financial forecasting.
                    </p>
                    <p className="leading-relaxed">
                      However, current AI systems still lack the general intelligence, creativity, and emotional 
                      understanding that characterize human cognition. This limitation suggests that rather than 
                      complete replacement, we may see a future of human-AI collaboration.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Impact on Different Industries</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Manufacturing and Automation</h3>
                        <p className="leading-relaxed">
                          Industrial automation has already transformed manufacturing, with robots handling repetitive 
                          tasks while humans focus on oversight, maintenance, and quality control.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                        <p className="leading-relaxed">
                          AI assists in medical diagnosis and treatment planning, but human doctors remain essential 
                          for patient care, ethical decision-making, and complex medical procedures.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Creative Industries</h3>
                        <p className="leading-relaxed">
                          While AI can generate art, music, and text, human creativity, emotional intelligence, 
                          and cultural understanding continue to drive meaningful artistic expression.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Future Outlook</h2>
                    <p className="leading-relaxed mb-4">
                      The future likely holds a symbiotic relationship between humans and AI, where each contributes 
                      their unique strengths. Humans excel at creativity, empathy, ethical reasoning, and complex 
                      problem-solving, while AI provides computational power, pattern recognition, and data processing capabilities.
                    </p>
                    <p className="leading-relaxed">
                      New job categories will emerge as AI technology advances, requiring humans to adapt and develop 
                      new skills that complement artificial intelligence rather than compete with it.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                    <p className="leading-relaxed mb-4">
                      Rather than replacing humans entirely, artificial intelligence is more likely to augment human 
                      capabilities and create new opportunities for collaboration. The key to thriving in an AI-enhanced 
                      world lies in developing skills that are uniquely human while leveraging AI's computational advantages.
                    </p>
                    <p className="leading-relaxed">
                      As we continue to advance AI technology, it is crucial to maintain focus on human values, 
                      ethical considerations, and the importance of human judgment in critical decision-making processes.
                    </p>
                  </div>

                  <div className="border-t pt-6 mt-8">
                    <h2 className="text-2xl font-bold mb-4">About the Author</h2>
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">Tabriz Latifov</h3>
                        <p className="text-primary font-medium mb-2">Full Stack Software Engineer</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Computer Engineering student at Baku Engineering University with extensive experience in 
                          software development and research. Passionate about exploring the intersection of technology 
                          and human potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}