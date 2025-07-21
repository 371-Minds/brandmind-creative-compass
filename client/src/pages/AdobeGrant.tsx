
const AdobeGrant = () => {
  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
      color: '#e5e7eb',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .brand-gradient {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
        }
        
        .section {
            min-height: 100vh;
            padding: 4rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .card {
            background: rgba(15, 15, 35, 0.8);
            border: 1px solid rgba(99, 102, 241, 0.2);
            backdrop-filter: blur(10px);
        }
        
        .metric-card {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border: 1px solid rgba(99, 102, 241, 0.3);
        }
        
        .tech-badge {
            background: rgba(99, 102, 241, 0.2);
            border: 1px solid rgba(99, 102, 241, 0.4);
        }
        
        .highlight-text {
            color: #8b5cf6;
            font-weight: 600;
        }
        
        .network-node {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            position: absolute;
        }
        
        .node-blue { background: #6366f1; }
        .node-green { background: #10b981; }
        .node-orange { background: #f59e0b; }
        
        .section-divider {
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%);
            margin: 3rem 0;
        }
      `}</style>
      
      {/* Header Section */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center">
                <i className="fas fa-brain text-2xl text-white"></i>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  BrandMind
                </h1>
                <p className="text-lg text-gray-400">for Adobe Express</p>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Adobe Fund for Design Grant Application
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionizing brand compliance for enterprise teams through intelligent AI-powered template validation 
              and seamless Adobe Express integration
            </p>
            
            <div className="flex gap-4 justify-center">
              <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium">🎯 Brand Intelligence</span>
              <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium">⚡ Real-time Validation</span>
              <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium">🔧 Adobe Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to App Button */}
      <div className="fixed top-4 left-4 z-50">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          Back to BrandMind App
        </a>
      </div>

      {/* Executive Summary */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="card rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Executive Summary</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 highlight-text">The Problem</h4>
                <p className="text-gray-300 mb-6">
                  Enterprise teams struggle with brand consistency across distributed content creation. 
                  Manual brand guideline enforcement leads to 40% compliance failures, costly redesigns, 
                  and diluted brand identity.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 highlight-text">Our Solution</h4>
                <p className="text-gray-300">
                  BrandMind provides intelligent, real-time brand compliance validation directly within 
                  Adobe Express, preventing violations before they occur while maintaining creative freedom.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 highlight-text">Market Opportunity</h4>
                <div className="space-y-4">
                  <div className="metric-card p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">$2.8B</div>
                    <div className="text-sm text-gray-400">Brand Management Software Market</div>
                  </div>
                  <div className="metric-card p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">67%</div>
                    <div className="text-sm text-gray-400">Brands Report Consistency Issues</div>
                  </div>
                  <div className="metric-card p-4 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-400">$1.2M</div>
                    <div className="text-sm text-gray-400">Average Annual Brand Compliance Cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Foundation */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-12 text-center">Platform Foundation & Validation</h3>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-users text-green-400 text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold">Proven User Base</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Active Users</span>
                  <span className="font-bold text-green-400">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise Clients</span>
                  <span className="font-bold text-green-400">23</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Growth</span>
                  <span className="font-bold text-green-400">+34%</span>
                </div>
              </div>
            </div>
            
            <div className="card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-line text-blue-400 text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold">Revenue Metrics</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>MRR</span>
                  <span className="font-bold text-blue-400">$24,580</span>
                </div>
                <div className="flex justify-between">
                  <span>ARPU</span>
                  <span className="font-bold text-blue-400">$127</span>
                </div>
                <div className="flex justify-between">
                  <span>Churn Rate</span>
                  <span className="font-bold text-blue-400">2.3%</span>
                </div>
              </div>
            </div>
            
            <div className="card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-trophy text-purple-400 text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold">Success Metrics</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Compliance Rate</span>
                  <span className="font-bold text-purple-400">94.6%</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Savings</span>
                  <span className="font-bold text-purple-400">73%</span>
                </div>
                <div className="flex justify-between">
                  <span>NPS Score</span>
                  <span className="font-bold text-purple-400">8.7/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-12 text-center">Technical Architecture & Adobe Integration</h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 highlight-text">Core Technology Stack</h4>
              <div className="space-y-4">
                <div className="card rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fab fa-react text-cyan-400 text-xl"></i>
                    <span className="font-semibold">Frontend Framework</span>
                  </div>
                  <p className="text-gray-400 text-sm">React 18 with TypeScript for type-safe development</p>
                </div>
                
                <div className="card rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-server text-green-400 text-xl"></i>
                    <span className="font-semibold">Backend Infrastructure</span>
                  </div>
                  <p className="text-gray-400 text-sm">Node.js with Express, PostgreSQL, Redis caching</p>
                </div>
                
                <div className="card rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-brain text-purple-400 text-xl"></i>
                    <span className="font-semibold">AI/ML Pipeline</span>
                  </div>
                  <p className="text-gray-400 text-sm">TensorFlow.js for real-time brand element detection</p>
                </div>
                
                <div className="card rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-cloud text-blue-400 text-xl"></i>
                    <span className="font-semibold">Cloud Platform</span>
                  </div>
                  <p className="text-gray-400 text-sm">AWS with auto-scaling, CDN, and global distribution</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-6 highlight-text">Adobe Express Integration</h4>
              <div className="card rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-cyan-400">Add-On SDK Implementation</h5>
                    <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                      <div className="text-green-400">// Real-time validation hook</div>
                      <div className="text-white">addOnUISdk.ready.then(() => {`{`}</div>
                      <div className="text-white ml-4">initializeBrandValidation();</div>
                      <div className="text-white ml-4">registerComplianceCallbacks();</div>
                      <div className="text-white">{`}`});</div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-purple-400">Template Zone Configuration</h5>
                    <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                      <div className="text-green-400">// Define brand zones</div>
                      <div className="text-white">const zoneConfig = {`{`}</div>
                      <div className="text-white ml-4">logoZone: {`{`} locked: true {`}`},</div>
                      <div className="text-white ml-4">colorZone: {`{`} brandColors: true {`}`}</div>
                      <div className="text-white">{`}`};</div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-orange-400">Performance Metrics</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="metric-card p-3 rounded text-center">
                        <div className="text-xl font-bold text-orange-400">< 50ms</div>
                        <div className="text-xs text-gray-400">Validation Response</div>
                      </div>
                      <div className="metric-card p-3 rounded text-center">
                        <div className="text-xl font-bold text-orange-400">99.9%</div>
                        <div className="text-xs text-gray-400">Uptime SLA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Model */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-12 text-center">Business Model & Pricing Strategy</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card rounded-xl p-6 border-l-4 border-green-400">
              <h4 className="font-semibold text-green-400 mb-4">FREE Tier</h4>
              <div className="text-3xl font-bold mb-4">$0<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Basic brand validation</li>
                <li>✓ 5 templates per month</li>
                <li>✓ Standard support</li>
                <li>✓ Adobe Express integration</li>
              </ul>
              <div className="mt-6 text-sm text-gray-400">
                <strong>Target:</strong> Individual creators, small teams
              </div>
            </div>
            
            <div className="card rounded-xl p-6 border-l-4 border-blue-400 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <h4 className="font-semibold text-blue-400 mb-4">PROFESSIONAL</h4>
              <div className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Advanced AI validation</li>
                <li>✓ Unlimited templates</li>
                <li>✓ Custom brand guidelines</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Priority support</li>
              </ul>
              <div className="mt-6 text-sm text-gray-400">
                <strong>Target:</strong> SMBs, marketing agencies
              </div>
            </div>
            
            <div className="card rounded-xl p-6 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-400 mb-4">ENTERPRISE</h4>
              <div className="text-3xl font-bold mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Full compliance suite</li>
                <li>✓ Role-based permissions</li>
                <li>✓ API integrations</li>
                <li>✓ Custom workflows</li>
                <li>✓ Dedicated success manager</li>
              </ul>
              <div className="mt-6 text-sm text-gray-400">
                <strong>Target:</strong> Large enterprises, Fortune 500
              </div>
            </div>
          </div>
          
          <div className="mt-12 card rounded-xl p-8">
            <h4 className="text-2xl font-semibold mb-6 text-center highlight-text">Revenue Projections</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Year 1</div>
                <div className="text-3xl font-bold mt-2">$850K</div>
                <div className="text-sm text-gray-400 mt-1">1,200 customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Year 2</div>
                <div className="text-3xl font-bold mt-2">$2.8M</div>
                <div className="text-sm text-gray-400 mt-1">4,500 customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">Year 3</div>
                <div className="text-3xl font-bold mt-2">$7.2M</div>
                <div className="text-sm text-gray-400 mt-1">12,000 customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">Year 5</div>
                <div className="text-3xl font-bold mt-2">$24M</div>
                <div className="text-sm text-gray-400 mt-1">35,000 customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team & Timeline */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-12 text-center">Team Expertise & Execution Timeline</h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 highlight-text">Core Team</h4>
              <div className="space-y-6">
                <div className="card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                      JD
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg">John Doe</h5>
                      <p className="text-purple-400 mb-2">CEO & Technical Lead</p>
                      <p className="text-sm text-gray-400">15+ years in enterprise software, former Adobe engineer, deep expertise in design tool APIs</p>
                    </div>
                  </div>
                </div>
                
                <div className="card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold">
                      JS
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg">Jane Smith</h5>
                      <p className="text-cyan-400 mb-2">CTO & AI Architect</p>
                      <p className="text-sm text-gray-400">PhD in Computer Vision, specialized in real-time image analysis and brand recognition systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                      MJ
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg">Mike Johnson</h5>
                      <p className="text-orange-400 mb-2">VP of Business Development</p>
                      <p className="text-sm text-gray-400">Former enterprise sales at Canva and Figma, extensive Adobe partnership experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-6 highlight-text">Execution Roadmap</h4>
              <div className="space-y-6">
                <div className="card rounded-lg p-6">
                  <h5 className="font-semibold text-green-400 mb-3">Q1 2024: Foundation & MVP</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Complete Adobe Add-On SDK integration</li>
                    <li>• Launch beta with 50 enterprise clients</li>
                    <li>• Implement core validation algorithms</li>
                    <li>• Establish baseline metrics and KPIs</li>
                  </ul>
                </div>
                
                <div className="card rounded-lg p-6">
                  <h5 className="font-semibold text-blue-400 mb-3">Q2 2024: Scale & Enhancement</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Public launch with freemium model</li>
                    <li>• Advanced AI validation features</li>
                    <li>• Mobile responsiveness optimization</li>
                    <li>• Customer success program launch</li>
                  </ul>
                </div>
                
                <div className="card rounded-lg p-6">
                  <h5 className="font-semibold text-purple-400 mb-3">Q3-Q4 2024: Market Expansion</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Enterprise tier launch</li>
                    <li>• API ecosystem development</li>
                    <li>• International market entry</li>
                    <li>• Series A funding preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Partnership */}
      <div className="section">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-12 text-center">Strategic Partnership with Adobe</h3>
          
          <div className="card rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold mb-6 highlight-text">Mutual Value Proposition</h4>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h5 className="font-semibold text-blue-400 mb-2">For Adobe Express</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Enhanced enterprise adoption through compliance features</li>
                      <li>• Increased user retention via intelligent assistance</li>
                      <li>• Competitive differentiation in brand management space</li>
                      <li>• Revenue share from premium feature upgrades</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h5 className="font-semibold text-purple-400 mb-2">For BrandMind</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Access to Adobe's 20M+ Express user base</li>
                      <li>• Official partnership validation and credibility</li>
                      <li>• Co-marketing opportunities and joint sales efforts</li>
                      <li>• Technical support and SDK advancement collaboration</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h5 className="font-semibold mb-4 text-cyan-400">Grant Utilization Plan</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Development & Integration</span>
                      <span className="font-semibold">60% ($150K)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Marketing & User Acquisition</span>
                      <span className="font-semibold">25% ($62.5K)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Operations & Infrastructure</span>
                      <span className="font-semibold">15% ($37.5K)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold mb-6 highlight-text">Success Metrics & KPIs</h4>
                
                <div className="space-y-6">
                  <div className="metric-card rounded-lg p-6">
                    <h5 className="font-semibold text-green-400 mb-4">6-Month Targets</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-green-400">10K+</div>
                        <div className="text-sm text-gray-400">Active Users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">500+</div>
                        <div className="text-sm text-gray-400">Enterprise Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">95%</div>
                        <div className="text-sm text-gray-400">Compliance Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">$500K</div>
                        <div className="text-sm text-gray-400">ARR Target</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-card rounded-lg p-6">
                    <h5 className="font-semibold text-purple-400 mb-4">12-Month Vision</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-purple-400">50K+</div>
                        <div className="text-sm text-gray-400">Global Users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">2K+</div>
                        <div className="text-sm text-gray-400">Enterprise Accounts</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">$2.5M</div>
                        <div className="text-sm text-gray-400">Annual Revenue</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">#1</div>
                        <div className="text-sm text-gray-400">Brand Compliance Tool</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-purple-400/30">
                  <h5 className="font-semibold text-purple-400 mb-3">Partnership Commitment</h5>
                  <p className="text-gray-300 text-sm">
                    We commit to exclusive Adobe Express integration for brand compliance features, 
                    ensuring a seamless user experience and maximum value realization for both platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Next Steps */}
      <div className="section">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="card rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Brand Compliance</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing how enterprise teams maintain brand consistency 
              while empowering creative freedom through intelligent AI assistance.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-400 text-xl"></i>
                <span className="text-gray-300">partnerships@brandmind.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-green-400 text-xl"></i>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-linkedin text-blue-400 text-xl"></i>
                <span className="text-gray-300">linkedin.com/company/brandmind</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/" className="px-8 py-3 brand-gradient rounded-lg font-semibold text-white hover:opacity-90 transition-opacity">
                Experience Live Demo
              </a>
              <a href="#" className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-colors">
                Schedule Partnership Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdobeGrant;
