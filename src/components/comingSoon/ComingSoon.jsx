import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import comingsoon from '../../assets/coming.svg'

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[#f9f9f9] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-xl"
      >
        <motion.img
          src={comingsoon}
          alt="Coming Soon"
          className="w-64 mx-auto mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tez Kunda</h1>
        <p className="text-gray-600 text-lg mb-6">
          Sahifa ishlab chiqilmoqda. Tez orada foydalanishingiz mumkin bo‘ladi.
        </p>

        <Button type="primary" size="large" onClick={() => navigate('/')}>
          Bosh sahifa
        </Button>
      </motion.div>
    </div>
  );
};

export default React.memo(ComingSoon);
