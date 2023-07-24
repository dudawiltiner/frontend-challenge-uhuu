import Link from 'next/link';

export default function NotFoundTemplate() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#861040',
        textAlign: 'center',
        padding: '16px',
      }}
    >
      <h1>Página não encontrada – 404!</h1>
      <div>
        <Link href="/">Voltar para Home</Link>
      </div>
    </main>
  );
}
