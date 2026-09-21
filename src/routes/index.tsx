import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Music2 } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import coupleAsset from "@/assets/nosotros.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para Amor · Flores amarillas" },
      { name: "description", content: "Una flor, una carta, canciones y 21 razones para Amor." },
      { property: "og:title", content: "Para Amor · Flores amarillas" },
      { property: "og:description", content: "Una sorpresa hecha con amor para el 21 de septiembre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const messages = [
  "Tus ojos, que siempre consiguen que me quede mirándolos un segundo de más.",
  "Tu cara cuando te concentrás en algo que te gusta.",
  "La tranquilidad mental que me das sin siquiera intentarlo.",
  "Que jugar contigo hace que cualquier partida sea mi favorita.",
  "Tu personalidad: tan tuya, tan imposible de confundir con la de nadie.",
  "Cómo me hiciste sentir bienvenido en tu mundo.",
  "Que ahora me gustan cosas que antes ni conocía, solamente porque las compartiste conmigo.",
  "Tu forma de ser, incluso en esos días en los que vos decís que estás insoportable.",
  "Tu risa, especialmente cuando algo te agarra desprevenida.",
  "Que puedo ser yo sin pensar demasiado cuando estoy contigo.",
  "Lo linda que sos cuando recién te despertás (aunque probablemente no estés de acuerdo).",
  "Esas conversaciones que empiezan con una tontería y terminan siendo importantes.",
  "La paciencia que me tenés, incluso cuando claramente no la merezco.",
  "Tu manera de entusiasmarte y contagiarme tus ganas.",
  "Que siempre encuentro un poquito de casa cuando estoy contigo.",
  "Los chistes malos que igual nos hacen reír.",
  "Cómo hasta el silencio se siente cómodo a tu lado.",
  "Todo lo que todavía nos queda por jugar, mirar y descubrir juntos.",
  "Que hacés que los días comunes tengan algo especial.",
  "La persona que sos cuando nadie te está mirando.",
  "Que, entre tantas personas, tuve la suerte de conocerte a vos.",
];

const songs = [
  { title: "M.A.I", artist: "Milo J", href: "https://open.spotify.com/search/Milo%20J%20M.A.I", note: "Porque tiene esa ternura tranquila que aparece cada vez que pienso en vos." },
  { title: "Lover of Mine", artist: "5 Seconds of Summer", href: "https://open.spotify.com/search/5%20Seconds%20of%20Summer%20Lover%20of%20Mine", note: "Me recuerda que, incluso con nuestras vueltas, siempre te elegiría a vos." },
  { title: "Baby I'm Yours", artist: "Arctic Monkeys", href: "https://open.spotify.com/search/Arctic%20Monkeys%20Baby%20I'm%20Yours", note: "Suena como una promesa sencilla: quedarme, acompañarte y quererte bien." },
  { title: "Black Sheep", artist: "Metric · Scott Pilgrim", href: "https://open.spotify.com/search/Metric%20Black%20Sheep%20Scott%20Pilgrim", note: "Por nuestro lado más divertido, intenso y un poquito caótico cuando jugamos juntos." },
];

