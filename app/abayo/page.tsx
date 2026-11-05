"use client";

import { useState, useRef, useEffect } from "react";

export default function AbayoPage() {
  const [musicOn, setMusicOn] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // STARS 
  const [stars, setStars] = useState<{ left: string; top: string; size: number }[]>([]);
  const [fallingStars, setFallingStars] = useState<{ left: string; delay: string; duration: string; size: string }[]>([]);

  // PHOTOS 
  const [photos, setPhotos] = useState<(string | null)[]>([null, null, null, null]);
  const fileRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 60 }, () => ({
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1,
    }));
    setStars(newStars);

    const newFalling = Array.from({ length: 14 }, () => ({
      left: Math.random() * 100 + "%",
      delay: Math.random() * 4 + "s",
      duration: Math.random() * 3 + 3 + "s",
      size: Math.random() * 8 + 10 + "px",
    }));
    setFallingStars(newFalling);
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    try {
      if (musicOn) {
        audioRef.current.pause();
        setMusicOn(false);
      } else {
        await audioRef.current.play();
        setMusicOn(true);
      }
    } catch (e) {
      console.log("Click again to play", e);
    }
  };

  const handlePhoto = (index: number, file: File | undefined) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const newPhotos = [...photos];
    newPhotos[index] = url;
    setPhotos(newPhotos);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-x-hidden">
     
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        <source src="https://cdn.pixabay.com/audio/2024/05/27/audio_2b0e1b0e1b.mp3" type="audio/mpeg" />
      </audio>

     
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((s, i) => (
          <span
            key={`t-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          />
        ))}

    
        {fallingStars.map((s, i) => (
          <span
            key={`f-${i}`}
            className="absolute text-yellow-200 animate-bounce"
            style={{
              left: s.left,
              top: "0px",
              fontSize: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          >
            ✦
          </span>
        ))}

    
        {fallingStars.slice(0, 8).map((s, i) => (
          <span
            key={`d-${i}`}
            className="absolute bg-yellow-100 rounded-full animate-bounce"
            style={{
              left: s.left,
              top: "20px",
              width: "3px",
              height: "3px",
              animationDelay: s.delay,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 bg-black/60 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-xs flex items-center gap-2"
      >
        {musicOn ? "|| Music on" : "▶ Play music"}
      </button>

      <div className="relative z-10">
        {/* 1. HERO */}
        <div className="min-h-[100svh] flex flex-col items-center justify-center text-center px-5 py-16">
          <p className="text-[13px] tracking-wide text-slate-200">For My Father, Abayo</p>
          <div className="flex items-center gap-2 my-4">
            <span className="w-10 h-[1px] bg-yellow-500/70" />
            <span className="text-yellow-400 text-xs animate-ping">✦</span>
            <span className="w-10 h-[1px] bg-yellow-500/70" />
          </div>
          <p className="text-[10px] tracking-[0.35em] text-yellow-500">A MESSAGE FROM THE HEART</p>
          <h1 className="text-[36px] leading-[1.15] sm:text-5xl md:text-6xl font-serif mt-6">
            You Gave Me Life,<br />
            <span className="text-yellow-400 italic">But You Gave Me<br />More Than Life.</span>
          </h1>
          <p className="text-slate-300/90 text-[14px] leading-relaxed max-w-[340px] sm:max-w-md mt-6">
            Dear Abayo, thank you for being more than a father. Thank you for your love, your sacrifices, and your unwavering support for our family. Your lessons have shaped who I am.
          </p>
          <a href="#message" className="mt-8 bg-[#e8c268] text-black px-6 py-3.5 rounded-full text-[14px] font-semibold w-full max-w-[280px] sm:w-auto text-center">
            Read My Message →
          </a>
        </div>

        {/* 2. THANK YOU CIRCLE */}
        <div className="flex flex-col items-center py-14 px-5 text-center">
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-yellow-500/40 flex flex-col items-center justify-center relative bg-[#070b22]/50">
            <span className="absolute top-4 text-yellow-400 text-xs animate-bounce">✦</span>
            <span className="absolute bottom-6 left-8 text-yellow-400 text-[10px] animate-pulse">✦</span>
            <span className="absolute bottom-10 right-8 text-yellow-400 text-[10px] animate-pulse">✦</span>
            <p className="text-[10px] tracking-[0.45em] text-slate-400">THANK YOU</p>
            <h2 className="text-[48px] sm:text-[56px] font-serif text-[#e8c268] my-1 leading-none">ABAYO</h2>
            <p className="text-[10px] tracking-[0.35em] text-slate-400">MORE THAN A FATHER</p>
          </div>
        </div>

        {/* 3. FOOTPRINTS */}
        <div id="message" className="px-5 py-10 max-w-[600px] mx-auto">
          <h2 className="text-[30px] sm:text-4xl font-serif text-center leading-tight">Some People Leave<br /><span className="text-[#e8c268] italic">Beautiful Footprints.</span></h2>
          <p className="text-center text-slate-400 text-[13px] leading-relaxed mt-3 px-4">These are a few things I sincerely appreciate about you, Abayo.</p>
          <div className="space-y-4 mt-8">
            {[
              { icon: "🛡️", title: "Your Support", text: "In a world where many give up, you never stopped supporting your family. You provide fully, you care deeply, and you make sure we never lack. Your support is my strength." },
              { icon: "⏳", title: "Your Patience", text: "Thank you for your patience, for guiding me even when I make mistakes, for correcting me with love and not anger." },
              { icon: "🔥", title: "Your Sacrifice", text: "You work so hard, yet you never complain. Everything you do is for us. Your sacrifice is the reason I am who I am today." },
            ].map((c) => (
              <div key={c.title} className="bg-[#0d1430]/90 border border-white/10 rounded-[20px] p-6">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg">{c.icon}</div>
                <h3 className="font-serif text-[22px] text-[#e8c268] mt-3">{c.title}</h3>
                <p className="text-slate-300/90 text-[13.5px] mt-2 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. WORSHIP BIRTHDAY */}
        <div className="px-5 py-14 max-w-[600px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#e8c268]">12TH NOVEMBER • A DAY HEAVEN CELEBRATES</p>
          <h2 className="text-[34px] sm:text-5xl font-serif mt-4 leading-tight">Happy Birthday,<br /><span className="text-[#e8c268] italic">My Abayo.</span></h2>
          <div className="bg-[#0e1533] border border-[#e8c268]/20 rounded-[24px] p-6 sm:p-9 mt-8 text-left">
            <p className="text-[#e8c268] font-serif text-[20px]">🎂 A Worship Birthday Prayer For You</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">Today, I don&apos;t just celebrate your birthday, Abayo. I celebrate the gift that God gave our family when He gave us you.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">On this day, I lift my heart in worship and I say — Thank You, Lord, for this man. For his life, for his strength, for his love that never fails. May Heaven smile on you today the way you have made us smile all our lives.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">Abayo, I pray for you: Long life, good health, peace of mind, and joy that no trouble can steal. May your days be long, may your hands never lack, may your heart always be happy. As you grow older, may you grow stronger, wiser, and more blessed. You will eat the fruit of your labour. You will see your children&apos;s children. You will not be put to shame.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">You have been a father, a hero, a covering, a teacher, and a blessing. Today, the whole world should know — you are loved, you are honoured, and you are celebrated.</p>
            <p className="font-serif italic text-[#e8c268] text-center mt-6 text-[16px] leading-relaxed">&quot;The Lord bless you and keep you; the Lord make His face shine upon you.&quot; — Numbers 6:24-25</p>
            <p className="text-center mt-6 font-bold tracking-[0.2em] text-[#e8c268] text-[14px]">HAPPY BIRTHDAY ABAYO! 🎉</p>
          </div>
        </div>

        
        <div className="px-5 py-8 max-w-[600px] mx-auto">
          <h2 className="text-[30px] font-serif text-center leading-tight">Moments Worth <span className="text-[#e8c268] italic">Remembering.</span></h2>
          <p className="text-center text-slate-400 text-[13px] mt-2 leading-relaxed">A small collection of pictures dedicated to someone whose love made a difference.</p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                onClick={() => fileRefs.current[i]?.click()}
                className="bg-[#10173a] border border-[#e8c268]/30 rounded-t-[100px] rounded-b-[16px] p-4 h-[240px] flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden"
              >
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={(el) => { fileRefs.current[i] = el; }}
                  onChange={(e) => handlePhoto(i, e.target.files?.[0])}
                />
                {photo ? (
                  <img src={photo} alt="Abayo memory" className="w-full h-full object-cover rounded-t-[80px] rounded-b-[10px]" />
                ) : (
                  <>
                    <span className="text-[#e8c268] text-[10px]">✦</span>
                    <div className="w-[56px] h-[56px] rounded-full border border-white/20 mt-2 flex items-center justify-center text-2xl">+</div>
                    <p className="text-[11px] text-slate-400 mt-4">Tap to add a photo</p>
                    <p className="text-[11px] text-[#e8c268]/80 italic mt-3 leading-tight">A Father. A Hero. An Inspiration.</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-3">No wahala say you never gather pic yet — when you get am, just tap here, e go open your gallery. For now e go show + like this.</p>
        </div>

        {/* 6. LETTER */}
        <div className="px-5 py-12 max-w-[600px] mx-auto">
          <h2 className="text-[28px] font-serif">A Letter From <span className="text-[#e8c268] italic">The Heart</span></h2>
          <div className="bg-[#0d1430] border border-white/10 rounded-[20px] p-6 mt-6">
            <p className="font-serif text-[24px] text-[#e8c268]">Dear Abayo,</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">I honestly do not know how best to put everything into words, but I want you to know that I genuinely appreciate you.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">Growing up with you as my father has been the greatest blessing of my life. You did not just provide for us, you taught us love, respect, and hard work.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">I appreciate the time you invested in our family, the sacrifices you made, and the love you share. Even the little things you do mean so much.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">There are fathers who are present, and there are fathers whose love becomes the foundation of who their children become. You belong to the second category.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">Thank you for believing in me, even when I doubted myself. Thank you for being part of my journey.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">I may not have money to give you now, but please know that your son loves you deeply and I will make you proud.</p>
            <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">I wish you long life, good health, happiness, and endless reasons to be proud.</p>
            <p className="mt-6 text-slate-400 text-[13px]">With heartfelt love and respect,</p>
            <p className="font-serif italic text-[26px] text-[#e8c268]">Your Son,</p>
            <p className="font-serif text-[18px] text-white">Oluwatobiloba</p>
          </div>
        </div>

        {/* 7. ONE MORE THING */}
        <div className="px-5 py-14 text-center max-w-[600px] mx-auto">
          <h2 className="text-[28px] font-serif">One More Thing, <span className="text-[#e8c268] italic">Abayo.</span></h2>
          <p className="text-slate-400 text-[13px] mt-2 leading-relaxed">I have one final message for you. Please take a moment to open it.</p>
          {!showFinal ? (
            <button onClick={() => setShowFinal(true)} className="mt-6 bg-[#e8c268] text-black px-6 py-3.5 rounded-full text-[14px] font-bold w-full max-w-[280px]">There Is One More Thing... ❤️</button>
          ) : (
            <div className="mt-8 animate-pulse">
              <p className="text-[52px]">❤️</p>
              <h3 className="text-[30px] font-serif text-[#e8c268] mt-2 leading-tight">You Will Always<br />Be Appreciated.</h3>
              <p className="text-slate-200 text-[14px] leading-[1.8] mt-4">No matter how far my journey takes me, I will always remember the man who gave me everything. Thank you for being my first hero. You are appreciated more than words can say. With love and respect, always.</p>
              <p className="text-[11px] text-slate-500 mt-8">Made with ❤️ for Abayo | November 12th | By Oluwatobiloba</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}