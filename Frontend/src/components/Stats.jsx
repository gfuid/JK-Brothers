import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FiAward, FiUsers, FiBox, FiGlobe, FiShield } from 'react-icons/fi';

const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp);

export default function Stats() {
  const statsData = [
    {
      value: 10,
      suffix: '+',
      label: 'Years Of Experience',
      icon: <FiAward className="text-3xl text-accent" />,
    },
    {
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      icon: <FiUsers className="text-3xl text-accent" />,
    },
    {
      value: 2000,
      suffix: '+',
      label: 'Products Range',
      icon: <FiBox className="text-3xl text-accent" />,
    },
    {
      value: 50,
      suffix: '+',
      label: 'Countries Supplied',
      icon: <FiGlobe className="text-3xl text-accent" />,
    },
    {
      value: 100,
      suffix: '%',
      label: 'Quality Assured',
      icon: <FiShield className="text-3xl text-accent" />,
    },
  ];

  return (
    <section className="bg-primary text-white py-12 border-y-2 border-accent/25 relative overflow-hidden">
      {/* Sparkles / Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,92,0.05),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y divide-gray-800 md:divide-y-0 md:divide-x divide-accent/15">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 first:pt-4 pt-8 md:pt-4"
            >
              {/* Icon Container with Floating Micro-animation */}
              <div className="mb-3 p-3 bg-white/5 rounded-full border border-white/10 shadow-inner hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Number with CountUp */}
              <div className="font-serif text-3xl md:text-4xl font-extrabold text-white flex items-center">
                <CountUpComponent end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-accent ml-0.5">{stat.suffix}</span>
              </div>

              {/* Description */}
              <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-300 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
