import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-8xl font-extrabold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
