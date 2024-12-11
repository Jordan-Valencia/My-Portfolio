import React, { useState, useEffect } from 'react';
import { Download, AlertTriangle } from 'lucide-react';

interface ImageFloatingContainerProps {
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageFloatingContainer: React.FC<ImageFloatingContainerProps> = ({
  imageUrl,
  alt = 'Foto1',
  
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImageUrl, setLoadedImageUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const loadImage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(imageUrl, {
        signal: AbortSignal.timeout(10000) // 10-second timeout
      });

      if (!response.ok) {
        throw new Error(`Error de carga: Código de estado ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      // Limpiar URL de objeto anterior
      if (loadedImageUrl) {
        URL.revokeObjectURL(loadedImageUrl);
      }

      setLoadedImageUrl(url);
      setIsLoading(false);
    } catch (error) {
      console.error('Error cargando imagen', error);
      
      // Establecer mensaje de error inmediatamente
      setError(error instanceof Error 
        ? error.message 
        : 'No se pudo cargar la imagen'
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadImage();

    // Cleanup function
    return () => {
      if (loadedImageUrl) {
        URL.revokeObjectURL(loadedImageUrl);
      }
    };
  }, [imageUrl]);

  const handleRetry = () => {
    loadImage();
  };

  if (error) {
    return (
      <div className="flex w-full h-full flex-col items-center justify-center p-4 rounded-lg">
        <AlertTriangle className="w-12 h-12 text-purple-500 mb-2" />
        <p className="text-purple-700 mb-2 text-center">
          {error}
        </p>
        <button 
          onClick={handleRetry} 
          className="flex items-center px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 m-4"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex w-full h-full flex-col items-center justify-center p-4 rounded-lg">
        <Download className="w-12 h-12 text-purple-500 animate-pulse mb-2" />
        <p className="text-purple-400 text-center">
          Cargando imagen...
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-full relative shadow-lg">
      <img 
        src={loadedImageUrl} 
        alt={alt} 
        className="object-cover rounded-full transition-transform duration-300 hover:scale-105 w-3/4 md:w-auto"
      />
    </div>
  );
};

export default ImageFloatingContainer;