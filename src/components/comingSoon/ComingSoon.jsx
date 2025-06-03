import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
          src="/src/assets/coming.svg"
          alt="Coming Soon"
          className="w-64 mx-auto mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-6">
          This page is under construction. We’re working hard to bring it to life very soon.
        </p>

        <Button type="primary" size="large" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default React.memo(ComingSoon);
