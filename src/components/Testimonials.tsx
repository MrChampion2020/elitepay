import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, role }) => {
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
      {/* Quote icon */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontSize: '2rem',
        color: 'rgba(147, 51, 234, 0.3)',
        fontFamily: 'serif'
      }}>
        "
      </div>
      
      <p style={{
        color: '#d1d5db',
        marginBottom: '1rem',
        fontSize: '0.875rem',
        lineHeight: '1.6',
        fontStyle: 'italic',
        position: 'relative',
        zIndex: 1
      }}>
        "{quote}"
      </p>
      <div style={{
        borderTop: '1px solid rgba(147, 51, 234, 0.2)',
        paddingTop: '1rem'
      }}>
        <p style={{
          color: 'white',
          fontWeight: '600',
          fontSize: '0.875rem',
          marginBottom: '0.25rem',
          textShadow: '0 0 10px rgba(147, 51, 234, 0.3)'
        }}>
          {author}
        </p>
        <p style={{
          color: '#9ca3af',
          fontSize: '0.75rem',
          fontWeight: '500'
        }}>
          {role}
        </p>
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
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "ElitePay transformed our payment processing with its AI-driven insights and seamless crypto integration.",
      author: "Jane Doe",
      role: "CEO, CryptoCorp",
    },
    {
      quote: "The fastest payouts we've ever experienced. ElitePay is a game-changer for our business.",
      author: "John Smith",
      role: "Founder, FinTech Solutions",
    },
    {
      quote: "The platform's Web 3 capabilities make it incredibly easy to manage our global transactions.",
      author: "Emily Brown",
      role: "CFO, GlobalPay",
    },
  ];

  return (
    <motion.section
      id="testimonials"
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
          radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
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
          What Our Users Say
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TestimonialCard quote={testimonial.quote} author={testimonial.author} role={testimonial.role} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
