export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '20px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>
          MINI MARKET
        </h1>

        <p style={{ marginBottom: '20px' }}>
          Snacks • Bebidas • Paddle Essentials
        </p>

        <a
          href="https://wa.me/529871114841"
          style={{
            display: 'block',
            background: '#25D366',
            color: 'white',
            padding: '15px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Pedir por WhatsApp
        </a>

        <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Solo productos del Mini Market
        </p>
      </div>
    </main>
  )
}
