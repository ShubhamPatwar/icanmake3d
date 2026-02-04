import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, CreditCard, ArrowRight, X } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Your <span className="gradient-text">Cart</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              {items.length === 0
                ? 'Your cart is empty'
                : `${items.length} item${items.length !== 1 ? 's' : ''} in your cart`}
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 glass-card rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-8">
                Your cart is empty. Start shopping to add items!
              </p>
              <Link to="/store">
                <Button variant="hero" size="lg">
                  Browse Store
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.model.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-4 flex items-center gap-4"
                  >
                    {/* Thumbnail */}
                    <Link
                      to={`/product/${item.model.slug}`}
                      className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={item.model.thumbnail}
                        alt={item.model.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.model.slug}`}>
                        <h3 className="font-display font-semibold truncate hover:text-primary transition-colors">
                          {item.model.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {item.model.techDetails.format.split(',')[0]} • {item.model.techDetails.polyCount}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-xl font-display font-bold text-primary">
                      ${item.model.price}
                    </div>

                    {/* Remove button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.model.id)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </motion.div>
                ))}

                {/* Clear cart button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-destructive gap-2"
                  onClick={clearCart}
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </Button>
              </div>

              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:sticky lg:top-32"
              >
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-lg mb-6">
                    Order Summary
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" size="xl" className="w-full mt-6 gap-2">
                    <CreditCard className="w-5 h-5" />
                    Checkout
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure payment via Stripe, PayPal, or Razorpay
                  </p>
                </div>

                {/* Continue shopping */}
                <Link to="/store" className="block mt-4">
                  <Button variant="glass" className="w-full gap-2">
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
