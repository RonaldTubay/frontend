import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
import { CLSMetric, FIDMetric, FCPMetric, LCPMetric, TTFBMetric } from 'web-vitals'; // Importa los tipos de métricas

// Cambia el tipo de onPerfEntry para aceptar un callback adecuado
const reportWebVitals = (onPerfEntry: (metric: CLSMetric | FIDMetric | FCPMetric | LCPMetric | TTFBMetric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
