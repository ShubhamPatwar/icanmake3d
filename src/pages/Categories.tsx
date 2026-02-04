import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { categories, models } from '@/data/models';
import { ArrowRight } from 'lucide-react';

export default function Categories() {
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Browse{' '}
              <span className="gradient-text">Categories</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find the perfect 3D assets organized by category
            </p>
          </motion.div>

          {/* Categories grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryModels = models.filter(m => m.category === category.id);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/categories/${category.id}`}
                    className="group block glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 gradient-border"
                  >
                    {/* Preview images */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                      <div className="grid grid-cols-3 h-full">
                        {categoryModels.slice(0, 3).map((model, i) => (
                          <div key={model.id} className="overflow-hidden">
                            <img
                              src={model.thumbnail}
                              alt={model.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                        ))}
                        {categoryModels.length < 3 && (
                          Array.from({ length: 3 - categoryModels.length }).map((_, i) => (
                            <div key={`placeholder-${i}`} className="bg-secondary" />
                          ))
                        )}
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4 text-5xl">
                        {category.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {category.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">Explore</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          {categoryModels.length} model{categoryModels.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
