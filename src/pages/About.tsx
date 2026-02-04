import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Instagram, Youtube, Sparkles, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              About{' '}
              <span className="gradient-text">icanmake3d</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're a passionate team of 3D artists dedicated to creating premium, 
              game-ready assets for creators worldwide.
            </p>
          </motion.div>

          {/* Mission cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              {
                icon: Sparkles,
                title: 'Quality First',
                description: 'Every model is crafted with attention to detail, optimized topology, and professional-grade PBR textures.',
              },
              {
                icon: Lightbulb,
                title: 'Creator Focused',
                description: 'We understand what creators need — game-ready assets that work seamlessly in modern engines.',
              },
              {
                icon: Rocket,
                title: 'Always Innovating',
                description: 'Constantly exploring new techniques and styles to bring you the most cutting-edge 3D assets.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center gradient-border"
              >
                <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-2xl flex items-center justify-center glow-primary">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Story section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  icanmake3d was born from a simple belief: every creator deserves access to 
                  high-quality 3D assets without breaking the bank. What started as a personal 
                  project has grown into a curated marketplace of premium 3D models.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Using Blender as our primary tool, we craft every model with the same care 
                  and attention we'd want in our own projects. From sleek vehicles to detailed 
                  characters, each asset is optimized for real-time rendering while maintaining 
                  visual fidelity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're an indie game developer, a digital artist, or a visualization 
                  professional, we're here to help bring your visions to life with assets that 
                  just work.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-24"
          >
            <h3 className="text-2xl font-display font-bold mb-4">Follow Our Journey</h3>
            <p className="text-muted-foreground mb-8">
              See behind-the-scenes content and new releases on social media
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com/icanmake3d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@icanmake3d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
