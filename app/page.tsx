export default function Page() {
  return ( 
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0ea5e9, #22c55e)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '24px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.25)'
      }}>
        
        <h1 style={{
          fontSize: '26px',
          marginBottom: '5px',
          fontWeight: '800'
        }}>
          🍻 NO TE LEVANTES!
        </h1>

        <p style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '10px'
        }}>
          Mini Market La Palapita 🏝️
        </p>

        <p style={{
          fontSize: '14px',
          marginBottom: '15px',
          color: '#444'
        }}>
          Snacks • Bebidas • Paddle Essentials
        </p>

        <p style={{
          fontSize: '14px',
          marginBottom: '20px',
          color: '#333'
        }}>
          ⚡ Te lo llevamos hasta tu mesa o cancha
        </p>

        {/* IMÁGENES */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          justifyContent: 'center'
        }}>
          <img src="https://images.unsplash.com/photo-1598514982841-6d9c8f62c4c3" style={{width: '80px', borderRadius: '12px'}} />
          <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90" style={{width: '80px', borderRadius: '12px'}} />
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" style={{width: '80px', borderRadius: '12px'}} />
        </div>

        <div style={{
          fontSize: '14px',
          marginBottom: '25px',
          color: '#333'
        }}>
          🥤 Bebidas frías • 🍫 Snacks • ⚡ Energéticas
        </div>

        {/* BOTÓN ÚNICO */}
        <a
          href="https://wa.me/529871154893?text=Hola%20quiero%20pedir%20%F0%9F%91%8B%0AMesa%20o%20Cancha%3A%0AProductos%3A"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#25D366',
            color: 'white',
            padding: '18px',
            borderRadius: '16px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '17px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            animation: 'pulse 1.5s infinite',
            transition: 'transform 0.15s ease'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🛒 PEDIR AHORA
        </a>

        <p style={{
          marginTop: '15px',
          fontSize: '13px',
          color: '#666'
        }}>
          Entrega rápida en palapa y canchas ⚡
        </p>

        <p style={{
          marginTop: '10px',
          fontSize: '12px',
          color: '#999'
        }}>
          Solo productos del Mini Market
        </p>

      </div>

      {/* ANIMACIÓN */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>

    </main>
  )
}