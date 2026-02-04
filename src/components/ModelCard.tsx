import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Model3D } from '@/data/models';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface ModelCardProps {
  model: Model3D;
  index?: number;
}

export function ModelCard({ model, index = 0 }: ModelCardProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(model.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 gradient-border">
        {/* Thumbnail */}
        <Link to={`/product/${model.slug}`} className="block relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <img
            src={model.thumbnail}
            alt={model.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="hero" size="lg" className="gap-2">
              <Eye className="w-5 h-5" />
              View Model
            </Button>
          </div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {model.featured && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
            {model.new && (
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                New
              </span>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <Link to={`/product/${model.slug}`}>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                  {model.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                {model.shortDescription}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xl font-display font-bold text-primary">
                ${model.price}
              </div>
            </div>
          </div>

          {/* Tech specs */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground">
              {model.techDetails.format.split(',')[0]}
            </span>
            <span className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground">
              {model.techDetails.polyCount}
            </span>
            <span className="px-2 py-1 bg-secondary rounded-md text-xs text-muted-foreground">
              {model.techDetails.textures}
            </span>
          </div>

          {/* Add to cart button */}
          <Button
            variant={inCart ? "secondary" : "glow"}
            className="w-full mt-4 gap-2"
            onClick={() => addToCart(model)}
            disabled={inCart}
          >
            <ShoppingCart className="w-4 h-4" />
            {inCart ? 'In Cart' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
