import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => {
  return (
    <motion.div
      style={{
        background: 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(147, 51, 234, 0.2)',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)',
        border: '1px solid rgba(147, 51, 234, 0.4)'
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #9333ea, #3b82f6, #ec4899)',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }} />
      
      <div style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '0.5rem',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(147, 51, 234, 0.3)'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#d1d5db',
        textAlign: 'center',
        lineHeight: '1.6',
        fontSize: '0.875rem'
      }}>
        {description}
      </p>
      
      {/* Hover glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "AI-Powered Transactions",
      description: "Leverage advanced AI to optimize and secure your payments in real-time.",
      icon: "🤖",
    },
    {
      title: "Web 3 Integration",
      description: "Seamlessly connect with blockchain networks for crypto payments.",
      icon: "🔗",
    },
    {
      title: "Instant Payouts",
      description: "Fast and reliable payouts to any wallet or bank account worldwide.",
      icon: "⚡",
    },
    {
      title: "Multi-Device Support",
      description: "Access ElitePay on desktop, tablet, or mobile with full responsiveness.",
      icon: "📱",
    },
  ];

  return (
    <motion.section
      id="features"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 100%)',
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
          radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
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
          Why Choose ElitePay?
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
