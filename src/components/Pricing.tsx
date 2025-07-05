import { motion } from "framer-motion";

interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingPlan> = ({ plan, price, features, highlighted = false }) => {
  return (
    <motion.div
      style={{
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: highlighted 
          ? '0 20px 40px rgba(147, 51, 234, 0.3)' 
          : '0 8px 32px rgba(147, 51, 234, 0.1)',
        background: highlighted 
          ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(59, 130, 246, 0.9))' 
          : 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(20px)',
        border: highlighted 
          ? '2px solid rgba(147, 51, 234, 0.5)' 
          : '1px solid rgba(147, 51, 234, 0.2)',
        color: highlighted ? 'white' : '#d1d5db',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: highlighted 
          ? '0 30px 60px rgba(147, 51, 234, 0.4)' 
          : '0 20px 40px rgba(147, 51, 234, 0.2)'
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect for highlighted card */}
      {highlighted && (
        <div style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          background: 'linear-gradient(45deg, #9333ea, #3b82f6, #ec4899, #9333ea)',
          borderRadius: '20px',
          zIndex: -1,
          animation: 'rotate 3s linear infinite'
        }} />
      )}
      
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textShadow: highlighted ? '0 0 20px rgba(255, 255, 255, 0.5)' : '0 0 10px rgba(147, 51, 234, 0.3)'
      }}>
        {plan}
      </h3>
      <p style={{
        fontSize: '2.5rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        background: highlighted 
          ? 'linear-gradient(135deg, #ffffff, #e0e7ff)' 
          : 'linear-gradient(135deg, #9333ea, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {price}
      </p>
      <ul style={{
        marginBottom: '1.5rem',
        listStyle: 'none',
        padding: 0
      }}>
        {features.map((feature) => (
          <li key={feature} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5rem',
            fontSize: '0.875rem'
          }}>
            <span style={{
              color: highlighted ? '#10b981' : '#10b981',
              marginRight: '0.5rem',
              fontSize: '1rem',
              filter: 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.5))'
            }}>
              ✓
            </span> 
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '50px',
          border: 'none',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          background: highlighted 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'linear-gradient(135deg, #9333ea, #3b82f6)',
          color: highlighted ? '#1f2937' : 'white',
          boxShadow: '0 4px 20px rgba(147, 51, 234, 0.3)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 8px 30px rgba(147, 51, 234, 0.5)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ position: 'relative', zIndex: 1 }}>Choose Plan</span>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          transition: 'left 0.5s ease'
        }} />
      </motion.button>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      plan: "Basic",
      price: "$9/mo",
      features: ["Crypto Payments", "AI Transaction Insights", "Email Support"],
    },
    {
      plan: "Pro",
      price: "$29/mo",
      features: ["All Basic Features", "Fiat Integration", "Web 3 Wallet Support", "Priority Support"],
      highlighted: true,
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["All Pro Features", "Dedicated Account Manager", "Custom Integrations", "24/7 Support"],
    },
  ];

  return (
    <motion.section
      id="pricing"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `,
        zIndex: 0
      }} />
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem',
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
            position: 'relative'
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pricing Plans
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, #9333ea, #3b82f6)',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }} />
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.plan}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PricingCard plan={plan.plan} price={plan.price} features={plan.features} highlighted={plan.highlighted} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.section>
  );
};

export default Pricing;
