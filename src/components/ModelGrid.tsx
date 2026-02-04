import { motion } from 'framer-motion';
import { models } from '@/data/models';
import { ModelCard } from './ModelCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ModelGrid() {
  const displayModels = models.slice(0, 6);

  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Latest{' '}
              <span className="gradient-text">Models</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Check out our newest additions to the collection
            </p>
          </div>
          <Link to="/store">
            <Button variant="glass" size="lg" className="group gap-2">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayModels.map((model, index) => (
            <ModelCard key={model.id} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
