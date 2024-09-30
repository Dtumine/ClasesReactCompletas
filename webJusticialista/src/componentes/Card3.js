
 

export default function Card3() {
  return (
    <div className="w-full max-w-md mx-auto mt-10 rounded-2xl overflow-hidden border border-black m-10">
      <div className="relative h-32">
        <div className="absolute inset-x-0 bottom-0 mx-auto transform translate-y-1/2 w-28 h-28 border-4 border-background rounded-full overflow-hidden">
          <img src="https://media.letrap.com.ar/p/d0b8b4e1901e37d16cbc2f226ee2eb59/adjuntos/349/imagenes/100/110/0100110320/790x0/smart/axelwebp.png" alt="User Avatar" className="w-full h-full object-cover rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-background "></div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="text-center">
          <div className="text-2xl mt-10 font-bold">Axel Kicillof</div>
          <div className="text-sm text-muted-foreground">Gobernador</div>
          <div className="text-sm text-muted-foreground">Partido Justicialista</div>
        </div>
        <hr className="border-t border-muted-foreground"/>
        <div className="prose text-muted-foreground">
          <p>
            Axel Kicillof (Buenos Aires, 25 de septiembre de 1971) es un economista, político, docente,
            e investigador argentino que se desempeña como gobernador de la Provincia de Buenos Aires desde el 11 de diciembre de 2019.
            Anteriormente ejerció como ministro de Economía de la Nación Argentina entre 2013 y 2015 y como diputado nacional
            por la Ciudad de Buenos Aires entre 2015 y 2019.
          </p>
        </div>
      </div>
    </div>
  );
}
