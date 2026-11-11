"use client";

import { useEffect, useState } from "react";

const SONG_ID = "I7A4k6nw-JE";

const appreciation = [
  {
    icon: "🛡️",
    title: "Your Support",
    text: "In a world where many give up, you never stopped supporting your family. You provide fully, you care deeply, and you make sure we never lack. Your support is my strength.",
  },
  {
    icon: "⏳",
    title: "Your Patience",
    text: "Thank you for your patience, for guiding me even when I make mistakes, for correcting me with love and not anger.",
  },
  {
    icon: "🔥",
    title: "Your Sacrifice",
    text: "You work so hard, yet you never complain. Everything you do is for us. Your sacrifice is the reason I am who I am today.",
  },
];

const photos = [
  { src: "/dad1.jpeg", alt: "A special memory with Abayo" },
  { src: "/dad2.jpeg", alt: "A beautiful moment with Abayo" },
  { src: "/dad3.jpeg", alt: "A memorable moment with Abayo" },
  { src: "/dad4.jpg", alt: "A cherished family memory" },
];

export default function AbayoPage() {
  const [musicOn, setMusicOn] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [stars, setStars] = useState<
    { left: string; top: string; size: number }[]
  >([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 65 }, () => ({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        size: Math.random() * 3 + 1,
      }))
    );
  }, []);

  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* BACKGROUND STARS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
          />
        ))}

        {Array.from({ length: 14 }).map((_, index) => (
          <span
            key={`fall-${index}`}
            className="absolute text-yellow-300 animate-bounce"
            style={{
              left: `${(index * 17 + 8) % 100}%`,
              top: `${(index * 13) % 70}%`,
              fontSize: `${10 + (index % 3) * 3}px`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${3 + (index % 3)}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* MUSIC BUTTON */}
      <button
        onClick={() => setMusicOn((previous) => !previous)}
        className="fixed bottom-5 right-5 z-[60] bg-black/90 backdrop-blur-md border border-yellow-400/50 px-5 py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-yellow-500 hover:text-black transition"
      >
        {musicOn ? "✕ Close Music" : "♫ Play King Sunny Adé"}
      </button>

      {/* YOUTUBE MUSIC PLAYER */}
      {musicOn && (
        <div className="fixed bottom-[75px] right-4 z-[60] w-[min(320px,calc(100vw-32px))] bg-[#0d1430] border border-yellow-500/40 rounded-2xl p-3 shadow-2xl">
          <p className="text-yellow-400 text-xs font-semibold mb-2">
            ♫ NOW PLAYING
          </p>

          <p className="text-white text-sm font-serif mb-3">
            Appreciation — King Sunny Adé
          </p>

          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              key={musicOn ? "playing" : "stopped"}
              src={`https://www.youtube-nocookie.com/embed/${SONG_ID}?autoplay=1&playsinline=1&rel=0`}
              title="King Sunny Ade - Appreciation"
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="text-slate-400 text-[10px] mt-2">
            Music streamed through YouTube.
          </p>
        </div>
      )}

      <div className="relative z-10">

        {/* 1. HERO */}
        <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-5 py-20">

          <p className="text-sm tracking-wide text-slate-200">
            For My Father, Abayo
          </p>

          <div className="flex items-center gap-3 my-5">
            <span className="w-12 h-px bg-yellow-500/70" />
            <span className="text-yellow-400 animate-pulse">✦</span>
            <span className="w-12 h-px bg-yellow-500/70" />
          </div>

          <p className="text-[10px] sm:text-xs tracking-[0.35em] text-yellow-500">
            A MESSAGE FROM THE HEART
          </p>

          <h1 className="text-[36px] sm:text-5xl md:text-6xl font-serif mt-7 leading-tight">
            You Gave Me Life,
            <br />
            <span className="text-yellow-400 italic">
              But You Gave Me
              <br />
              More Than Life.
            </span>
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed max-w-md mt-7">
            Dear Abayo, thank you for being more than a father.
            Thank you for your love, your sacrifices, and your
            unwavering support for our family. Your lessons have
            shaped who I am.
          </p>

          <a
            href="#message"
            className="mt-9 bg-[#e8c268] text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
          >
            Read My Message →
          </a>

          <p className="text-slate-500 text-[10px] mt-10 tracking-widest">
            SCROLL DOWN TO EXPLORE
          </p>
        </section>

        {/* 2. THANK YOU CIRCLE */}
        <section className="flex flex-col items-center py-16 px-5 text-center">

          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-yellow-500/40 flex flex-col items-center justify-center relative bg-[#070b22]/60 shadow-xl">

            <span className="absolute top-5 text-yellow-400 animate-pulse">
              ✦
            </span>

            <span className="absolute bottom-7 left-9 text-yellow-400">
              ✦
            </span>

            <span className="absolute bottom-10 right-9 text-yellow-400">
              ✦
            </span>

            <p className="text-[10px] tracking-[0.45em] text-slate-400">
              THANK YOU
            </p>

            <h2 className="text-5xl sm:text-6xl font-serif text-[#e8c268] my-3">
              ABAYO
            </h2>

            <p className="text-[10px] tracking-[0.35em] text-slate-400">
              MORE THAN A FATHER
            </p>
          </div>
        </section>

        {/* 3. FOOTPRINTS */}
        <section
          id="message"
          className="px-5 py-16 max-w-[600px] mx-auto scroll-mt-8"
        >

          <h2 className="text-3xl sm:text-4xl font-serif text-center leading-tight">
            Some People Leave
            <br />
            <span className="text-[#e8c268] italic">
              Beautiful Footprints.
            </span>
          </h2>

          <p className="text-center text-slate-400 text-sm leading-relaxed mt-4">
            These are a few things I sincerely appreciate about you, Abayo.
          </p>

          <div className="space-y-5 mt-10">
            {appreciation.map((item) => (
              <article
                key={item.title}
                className="bg-[#0d1430]/90 border border-white/10 rounded-[22px] p-6 hover:border-yellow-500/40 transition"
              >
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                <h3 className="font-serif text-2xl text-[#e8c268] mt-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. BIRTHDAY PRAYER */}
        <section className="px-5 py-16 max-w-[650px] mx-auto text-center">

          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-[#e8c268]">
            12TH NOVEMBER • A DAY TO CELEBRATE
          </p>

          <h2 className="text-4xl sm:text-5xl font-serif mt-5 leading-tight">
            Happy Birthday,
            <br />
            <span className="text-[#e8c268] italic">
              My Abayo.
            </span>
          </h2>

          <div className="bg-[#0e1533] border border-[#e8c268]/20 rounded-[24px] p-6 sm:p-9 mt-9 text-left">

            <p className="text-[#e8c268] font-serif text-xl">
              🎂 A Birthday Prayer For You
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-5">
              Today, I don't just celebrate your birthday, Abayo.
              I celebrate the gift that God gave our family when
              He gave us you.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              On this day, I lift my heart in worship and I say —
              Thank You, Lord, for this man. For his life, for his
              strength, for his love that never fails. May Heaven
              smile on you today the way you have made us smile
              all our lives.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              Abayo, I pray for you: Long life, good health, peace
              of mind, and joy that no trouble can steal. May your
              days be long, may your hands never lack, may your
              heart always be happy. As you grow older, may you
              grow stronger, wiser, and more blessed. You will eat
              the fruit of your labour. You will see your children's
              children. You will not be put to shame.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              You have been a father, a hero, a covering, a teacher,
              and a blessing. Today, the whole world should know —
              you are loved, you are honoured, and you are celebrated.
            </p>

            <p className="font-serif italic text-[#e8c268] text-center mt-7 text-base leading-relaxed">
              "The Lord bless you and keep you; the Lord make His
              face shine upon you."
              <br />
              — Numbers 6:24-25
            </p>

            <p className="text-center mt-7 font-bold tracking-[0.2em] text-[#e8c268] text-sm">
              HAPPY BIRTHDAY ABAYO! 🎉
            </p>
          </div>
        </section>

        {/* 5. PHOTO GALLERY */}
        <section className="px-5 py-12 max-w-[650px] mx-auto">

          <h2 className="text-3xl font-serif text-center leading-tight">
            Moments Worth
            <span className="text-[#e8c268] italic">
              {" "}Remembering.
            </span>
          </h2>

          <p className="text-center text-slate-400 text-sm mt-3 leading-relaxed">
            A small collection of pictures dedicated to someone
            whose love made a difference.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="bg-[#10173a] border border-[#e8c268]/30 rounded-t-[100px] rounded-b-2xl p-2 h-[230px] sm:h-[280px] overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-[90px] rounded-b-xl group-hover:scale-105 transition duration-500"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-5">
            Every picture tells a story. Every memory is a blessing.
          </p>
        </section>

        {/* 6. LETTER */}
        <section className="px-5 py-16 max-w-[650px] mx-auto">

          <h2 className="text-3xl font-serif">
            A Letter From
            <span className="text-[#e8c268] italic">
              {" "}The Heart
            </span>
          </h2>

          <div className="bg-[#0d1430] border border-white/10 rounded-[22px] p-6 sm:p-8 mt-7">

            <p className="font-serif text-2xl text-[#e8c268]">
              Dear Abayo,
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-5">
              I honestly do not know how best to put everything
              into words, but I want you to know that I genuinely
              appreciate you.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              Growing up with you as my father has been the
              greatest blessing of my life. You did not just
              provide for us, you taught us love, respect, and
              hard work.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              I appreciate the time you invested in our family,
              the sacrifices you made, and the love you share.
              Even the little things you do mean so much.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              There are fathers who are present, and there are
              fathers whose love becomes the foundation of who
              their children become. You belong to the second
              category.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              Thank you for believing in me, even when I doubted
              myself. Thank you for being part of my journey.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              I may not have money to give you now, but please
              know that your son loves you deeply and I will
              make you proud.
            </p>

            <p className="text-slate-200 text-sm leading-[1.9] mt-4">
              I wish you long life, good health, happiness,
              and endless reasons to be proud.
            </p>

            <p className="mt-7 text-slate-400 text-sm">
              With heartfelt love and respect,
            </p>

            <p className="font-serif italic text-3xl text-[#e8c268] mt-2">
              Your Son,
            </p>

            <p className="font-serif text-xl text-white mt-1">
              Oluwatobiloba
            </p>
          </div>
        </section>

        {/* 7. FINAL MESSAGE */}
        <section className="px-5 py-20 text-center max-w-[650px] mx-auto">

          <h2 className="text-3xl font-serif">
            One More Thing,
            <span className="text-[#e8c268] italic">
              {" "}Abayo.
            </span>
          </h2>

          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            I have one final message for you. Please take a moment
            to open it.
          </p>

          {!showFinal ? (
            <button
              onClick={() => setShowFinal(true)}
              className="mt-8 bg-[#e8c268] text-black px-7 py-4 rounded-full text-sm font-bold w-full max-w-[280px] hover:bg-yellow-300 transition"
            >
              There Is One More Thing... ❤️
            </button>
          ) : (
            <div className="mt-10 animate-pulse">

              <p className="text-6xl">❤️</p>

              <h3 className="text-3xl sm:text-4xl font-serif text-[#e8c268] mt-4 leading-tight">
                You Will Always
                <br />
                Be Appreciated.
              </h3>

              <p className="text-slate-200 text-sm leading-[1.9] mt-5">
                No matter how far my journey takes me, I will
                always remember the man who gave me everything.
                Thank you for being my first hero. You are
                appreciated more than words can say. With love
                and respect, always.
              </p>

              <p className="text-xs text-slate-500 mt-10">
                Made with ❤️ for Abayo
                <br />
                November 12th | By Oluwatobiloba
              </p>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 px-5 text-center">

          <p className="font-serif text-xl text-[#e8c268]">
            For Abayo, With Love ❤️
          </p>

          <p className="text-slate-500 text-xs mt-3">
            A lifetime of gratitude. A lifetime of love.
          </p>

          <p className="text-slate-600 text-[10px] mt-5">
            © November 12 | Oluwatobiloba
          </p>
        </footer>

      </div>
    </main>
  );
};