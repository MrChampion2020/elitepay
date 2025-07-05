import { motion } from "framer-motion";

const Partners: React.FC = () => {
  const partners: string[] = ["Blockchain Co.", "Crypto Exchange", "FinTech Hub", "AI Payments Inc."];

  return (
    <motion.section
      id="partners"
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
          radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
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
          Our Trusted Partners
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              style={{
                background: 'rgba(31, 41, 55, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: '1rem',
                boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)',
                border: '1px solid rgba(147, 51, 234, 0.4)'
              }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Partner logo placeholder */}
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'
              }}>
                {partner.charAt(0)}
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 10px rgba(147, 51, 234, 0.3)'
              }}>
                {partner}
              </div>
              
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
