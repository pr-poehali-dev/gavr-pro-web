import { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/icon';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGroup {
  title: string;
  icon: string;
  images: GalleryImage[];
}

interface LightboxProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, startIndex, onClose }: LightboxProps) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.93)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
        onClick={onClose}
      >
        <Icon name="X" size={20} />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
        onClick={e => { e.stopPropagation(); prev(); }}
      >
        <Icon name="ChevronLeft" size={24} />
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-screen w-full px-20 py-10" onClick={e => e.stopPropagation()}>
        <img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-full object-contain rounded-xl"
          style={{ maxHeight: '80vh' }}
        />
        <div className="text-center mt-3 font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {images[current].alt} &nbsp;·&nbsp; {current + 1} / {images.length}
        </div>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
        onClick={e => { e.stopPropagation(); next(); }}
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setCurrent(i); }}
            className="rounded-full transition-all"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              backgroundColor: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface GalleryProps {
  groups: GalleryGroup[];
}

export const Gallery = ({ groups }: GalleryProps) => {
  const [lightbox, setLightbox] = useState<{ groupIdx: number; imgIdx: number } | null>(null);

  const allImagesFlat = lightbox !== null
    ? groups[lightbox.groupIdx].images
    : [];

  return (
    <div className="space-y-12">
      {groups.map((group, gi) => (
        <div key={group.title}>
          {/* Group header */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}
            >
              <Icon name={group.icon} size={15} />
            </div>
            <h3 className="font-body font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--dark)' }}>
              {group.title}
            </h3>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--cream-dark)' }} />
          </div>

          {/* Photos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {group.images.map((img, ii) => (
              <button
                key={img.src}
                className="overflow-hidden rounded-xl relative group"
                style={{ aspectRatio: '4/3', border: '1px solid var(--cream-dark)' }}
                onClick={() => setLightbox({ groupIdx: gi, imgIdx: ii })}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                  >
                    <Icon name="Expand" size={16} style={{ color: 'var(--dark)' }} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {lightbox !== null && (
        <Lightbox
          images={allImagesFlat}
          startIndex={lightbox.imgIdx}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
