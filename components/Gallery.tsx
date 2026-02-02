import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
    id: string;
    url: string;
    title: string;
    description: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: '1',
        url: '/gallery/studio-main.png',
        title: 'Sala Principal',
        description: 'Amplio espacio con espejos de pared completa y suelo profesional de madera'
    },
    {
        id: '2',
        url: '/gallery/studio-reception.png',
        title: 'Recepción',
        description: 'Área de recepción elegante y acogedora con diseño premium'
    },
    {
        id: '3',
        url: '/gallery/studio-mirrors.png',
        title: 'Espejos Profesionales',
        description: 'Espejos de baile profesionales con barra y iluminación óptima'
    },
    {
        id: '4',
        url: '/gallery/studio-class.png',
        title: 'Clases en Acción',
        description: 'Ambiente dinámico y energético durante nuestras clases'
    },
    {
        id: '5',
        url: '/gallery/studio-details.png',
        title: 'Detalles del Estudio',
        description: 'Diseño cuidado con elementos naturales y estética premium'
    },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(GALLERY_IMAGES[nextIndex]);
    };

    const goToPrevious = () => {
        const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(GALLERY_IMAGES[prevIndex]);
    };

    return (
        <section id="instalaciones" className="py-20 bg-warmWhite dark:bg-carbonBlack">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-carbonBlack dark:text-warmWhite">
                        Nuestras Instalaciones
                    </h2>
                    <p className="text-lg text-neutralGrey max-w-2xl mx-auto">
                        Un espacio diseñado para inspirar. Descubre nuestro estudio premium en el corazón de Barcelona.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GALLERY_IMAGES.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-neutralGrey/10"
                            onClick={() => openLightbox(image, index)}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-carbonBlack/90 via-carbonBlack/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-display font-semibold mb-2">{image.title}</h3>
                                    <p className="text-sm text-warmWhite/80">{image.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-carbonBlack/95 flex items-center justify-center p-4"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-6 right-6 text-warmWhite hover:text-deepGreen transition-colors z-10"
                            >
                                <X size={32} />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrevious();
                                }}
                                className="absolute left-6 text-warmWhite hover:text-deepGreen transition-colors z-10"
                            >
                                <ChevronLeft size={48} />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-6 text-warmWhite hover:text-deepGreen transition-colors z-10"
                            >
                                <ChevronRight size={48} />
                            </button>

                            {/* Image */}
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="max-w-6xl max-h-[90vh] relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                />
                                <div className="mt-6 text-center text-warmWhite">
                                    <h3 className="text-2xl font-display font-semibold mb-2">{selectedImage.title}</h3>
                                    <p className="text-neutralGrey">{selectedImage.description}</p>
                                    <p className="text-sm text-neutralGrey/60 mt-2">
                                        {currentIndex + 1} / {GALLERY_IMAGES.length}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
