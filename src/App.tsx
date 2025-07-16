import React from 'react'
import { motion } from 'framer-motion'
import { Code, Download, Star, Zap, Shield, Palette, Users, ArrowRight, Play, CheckCircle, Github, Twitter, Linkedin } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'

function App() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Instant startup and blazing-fast performance with our optimized engine."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure by Design",
      description: "Built-in security features and encrypted workspace protection."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Customizable",
      description: "Themes, extensions, and layouts that adapt to your workflow."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration with live sharing and pair programming."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at Vercel",
      content: "CodeFlow has completely transformed how I write code. The AI assistance is incredible.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Lead at Stripe",
      content: "The performance improvements alone make this worth switching. Lightning fast!",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Full Stack Engineer",
      content: "Best code editor I've used in 10 years. The collaboration features are game-changing.",
      avatar: "EJ"
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["Basic editing", "Syntax highlighting", "5 projects", "Community support"],
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      features: ["Everything in Free", "AI code completion", "Unlimited projects", "Advanced debugging", "Priority support"],
      popular: true
    },
    {
      name: "Team",
      price: "$25",
      period: "per user/month",
      features: ["Everything in Pro", "Real-time collaboration", "Team workspaces", "Admin controls", "24/7 support"],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">CodeFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Download Free</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🚀 Now Available - CodeFlow 2.0
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Future of
                <br />
                Code Editing
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Experience the most advanced code editor ever built. With AI-powered assistance, 
                lightning-fast performance, and seamless collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Download className="w-5 h-5 mr-2" />
                  Download Free
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16"
            >
              <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="bg-secondary/50 rounded-lg p-6 font-mono text-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-muted-foreground">main.tsx</span>
                    </div>
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-green-400">React</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'react'</span></div>
                      <div><span className="text-blue-400">import</span> <span className="text-green-400">{ useState }</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'react'</span></div>
                      <div className="mt-4">
                        <span className="text-blue-400">function</span> <span className="text-green-400">App</span><span className="text-white">()</span> <span className="text-white">{'{'}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-400">const</span> <span className="text-white">[</span><span className="text-green-400">count</span><span className="text-white">, </span><span className="text-green-400">setCount</span><span className="text-white">] = </span><span className="text-blue-400">useState</span><span className="text-white">(</span><span className="text-orange-400">0</span><span className="text-white">)</span>
                      </div>
                      <div className="ml-4 mt-2">
                        <span className="text-blue-400">return</span> <span className="text-white">(</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-gray-400">&lt;</span><span className="text-red-400">div</span> <span className="text-green-400">className</span><span className="text-white">=</span><span className="text-yellow-400">"app"</span><span className="text-gray-400">&gt;</span>
                      </div>
                      <div className="ml-12">
                        <span className="text-gray-400">&lt;</span><span className="text-red-400">h1</span><span className="text-gray-400">&gt;</span><span className="text-white">Count: {'{'}</span><span className="text-green-400">count</span><span className="text-white">{'}'}</span><span className="text-gray-400">&lt;/</span><span className="text-red-400">h1</span><span className="text-gray-400">&gt;</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-gray-400">&lt;/</span><span className="text-red-400">div</span><span className="text-gray-400">&gt;</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-white">)</span>
                      </div>
                      <div><span className="text-white">{'}'}</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Modern Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to write, debug, and ship code faster than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See CodeFlow in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how CodeFlow transforms your development workflow with intelligent features.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Button size="lg" className="text-lg px-8 py-6">
                    <Play className="w-6 h-6 mr-2" />
                    Play Demo Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Developers Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who have already made the switch to CodeFlow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade as your needs grow. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-primary bg-card/70' : 'bg-card/50'} backdrop-blur-sm border-border/50`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Coding Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of developers who trust CodeFlow for their daily development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View on GitHub
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available for Windows, macOS, and Linux • No credit card required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">CodeFlow</span>
              </div>
              <p className="text-muted-foreground mb-4">
                The most advanced code editor for modern development teams.
              </p>
              <div className="flex space-x-4">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Download</a></li>
                <li><a href="#" className="hover:text-foreground">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">Community</a></li>
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CodeFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App