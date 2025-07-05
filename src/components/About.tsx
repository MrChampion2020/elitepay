import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)',
        color: 'white',
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
          radial-gradient(circle at 15% 85%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `,
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
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
            position: 'relative'
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About ElitePay
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
        <motion.p
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: '#d1d5db',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.8',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          ElitePay is a US-based payment platform revolutionizing crypto and fiat transactions with cutting-edge AI and Web 3 technologies. Our mission is to provide secure, fast, and accessible payment solutions for the modern world.
        </motion.p>
        
        {/* Stats section */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10M+', label: 'Transactions' },
            { number: '150+', label: 'Countries' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              style={{
                background: 'rgba(31, 41, 55, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)',
                border: '1px solid rgba(147, 51, 234, 0.4)'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}>
                {stat.number}
              </div>
              <div style={{
                color: '#d1d5db',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
