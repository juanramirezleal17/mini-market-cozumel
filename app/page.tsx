export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0ea5e9, #22c55e)',
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
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
      }}>
        
        <h1 style={{
          fontSize: '28px',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          🥤 MINI MARKET
        </h1>

        <p style={{
          fontSize: '16px',
          marginBottom: '15px'
        }}>
          Snacks • Bebidas • Paddle Essentials
        </p>

        <p style={{
          fontSize: '14px',
          marginBottom: '25px',
          color: '#555'
        }}>
          ⚡ Pide directo a tu mesa
        </p>

        <a
          href="https://wa.me/529871114841?text=Hola%20quiero%20hacer%20un%20pedido"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#25D366',
            color: 'white',
            padding: '15px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease'
          }}
        >
          💬 Pedir por WhatsApp
        </a>

        <p style={{
          marginTop: '20px',
          fontSize: '13px',
          color: '#777'
        }}>
          Solo productos del Mini Market
        </p>

      </div>
    </main>
  )
}