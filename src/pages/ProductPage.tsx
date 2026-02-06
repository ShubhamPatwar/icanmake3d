import { GLBModelViewer } from '@/components/GLBModelViewer';
import { Model3DViewer } from '@/components/Model3DViewer';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ModelCard } from '@/components/ModelCard';
import { Button } from '@/components/ui/button';
import { getModelBySlug, models } from '@/data/models';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Download, Check, ArrowLeft, Box, Layers, Palette, HardDrive } from 'lucide-react';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const model = getModelBySlug(slug || '');
  const { addToCart, isInCart } = useCart();

  if (!model) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-display font-bold">Model Not Found</h1>
          <p className="mt-4 text-muted-foreground">The model you're looking for doesn't exist.</p>
          <Link to="/store">
            <Button variant="hero" className="mt-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Store
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const inCart = isInCart(model.id);
  const relatedModels = models
    .filter(m => m.category === model.category && m.id !== model.id)
    .slice(0, 3);

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
            <Link to="/store" className="hover:text-primary transition-colors">Store</Link>
            <span>/</span>
            <span className="text-foreground">{model.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 3D Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {model.modelUrl ? (
                      <GLBModelViewer 
                        modelUrl={model.modelUrl}
                        height="500px" 
                        autoRotate 
                        showControls 
                      />
                    ) : (
                      <Model3DViewer height="500px" autoRotate showControls />
                    )}

              {/* Image gallery */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {model.images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl overflow-hidden glass-card cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  >
                    <img
                      src={img}
                      alt={`${model.name} preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                {model.featured && (
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
                {model.new && (
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                    New
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                {model.name}
              </h1>

              <div className="mt-4 text-4xl font-display font-bold text-primary">
                ${model.price}
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                {model.description}
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  variant={inCart ? "secondary" : "hero"}
                  size="xl"
                  className="flex-1 gap-2"
                  onClick={() => addToCart(model)}
                  disabled={inCart}
                >
                  {inCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button variant="glow" size="xl" className="flex-1 gap-2">
                  <Download className="w-5 h-5" />
                  Buy Now — ${model.price}
                </Button>
              </div>

              {/* Tech details */}
              <div className="mt-12 glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg mb-6">Technical Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Box className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Format</div>
                      <div className="font-medium">{model.techDetails.format}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Poly Count</div>
                      <div className="font-medium">{model.techDetails.polyCount}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Textures</div>
                      <div className="font-medium">{model.techDetails.textures}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HardDrive className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">File Size</div>
                      <div className="font-medium">{model.techDetails.fileSize}</div>
                    </div>
                  </div>
                </div>

                {(model.techDetails.rigged || model.techDetails.animated) && (
                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
                    {model.techDetails.rigged && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                        ✓ Rigged
                      </span>
                    )}
                    {model.techDetails.animated && (
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full">
                        ✓ Animated
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Related Models */}
          {relatedModels.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
                Related <span className="gradient-text">Models</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedModels.map((m, index) => (
                  <ModelCard key={m.id} model={m} index={index} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
