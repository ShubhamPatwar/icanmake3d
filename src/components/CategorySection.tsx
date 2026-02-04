import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '@/data/models';
import { ArrowRight } from 'lucide-react';

export function CategorySection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Browse by{' '}
            <span className="gradient-text">Category</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of 3D assets organized by category
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/categories/${category.id}`}
                className="group block glass-card p-6 rounded-2xl hover-glow transition-all duration-500 hover:scale-105 gradient-border"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
