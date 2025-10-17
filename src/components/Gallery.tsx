"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "../../site.config";

export default function GallerySection() {
  const gallery = siteConfig.gallery;
  if (!gallery?.enabled) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          {gallery.title}
        </motion.h2>

        {gallery.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 mt-2"
          >
            {gallery.subtitle}
          </motion.p>
        )}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-2 md:gap-3 px-2 md:px-6 lg:px-10 space-y-2 md:space-y-3">
        {gallery.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
