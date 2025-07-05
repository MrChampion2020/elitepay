import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        paddingTop: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.3,
        zIndex: 0
      }} />
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)'
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The Future of Payments with{" "}
          <span style={{
            background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(147, 51, 234, 0.8)',
            position: 'relative'
          }}>
            ElitePay
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: -1
            }} />
          </span>
        </motion.h1>
        <motion.p
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: '#d1d5db',
            marginBottom: '2rem',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Seamless, secure, and AI-powered crypto and fiat payments for the Web 3 era. Join the revolution today.
        </motion.p>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            style={{
              background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 8px 30px rgba(147, 51, 234, 0.4)',
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(147, 51, 234, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Start Now</span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              transition: 'left 0.6s ease'
            }} />
          </motion.a>
          <motion.a
            href="#features"
            style={{
              border: '2px solid rgba(147, 51, 234, 0.5)',
              color: '#d1d5db',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              background: 'rgba(147, 51, 234, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(147, 51, 234, 0.2)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              scale: 1.05,
              background: 'rgba(147, 51, 234, 0.2)',
              color: 'white',
              boxShadow: '0 8px 30px rgba(147, 51, 234, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Learn More</span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
              transition: 'left 0.6s ease'
            }} />
          </motion.a>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '5%',
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(8px)'
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
