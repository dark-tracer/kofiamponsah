import AdinkraDivider from './AdinkraDivider';

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
    <section id="eulogies" className="py-20 px-4 bg-charcoal-deep scroll-mt-nav">
      <div className="max-w-3xl mx-auto">
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
            placeholder="[Wife's eulogy text will go here. Share memories, love, and the life you built together. This section is styled for comfortable reading with dark text on a warm cream background.]"
          />

          <AdinkraDivider symbol="nkontim" className="py-4" />

          <EulogyCard
            title="Eulogy from His Son"
            placeholder="[Son's eulogy text will go here. Share what your father meant to you, the lessons he taught, and how his legacy lives on through you.]"
          />

          <AdinkraDivider symbol="nkontim" className="py-4" />

          <EulogyCard
            title="Eulogy from His Daughter"
            placeholder={"My eulogy to my dad\nMr Amponsah, Mr Amponsah, as I would call him, when he hadn't called me in a while. And he would reply \"mommy, mommy\". I never knew when this day was going to come but I always believed that you would be there to see me become the woman you wanted me to be: Educated, Bold, Brave, Strong and Influential. Most of all, rooted into the Word of God. You sacrificed a lot for us daddy, a lot for me. When I fondly teased about how I want to pay you back, you'd say \"no o, mommy, keep your money\". You made sure I attended one of the best schools known and made sure I was able to scale further. Every time we speak, we would reminiscence on old memories you have of me, like \"ice cream for money\", \"normal stew\" and \"how I said I wasn't going to eat lunch in school because my daddy didn't want me to be fat\". I would always ask you if you've eaten your usual beans and jollof, although I never understood the combination. I remember when you were telling me about a parfait you ate that bothered your stomach and I told you I'd make you a better one when I come home. You told me you'd write the list of things you wanted me to cook for you because you absolutely loved my cooking, especially my jollof. Unfortunately, you won't be here to eat it any longer, my love. You won't bring me fried chicken that would make my tummy hurt. You won't be here to cook me your varieties of fufu and varieties of soup, and sadly, you won't be here to see me graduate from my PhD. Daddy, I did this for you. You always taught me to believe and have faith. You told me so many stories about the faith. And because of this, I was able to achieve. You always loved to read psalm 24vs 7-10 and encouraged me to read my bible everyday. Now, who am I going to send my random selfies to and share all my achievements, who am I going to call Dr. Ing's father? Whom am I going to tease about always replying \"thanks\" to whatever message you send. And most of all, who is going to call me \"Mommy mommy\" to whom I will respond \"daddy daddy\". I will miss you so much daddy but one thing is for sure, I would never stop making you proud. Until we meet again, rest well, Mr Amponsah, my daddy, my teacher and my love! Adieu Papa, from: your mommy"}
          />
        </div>
      </div>
    </section>
  );
};

export default EulogySection;
