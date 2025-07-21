const AdobeGrant = () => {
  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
      color: '#e5e7eb'
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
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="flex items-center space-x-4">
                  {/* 371 Minds Logo */}
                  <div className="relative w-24 h-16 flex items-center justify-center">
                    <img src="371Minds.png" alt="371 Minds Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-4xl font-bold text-white">371 MINDS</h1>
                    <p className="text-lg text-gray-300">Enterprise Intelligence Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-gradient text-transparent bg-clip-text">
              <h1 className="text-6xl font-bold mb-4">BrandMind</h1>
              <h2 className="text-3xl font-semibold mb-6">for Adobe Express</h2>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AI-Powered Brand Intelligence Integration
            </p>
            <p className="text-lg text-gray-400 mt-4">Adobe Fund for Design - Grant Application Support Document</p>
          </div>
        </div>
      </div>

      {/* Executive Summary & Problem */}
      <div className="section">
        <div className="container mx-auto px-8">
          <div className="card rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="highlight-text">Executive Summary</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">The Enterprise Brand Compliance Crisis</h3>
                <div className="space-y-4 text-lg">
                  <p className="text-gray-300">Enterprise marketing teams face a critical challenge: maintaining brand consistency while enabling creative freedom.</p>
                  <div className="metric-card rounded-xl p-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">$2.1M</div>
                    <p className="text-gray-300">Annual cost of brand inconsistency per enterprise</p>
                  </div>
                  <div className="metric-card rounded-xl p-6">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">73%</div>
                    <p className="text-gray-300">Of marketing teams struggle with brand compliance tools</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">The BrandMind Solution</h3>
                <div className="space-y-4 text-lg text-gray-300">
                  <p>BrandMind transforms brand compliance from a creative constraint into a creative catalyst through intelligent template systems with:</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-lock text-red-400"></i>
                      <span>Zone-based editing controls</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-users text-blue-400"></i>
                      <span>Role-based permissions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-brain text-purple-400"></i>
                      <span>Real-time AI compliance validation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-mouse-pointer text-green-400"></i>
                      <span>Drag-and-drop approved brand assets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BrandMind Platform - Market Validation */}
      <div className="section">
        <div className="container mx-auto px-8">
          <div className="card rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="highlight-text">Platform Foundation</span> & Market Validation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="metric-card rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">✓ Built</div>
                <h4 className="text-xl font-semibold text-white mb-2">Proven Technology</h4>
                <p className="text-gray-300">Full BrandMind platform demonstrates our technical capabilities and enterprise-grade thinking</p>
              </div>
              <div className="metric-card rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">✓ Validated</div>
                <h4 className="text-xl font-semibold text-white mb-2">Market Demand</h4>
                <p className="text-gray-300">Enterprise feedback confirms strong demand for intelligent brand compliance solutions</p>
              </div>
              <div className="metric-card rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-4">✓ Ready</div>
                <h4 className="text-xl font-semibold text-white mb-2">Adobe Integration</h4>
                <p className="text-gray-300">BrandMind platform has fully functing Adobe Express API integration. Ready to build inside Adobe Express Add-Ons.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Strategic Positioning</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Existing Platform</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Comprehensive brand management suite</li>
                    <li>• Enterprise customer validation</li>
                    <li>• Standalone SaaS revenue model</li>
                    <li>• Platform-agnostic architecture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Proposed Adobe Add-on</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Focused creative workflow integration</li>
                    <li>• Adobe Express marketplace distribution</li>
                    <li>• Freemium adoption model</li>
                    <li>• Strategic partnership opportunity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adobe Express Add-on - Technical Vision */}
      <div className="section">
        <div className="container mx-auto px-8">
          <div className="card rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="highlight-text">Adobe Express Integration</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Technical Architecture</h3>
                <div className="space-y-4">
                  <div className="tech-badge rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">AddOnData API</h4>
                    <p className="text-gray-300 text-sm">Store template rules and brand guidelines with persistent metadata</p>
                  </div>
                  <div className="tech-badge rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Document Change Detection</h4>
                    <p className="text-gray-300 text-sm">Real-time compliance monitoring and validation</p>
                  </div>
                  <div className="tech-badge rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-2">Text Styling APIs</h4>
                    <p className="text-gray-300 text-sm">Enforce brand-approved fonts, colors, and formatting</p>
                  </div>
                  <div className="tech-badge rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-400 mb-2">OAuth Integration</h4>
                    <p className="text-gray-300 text-sm">Connect to external brand asset libraries and user management</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">User Experience Flow</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Create in Express</h4>
                      <p className="text-gray-300 text-sm">User creates content (flyer, social post, presentation)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-white">AI Analysis</h4>
                      <p className="text-gray-300 text-sm">BrandMind analyzes document against brand guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Smart Feedback</h4>
                      <p className="text-gray-300 text-sm">Real-time compliance score and improvement suggestions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-white">Auto-Fix</h4>
                      <p className="text-gray-300 text-sm">One-click compliance corrections or manual adjustments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Feasibility Validation</h3>
              <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto">
                We have successfully prototyped core functionality in Adobe's APIs, demonstrating zone controls, compliance checking, and asset integration. The technical foundation is proven and ready for production development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Opportunity & Business Model */}
      <div className="section">
        <div className="container mx-auto px-8">
          <div className="card rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="highlight-text">Market Opportunity</span> & Business Model
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="metric-card rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">$127B</div>
                <h4 className="text-xl font-semibold text-white mb-2">Creative Software Market</h4>
                <p className="text-gray-300">Global market size growing at 8.5% CAGR, driven by enterprise digital transformation</p>
              </div>
              <div className="metric-card rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">$2.1M</div>
                <h4 className="text-xl font-semibold text-white mb-2">Brand Inconsistency Cost</h4>
                <p className="text-gray-300">Annual cost per enterprise from poor brand compliance and creative workflow inefficiencies</p>
              </div>
              <div className="metric-card rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-4">73%</div>
                <h4 className="text-xl font-semibold text-white mb-2">Market Gap</h4>
                <p className="text-gray-300">Of enterprises lack effective brand compliance tools for their creative teams</p>
              </div>
            </div>
            
            {/* Add the rest of the Market Opportunity content here, continuing from the original HTML */}
          </div>
        </div>
      </div>

      {/* Team & Execution Capability */}
      <div className="section">
        <div className="container mx-auto px-8">
          <div className="card rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="highlight-text">Team & Execution</span> Capability
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Leadership Team</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Enterprise Intelligence Expertise</h4>
                    <p className="text-gray-300 mb-3">15+ years experience designing and implementing enterprise knowledge systems for Fortune 500 companies.</p>
                    <div className="flex items-center space-x-2">
                      <span className="tech-badge px-3 py-1 rounded-full text-xs">Enterprise Architecture</span>
                      <span className="tech-badge px-3 py-1 rounded-full text-xs">Knowledge Systems</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-green-400 mb-3">Digital Transformation Expertise</h4>
                    <p className="text-gray-300 mb-3">Led enterprise digital transformation initiatives, specializing in API-driven knowledge systems that bridge organizational gaps.</p>
                    <div className="flex items-center space-x-2">
                      <span className="tech-badge px-3 py-1 rounded-full text-xs">API Architecture</span>
                      <span className="tech-badge px-3 py-1 rounded-full text-xs">Enterprise Integration</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-purple-400 mb-3">Platform Development</h4>
                    <p className="text-gray-300 mb-3">3+ years focused development experience building scalable SaaS platforms with modern web technologies and AI integration.</p>
                    <div className="flex items-center space-x-2">
                      <span className="tech-badge px-3 py-1 rounded-full text-xs">React/TypeScript</span>
                      <span className="tech-badge px-3 py-1 rounded-full text-xs">SaaS Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Execution Evidence</h3>
                <div className="space-y-6">
                  <div className="metric-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">BrandMind Platform</h4>
                      <span className="bg-green-500 text-black px-2 py-1 rounded-full text-xs font-bold">BUILT</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Professional-grade brand management interface with enterprise-level UX/UI design and functionality.</p>
                    <div className="text-blue-400 text-sm font-medium">
                      <i className="fas fa-external-link-alt mr-2"></i>
                      preview--brandmind-creative-compass.lovable.app
                    </div>
                  </div>
                  
                  <div className="metric-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">371 Minds Ecosystem</h4>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">IN-PROGRESS</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Comprehensive enterprise intelligence platform including StackSense, ModuMind, and BrandMind solutions.</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Multi-product platform architecture</li>
                      <li>• Enterprise customer validation</li>
                      <li>• Scalable business model</li>
                    </ul>
                  </div>
                  
                  <div className="metric-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Technical Prototyping</h4>
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">VALIDATED</span>
                    </div>
                    <p className="text-gray-300 text-sm">Adobe Express Add-on core functionality successfully prototyped in Code Playground, proving technical feasibility.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Unique Value Proposition</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Unlike typical development teams, we combine <span className="highlight-text">deep enterprise systems expertise</span> with <span className="highlight-text">proven execution ability</span> and <span className="highlight-text">validated market understanding</span>. This isn't just another add-on - it's enterprise-grade brand intelligence built by a team that understands how large organizations actually work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Vision & Timeline */}
      <div className="section">
        <div className="container mx-auto px-8">
          <div className="card rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="highlight-text">Strategic Partnership</span> & Timeline
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Adobe Partnership Vision</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Market Expansion</h4>
                    <p className="text-gray-300">Transform Adobe Express into the enterprise creative platform of choice by solving the #1 barrier to adoption: brand compliance.</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Ecosystem Growth</h4>
                    <p className="text-gray-300">Establish Adobe as the leader in AI-powered creative governance, setting the standard for intelligent design tools.</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Revenue Enhancement</h4>
                    <p className="text-gray-300">Create new high-value enterprise revenue streams while increasing platform stickiness and user engagement.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Development Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold">July</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Core Development</h4>
                      <p className="text-gray-300">AI analysis engine, compliance scoring, and zone-based controls</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-bold">Aug</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Beta Testing</h4>
                      <p className="text-gray-300">Enterprise customer validation, UI refinement, and performance optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold">Sept</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Marketplace Launch</h4>
                      <p className="text-gray-300">Adobe Express marketplace deployment with full feature set</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold">Oct</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Growth & Scale</h4>
                      <p className="text-gray-300">Enterprise sales enablement and go-to-market acceleration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Success Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">1K+</div>
                  <p className="text-gray-300 text-sm">Active Users by Month 3</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">15%</div>
                  <p className="text-gray-300 text-sm">Premium Conversion Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">25</div>
                  <p className="text-gray-300 text-sm">Enterprise Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.5+</div>
                  <p className="text-gray-300 text-sm">Marketplace Rating</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Transform Brand Compliance from 
                <span className="text-red-400">Creative Constraint</span> to 
                <span className="highlight-text">Creative Catalyst</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                BrandMind for Adobe Express represents more than just an add-on - it's a strategic partnership opportunity to establish Adobe as the definitive leader in AI-powered creative governance.
              </p>
              <div className="brand-gradient rounded-xl p-8">
                <p className="text-2xl font-bold text-white">
                  Ready to revolutionize enterprise creativity together?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="relative w-24 h-16 flex items-center justify-center">
            <img src="371Minds.png" alt="371 Minds Logo" className="max-w-full max-h-full object-contain" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">371 MINDS</p>
            <p className="text-sm text-gray-400">Enterprise Intelligence Solutions</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">© 2025 371 Minds. Adobe Fund for Design Grant Application.</p>
      </div>
    </div>
  );
};

export default AdobeGrant;