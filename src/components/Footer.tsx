import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Store', path: '/store' },
    { name: 'Categories', path: '/categories' },
    { name: 'Featured', path: '/store?featured=true' },
    { name: 'New Arrivals', path: '/store?new=true' },
  ],
  company: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Licensing', path: '/licensing' },
    { name: 'Terms of Service', path: '/terms' },
  ],
  categories: [
    { name: 'Cars', path: '/categories/cars' },
    { name: 'Weapons', path: '/categories/weapons' },
    { name: 'Buildings', path: '/categories/buildings' },
    { name: 'Characters', path: '/categories/characters' },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-display font-bold gradient-text">
                icanmake3d
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Premium 3D assets crafted for creators. High-quality, game-ready models for your next project.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/icanmake3d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@icanmake3d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} icanmake3d. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