function Flower({ small = false }: { small?: boolean }) {
  const petals = Array.from({ length: 12 });
  return (
    <div className={`relative ${small ? "h-6 w-6" : "h-52 w-52"}`} aria-hidden="true">
      {petals.map((_, index) => (
        <span
          key={index}
          className={`absolute left-1/2 top-1/2 origin-bottom rounded-[60%] bg-primary ${small ? "h-3 w-2" : "h-24 w-11"}`}
          style={{ transform: `translate(-50%, -100%) rotate(${index * 30}deg)` }}
        />
      ))}
      <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--honey)] ring-2 ring-foreground ${small ? "h-3 w-3" : "h-16 w-16 ring-4"}`} />
    </div>
  );
}

function BloomingSunflower() {
  const flowerRef = useRef<HTMLDivElement>(null);
  const [bloomed, setBloomed] = useState(false);

  useEffect(() => {
    const flower = flowerRef.current;
    if (!flower) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setBloomed(true);
    }, { threshold: 0.45 });
    observer.observe(flower);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={flowerRef} className={`sunflower-scene ${bloomed ? "is-bloomed" : ""}`} aria-label="Un girasol floreciendo">
      <div className="sunflower-stem" />
      <div className="sunflower-leaf sunflower-leaf-left" />
      <div className="sunflower-leaf sunflower-leaf-right" />
      <div className="sunflower-head">
        {Array.from({ length: 16 }).map((_, index) => <span key={index} className="sunflower-petal" style={{ "--petal-rotation": `${index * 22.5}deg` } as CSSProperties} />)}
        <span className="sunflower-center" />
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);

  const revealPiece = (index: number) => {
    setRevealed((current) => current.includes(index) ? current : [...current, index]);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <div key={index} className="flower-float absolute" style={{ left: `${(index * 29) % 96}%`, top: `${4 + ((index * 41) % 92)}%`, animationDelay: `${-(index % 7)}s` }}>
            <Flower small />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-14 sm:py-24">
        <header className="text-center">
          <p className="mx-auto mb-7 w-fit rounded-full border-2 border-foreground bg-primary px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] shadow-[4px_4px_0_var(--foreground)]">21 de septiembre · Día de las flores amarillas</p>
          <h1 className="font-display text-6xl font-bold leading-[0.95] sm:text-8xl">Para <span className="text-accent">Amor</span></h1>
          <div className="flower-sway mx-auto mt-9 flex h-56 items-center justify-center"><Flower /></div>
          <p className="mx-auto mt-3 max-w-md text-lg font-semibold text-foreground/70">Una flor que nunca se marchita, dibujada especialmente para vos.</p>
        </header>

        <section className="mt-24 sm:mt-32" aria-labelledby="carta">
          <h2 id="carta" className="mb-8 text-center font-display text-4xl font-bold sm:text-5xl">Una carta para vos <span className="heart-pulse inline-block text-accent">♥</span></h2>
          <article className="-rotate-1 rounded-[28px] border-2 border-foreground bg-card p-7 shadow-[10px_10px_0_var(--primary)] sm:p-11">
            <p className="mb-5 text-xl font-bold">Amor,</p>
            <div className="space-y-5 text-[17px] leading-relaxed text-card-foreground/85">
              <p>Hay algo en haberte conocido que todavía me sorprende: sin hacer ruido, hiciste que muchas cosas se sintieran más claras y más lindas. Con vos encontré una tranquilidad mental que valoro muchísimo, esa sensación de poder bajar la guardia y simplemente estar bien.</p>
              <p>El recuerdo que guardo con más cariño es el de nosotros jugando juntos y compartiendo las cosas que te gustan. En esos momentos me hiciste sentir aceptado de verdad. De a poco, casi sin darme cuenta, terminé queriendo muchas de esas mismas cosas, porque conocerlas a través tuyo las volvió especiales para mí.</p>
              <p>Amo tus ojos, tu cara, tu personalidad y tu forma de ser. Pero, más que una lista, amo cómo todo eso se junta y hace que seas vos: la persona que consigue hacerme reír, acompañarme y darme calma.</p>
              <p>Quizás no voy a estar ahí físicamente para darte las flores amarillas como se debe, pero algún día te lo voy a recompensar de una manera mucho mejor. <strong className="text-accent">&lt;3</strong></p>
            </div>
            <p className="mt-7 font-display text-xl font-semibold text-accent">Con amor, siempre.</p>
          </article>
        </section>

        <section className="mt-24 sm:mt-32" aria-labelledby="playlist">
          <h2 id="playlist" className="mb-2 text-center font-display text-4xl font-bold sm:text-5xl">Canciones que me hacen acordar a ti <span className="heart-pulse inline-block text-accent">♥</span></h2>
          <p className="mb-9 text-center font-semibold text-muted-foreground">Cada título abre la canción en Spotify</p>
          <div className="space-y-5">
            {songs.map((song, index) => (
              <article key={song.title} className={`rounded-3xl border-2 border-foreground p-5 shadow-[6px_6px_0_var(--foreground)] transition-transform hover:-translate-y-1 ${index % 3 === 0 ? "bg-secondary/35" : index % 3 === 1 ? "bg-primary/45" : "bg-accent/15"}`}>
                <div className="flex items-start gap-4">
                  <Music2 className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <a href={song.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-display text-2xl font-bold underline decoration-[var(--honey)] decoration-4 underline-offset-4">{song.title} — {song.artist}<ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
                    <p className="mt-2 leading-relaxed text-foreground/70">{song.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-32" aria-labelledby="razones">
          <h2 id="razones" className="mb-2 text-center font-display text-4xl font-bold sm:text-5xl">21 cositas <span className="heart-pulse inline-block text-accent">♥</span></h2>
          <p className="mb-9 text-center font-semibold text-muted-foreground">Una flor, una razón. Abrilas de a una.</p>
          <div key={active} className="message-in mb-8 min-h-56 rounded-3xl border-2 border-foreground bg-card p-7 text-center shadow-[8px_8px_0_var(--accent)] sm:p-9">
            <div className="mx-auto flex w-fit scale-125"><Flower small /></div>
            <p className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">{messages[active]}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{active + 1} de 21</p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-7 sm:gap-4">
            {messages.map((_, index) => (
              <Button key={index} variant="flower" aria-label={`Abrir mensaje ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)} className={`aspect-square h-auto rounded-full p-0 text-xl ${index % 3 === 1 ? "bg-secondary" : index % 3 === 2 ? "bg-accent text-accent-foreground" : ""} ${active === index ? "-translate-y-1 ring-4 ring-card" : ""}`}>🌼</Button>
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-32" aria-labelledby="rompecabezas">
          <h2 id="rompecabezas" className="mb-2 text-center font-display text-4xl font-bold sm:text-5xl">Una imagen escondida <span className="heart-pulse inline-block text-accent">♥</span></h2>
          <p className="mx-auto mb-9 max-w-lg text-center font-semibold text-muted-foreground">Tocá cada cuadrito para descubrir lo que hay detrás.</p>
          <div className="overflow-hidden rounded-3xl border-2 border-foreground bg-card p-3 shadow-[9px_9px_0_var(--primary)] sm:p-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <img src={coupleAsset.url} alt="Una pareja compartiendo una flor amarilla" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <Button
                    key={index}
                    variant="flower"
                    onClick={() => revealPiece(index)}
                    aria-label={revealed.includes(index) ? `Parte ${index + 1} descubierta` : `Descubrir parte ${index + 1}`}
                    className={`h-auto min-h-0 rounded-none border border-background/50 p-0 text-2xl shadow-none hover:translate-y-0 hover:shadow-none ${index % 3 === 1 ? "bg-secondary" : index % 3 === 2 ? "bg-accent" : "bg-primary"} ${revealed.includes(index) ? "puzzle-piece-revealed pointer-events-none" : ""}`}
                  >
                    <span aria-hidden="true">{index % 2 === 0 ? "🌼" : "♥"}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-sm font-bold text-foreground/60">{revealed.length === 12 ? "¡Sorpresa! Así de lindo se siente elegirte ♥" : `${revealed.length} de 12 descubiertos`}</p>
        </section>

        <section className="mt-24 text-center sm:mt-32" aria-labelledby="final">
          <h2 id="final" className="font-display text-4xl font-bold sm:text-5xl">Y esta florece para vos</h2>
          <p className="mt-3 font-semibold text-muted-foreground">Porque lo nuestro también sigue creciendo.</p>
          <BloomingSunflower />
        </section>

        <footer className="mt-12 text-center font-display text-lg font-bold text-foreground/70">Hecho a mano, con flores amarillas y mucho <span className="text-accent">♥</span></footer>
      </div>
    </main>
  );
}
