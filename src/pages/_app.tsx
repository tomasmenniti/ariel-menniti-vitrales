import type { AppProps } from 'next/app';
import { SiteShell } from '../components/site-shell';
import '../styles.css'; // Asegúrate de que la ruta apunte a tu CSS global

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteShell>
      {/* Component representa la página actual (obras, tienda, etc.) */}
      <Component {...pageProps} />
    </SiteShell>
  );
}