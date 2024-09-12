
export default function Card1() {
  return (
    <div className="flex justify-center">
    <div className="w-full max-w-sm p-6 grid gap-6 border-black border rounded-lg  m-10">
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-full object-cover">
          <img src="https://www.lanacion.com.ar/resizer/v2/sergio-massa-anunciara-el-dolar-agro-este-2UFFA33XYZA6PBS5FTPMHVUSMI.jpeg?auth=1c1ad74d1069e4529410a325d3fd69eee81df1f047e0da2013282205e708dc95&width=880&height=586&quality=70&smart=true" alt="@shadcn" className="rounded-full object-cover w-full h-full" />
          <div></div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-xl font-semibold">Sergio Massa</h3>
          <p className="text-sm text-muted-foreground">Abogado</p>
        </div>
      </div>
      <div className="text-muted-foreground">
      Sergio Tomás Massa (San Martín, 28 de abril de 1972) es un abogado, político. 
      Fundador y líder del Frente Renovador, fuerza integrante del Frente de Todos 
      que se impuso en la elección presidencial de 2019. 
      Ideológicamente se define como peronista y de centro. 
      A pesar de haber criticado al kirchnerismo, 
      encasillándose en el peronismo disidente,
      </div>
    </div>
    </div>
  );
}
