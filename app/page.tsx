export default function MiniMarketCozumel() {
  const whatsappLink = "https://wa.me/5219999999999?text=Hola%20quiero%20hacer%20un%20pedido%20del%20Mini%20Market";

  const categories = [
    {
      title: "Bebidas Frías",
      items: ["Agua", "Coca-Cola", "Electrolit", "Red Bull", "Gatorade"],
    },
    {
      title: "Snacks",
      items: ["Takis", "Doritos", "Cacahuates", "Gomitas", "Chocolates"],
    },
    {
      title: "Paddle Essentials",
      items: ["Grips", "Pelotas", "Barras Protein", "Toallas"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-black text-white p-6 text-center">
          <h1 className="text-3xl font-bold tracking-wide">MINI MARKET</h1>
          <p className="text-sm mt-2 opacity-80">Snacks • Bebidas • Paddle Essentials</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-neutral-100 rounded-2xl p-4 text-center border">
            <p className="font-semibold text-lg">¿No quieres levantarte?</p>
            <p className="text-sm text-neutral-600 mt-1">
              Escanea y pide directo a tu mesa.
            </p>
          </div>

          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.title} className="border rounded-2xl p-4">
                <h2 className="font-bold text-lg mb-2">{category.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="bg-neutral-200 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-center">
            <p className="font-semibold">Importante</p>
            <p className="text-neutral-700 mt-1">
              Solo productos del Mini Market.
            </p>
            <p className="text-neutral-700">
              Food trucks y barra manejan pedidos por separado.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 transition text-white text-center font-bold py-4 rounded-2xl text-lg shadow-lg"
          >
            Pedir por WhatsApp
          </a>

          <div className="text-center text-xs text-neutral-500">
            Horario: 8:00 AM – 3:00 AM
          </div>
        </div>
      </div>
    </div>
  );
}
