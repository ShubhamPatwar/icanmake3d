import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ModelCard } from '@/components/ModelCard';
import { Button } from '@/components/ui/button';
import { categories, getModelsByCategory } from '@/data/models';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const categoryModels = getModelsByCategory(categoryId || '');

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-display font-bold">Category Not Found</h1>
          <p className="mt-4 text-muted-foreground">The category you're looking for doesn't exist.</p>
          <Link to="/categories">
            <Button variant="hero" className="mt-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              {category.name}
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {category.description}
            </p>
            <p className="mt-2 text-sm text-primary">
              {categoryModels.length} model{categoryModels.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          {/* Grid */}
          {categoryModels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryModels.map((model, index) => (
                <ModelCard key={model.id} model={model} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No models available in this category yet.</p>
              <Link to="/store">
                <Button variant="hero" className="mt-6">
                  Browse All Models
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
