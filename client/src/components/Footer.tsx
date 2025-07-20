export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-background text-foreground rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BrandMind</h3>
                <p className="text-sm opacity-80">Intelligent Template Systems</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md">
              Empowering teams to maintain brand integrity while enabling creative freedom 
              through intelligent template systems and real-time compliance checking.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Templates</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Integrations</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 BrandMind. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-80 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};