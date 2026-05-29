import AdinkraDivider from './AdinkraDivider';
import AdinkraFloating from './AdinkraDecorations';

interface EulogyCardProps {
  title: string;
  placeholder: string;
}

const EulogyCard = ({ title, placeholder }: EulogyCardProps) => (
  <div className="bg-cream rounded-sm p-8 md:p-10 shadow-lg">
    <h3 className="text-2xl font-serif-display text-[hsl(var(--gold-muted))] mb-6">
      {title}
    </h3>
    <p className="text-[hsl(0,0%,30%)] font-body leading-relaxed text-sm md:text-base whitespace-pre-line">
      {placeholder}
    </p>
  </div>
);

const EulogySection = () => {
  return (
    <section id="eulogies" className="py-20 px-4 bg-charcoal-deep scroll-mt-nav relative overflow-hidden">
      <AdinkraFloating symbol="gye-nyame" className="absolute top-16 left-6 w-20 h-20 text-[hsl(var(--gold-muted))] opacity-[0.06] md:w-28 md:h-28" />
      <AdinkraFloating symbol="ese-ne-tekrema" className="absolute bottom-20 right-8 w-16 h-16 text-[hsl(var(--gold-muted))] opacity-[0.05] md:w-24 md:h-24" />
      <AdinkraFloating symbol="funtunfunefu" className="absolute top-1/2 right-4 w-12 h-12 text-[hsl(var(--gold-muted))] opacity-[0.04] md:w-16 md:h-16" />
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif-display text-gold text-center gold-glow mb-2">
          Awerɛhyem
        </h2>
        <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-8 font-body">
          Eulogies & Tributes
        </p>

        <AdinkraDivider symbol="sankofa" />

        <div className="mt-8 space-y-8">
          <EulogyCard
            title="Eulogy from His Wife"
            placeholder={"There are no words adequate enough to describe the loss of my husband. A man cherished deeply by everyone whose life he touched.\n\nWords cannot begin to express the sadness that fills my heart knowing you have passed on to another world. The news left everyone speechless, and the void you have left behind is one that cannot be measured.\n\nIt is a great loss for me. He will always hold a unique place in my heart. I know there is nothing I can do to make this pain go away, but I take comfort in knowing that he has left behind an eternal flame within our hearts. Even when I cannot see the sun, I know it is still there, shining down from the sky, spreading its warmth, reminding me that love never truly fades.\n\nDeath can only separate us in body but never in spirit. You will remain in my heart forever, today, tomorrow, and always. Until we meet again."}
          />

          <AdinkraDivider symbol="nkontim" className="py-4" />

          <EulogyCard
            title="Eulogy from His Son"
            placeholder={"How do I say goodbye to someone who's been with me for my whole life? You gave me my name and the color of your eyes and I see your face when I look at mine.\n\nHi Dad, I never really truly knew what \"missing someone\" actually felt like until now. It's almost indescribable the multitude of feelings that come with grief. I still have things I want to tell you. Things that have been going on in my head for a while. This is an ending no one could have guessed. Just time moving forward and taking you with it. Somehow the world kept going just like it's supposed to. You left before you could see me be the man you always wanted me to be and it hurts me every single day. Not a day goes by that I don't think about you, miss your voice and the way you loved Rose and I.\n\nLife hasn't been the same without you. There are moments when the pain of your absence hits harder than ever. One thing you said that has stuck with me \"Give thanks to God always\". I battled for weeks with this statement because I kept asking God why this happened knowing fully well I wanted to retire you the next time you made your trip to Ghana.\n\nIt's taking all the strength in me to write this because I'm still struggling with the fact that we don't get to see you anymore. I pushed off writing this for so long because all of this feels like a horrible nightmare.\n\nYou were a gift. The kind that didn't need grand gestures to show his love. You sacrificed so much just so we could be comfortable.. It was always the small things. Always checking in and always responding with \"Thank you\" everytime we asked you how you were doing. You carried yourself with a quiet dignity that I still find myself trying to imitate.\n\nIt hurts me more when I think about all the conversations we didn't get to finish. The moments I was saving for \"later\" not knowing later would run out. I'd give anything for one more phone call. One more chance to tell you how much you meant to me and how deeply you shaped the person I am still becoming.\n\nDad, you were consistent. You were faithful. You were present in the ways that mattered most.\n\nSo I'll carry you forward. Into every room I walk into. Into the man I'm still becoming. The one you always believed I would be, even before I believed it myself.\n\nI'll give thanks to God always, Dad. Even on the hardest days. Even when it doesn't make sense. Because you showed me that's what faith looks like.\n\nUntil we meet again. Rest well. You've earned it."}
          />

          <AdinkraDivider symbol="nkontim" className="py-4" />

          <EulogyCard
            title="Eulogy from His Daughter"
            placeholder={"Mr Amponsah, as I would call him when he hadn't called me in a while. And he would reply \"mommy, mommy\". I never knew when this day was going to come but I always believed that you would be there to see me become the woman you wanted me to be: Educated, Bold, Brave, Strong and Influential. Most of all, rooted in the Word of God. You sacrificed a lot for us Daddy, a lot for me. When I fondly teased about how I want to pay you back, you'd say \"no o, mommy, keep your money\". You made sure I attended one of the best schools known and made sure I was able to scale further. Every time we speak, we would reminisce on old memories you have of me, like \"ice cream for money\", \"normal stew\" and \"how I said I wasn't going to eat lunch in school because my daddy didn't want me to be fat\". I would always ask you if you've eaten your usual beans and jollof, although I never understood the combination. I remember when you were telling me about a parfait you ate that bothered your stomach and I told you I'd make you a better one when I come home. You told me you'd write the list of things you wanted me to cook for you because you absolutely loved my cooking, especially my jollof. Unfortunately, you won't be here to eat it any longer, my love. You won't bring me fried chicken that would make my tummy hurt. You won't be here to cook me your varieties of fufu and varieties of soup, and sadly, you won't be here to see me graduate from my PhD. Daddy, I did this for you. You always taught me to believe and have faith. You told me so many stories about the faith. And because of this, I was able to achieve. You always loved to read Psalm 24 vs 7-10 and encouraged me to read my bible everyday. Now, who am I going to send my random selfies to and share all my achievements, who am I going to call Dr. Ing's father? Whom am I going to tease about always replying \"thanks\" to whatever message you send. And most of all, who is going to call me \"Mommy mommy\" to whom I will respond \"daddy daddy\". I will miss you so much daddy but one thing is for sure, I would never stop making you proud. Until we meet again, rest well, Mr Amponsah, my daddy, my teacher and my love! Adieu Papa, from: your mommy"}
          />
        </div>
      </div>
    </section>
  );
};

export default EulogySection;
