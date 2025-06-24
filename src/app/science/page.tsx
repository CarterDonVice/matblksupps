
import Image from 'next/image';
import { FlaskConical, Microscope, ClipboardCheck, Brain } from 'lucide-react';
import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'The Science Behind MAT BLK | MAT BLK Supplements',
  description: 'Discover the science-driven approach behind MAT BLK Supplements, focusing on evidence-based ingredients and clinical dosages for optimal performance.',
};

interface IngredientInfo {
  name: string;
  summary: string;
}

interface IngredientCategory {
    title: string;
    ingredients: IngredientInfo[];
}

const scienceData: IngredientCategory[] = [
  {
    title: "Carbs",
    ingredients: [
      { name: "Palatinose (Isomaltulose)", summary: "A slow-digesting, low-glycemic carbohydrate derived from beet sugar, Palatinose provides sustained blood glucose and energy release. It prevents sharp insulin spikes and crashes, supporting endurance-based performance. It’s included in pre‑workouts to supply long-lasting fuel without gastrointestinal upset." },
      { name: "Cluster Dextrin", summary: "Cluster Dextrin is a highly-branched cyclic dextrin engineered for rapid gastric emptying and low osmolality. It delivers fast, clean energy while minimizing gut distress—ideal for high-volume or intense sessions. It’s a staple carb in formulas focused on performance and recovery." }
    ]
  },
  {
    title: "Pump / Performance",
    ingredients: [
      { name: "L-Citrulline", summary: "An amino acid that reliably raises plasma arginine and boosts nitric oxide production, L‑Citrulline promotes vasodilation. This improves blood flow and enhances muscle “pump” and nutrient delivery during workouts. It’s a foundational pump agent in performance supplements." },
      { name: "Betaine Anhydrous", summary: "Betaine is a naturally occurring compound that supports cellular hydration, methylation processes, and intracellular osmolyte balance. It directly enhances strength and power output while accelerating recovery. Its inclusion aims to improve performance and body composition over time." },
      { name: "Nitrosigine", summary: "A patented complex of arginine and inositol-stabilized silicate, Nitrosigine increases nitric oxide within 15–30 minutes. This enhances blood flow, cognitive clarity, and focus during training. It’s clinically dosed in pre‑workouts to support pump and mental acuity." },
      { name: "Agmatine Sulfate", summary: "Agmatine is a metabolite of arginine that stimulates nitric oxide synthase and inhibits arginase, prolonging nitric oxide production. It supports vascular dilation, enhancing pump and nutrient delivery. It’s included to sustain vascular effects and improve mind-muscle connection." }
    ]
  },
  {
    title: "Endurance",
    ingredients: [
      { name: "Beta-Alanine", summary: "A direct precursor to carnosine, Beta‑Alanine buffers intramuscular acidity, delaying lactic acid onset. It extends duration and intensity during high-repetition, fatigue-prone sets. Its characteristic tingling effect signals proper dosing and performance enhancement." },
      { name: "Rhodiola Rosea", summary: "This adaptogenic herb stabilizes stress-response systems and supports energy metabolism when under physical fatigue. It boosts endurance capacity and lowers perceived exertion. It’s included to enhance both physical output and mental resilience." },
      { name: "Uridine Monophosphate", summary: "Uridine Monophosphate is a nucleotide that supports neural phospholipid synthesis and neurotransmitter release, enhancing mental clarity and focus during training. It improves cognitive endurance, sustaining workout intensity. It’s used as a targeted nootropic in pre-workout stacks." },
      { name: "Hordenine", summary: "Hordenine is a phenethylamine derivative that mobilizes norepinephrine from nerve terminals, enhancing mood, alertness, and metabolic rate. It provides a clean, sharp energy and drive during exercise. It’s included to intensify focus and metabolic activity in stimulant blends." }
    ]
  },
  {
    title: "Focus / Nootropic",
    ingredients: [
      { name: "L-Tyrosine", summary: "The direct precursor to catecholamine neurotransmitters, L‑Tyrosine supports mental resilience, mood, and focus under training stress. It attenuates cognitive fatigue during high-pressure workouts. It’s included to maintain mental performance and workout consistency." },
      { name: "Alpha‑GPC", summary: "Alpha‑GPC is a choline donor that boosts acetylcholine production, enhancing neuromuscular transmission, power output, and focus. It stimulates growth hormone release under stress. It’s a premium nootropic chosen for strength and cognitive clarity." },
      { name: "L‑Theanine", summary: "L‑Theanine is a bioactive amino acid that promotes alpha-brain wave activity and calm focus, counterbalancing stimulant-induced jitteriness. It smooths stimulant energy while enhancing concentration. It’s the go-to ingredient for balanced energy delivery." },
      { name: "Huperzine A", summary: "A potent acetylcholinesterase inhibitor, Huperzine A prolongs acetylcholine activity for improved memory, focus, and neuromuscular efficiency. It supports sustained mental clarity during extended workouts. Used in small doses for targeted nootropic effect." },
      { name: "Cognizin™ (Citicoline)", summary: "Citicoline is an efficient choline source that supports brain energy metabolism, increasing attention span, reaction speed, and visual processing. It enhances cognitive and athletic performance simultaneously. It’s included for multi-domain neuro-performance support." }
    ]
  },
  {
    title: "Energy / Stimulants",
    ingredients: [
        { name: "Caffeine Anhydrous", summary: "A fast-absorbing stimulant that blocks adenosine receptors, Caffeine enhances alertness, endurance, and time-to-exhaustion. It’s clinically dosed to boost workout performance and cognitive drive. It's the gold standard stimulant in pre‑workouts." },
        { name: "Dicaffeine Malate", summary: "This buffered form of caffeine delivers delayed-release energy via malic acid esterification. It reduces crash and anxiety while extending energy duration. It’s included to enhance endurance and smooth stimulant effect." },
        { name: "Alpha‑Yohimbine (Rauwolscine)", summary: "A potent alpha-2 adrenergic antagonist, Rauwolscine increases sympathetic tone and lipolysis, raising energy expenditure. It enhances alertness and fat-burning, especially in fasted states. It’s included for aggressive stimulant formulations." },
        { name: "Theobromine", summary: "A mild methylxanthine stimulant, Theobromine increases vasodilation and mood without elevating blood pressure. It provides smooth energy and enhances endurance. It’s used to complement caffeine and support vascular performance." },
        { name: "Eria Jarensis", summary: "A natural orchid extract rich in PEA derivatives that boost dopamine and noradrenaline, Eria triggers elevated mood, motivation, and drive. It delivers a euphoric, laser-like focus for training sessions. It’s included in high-stim blends for maximum motivational effect." },
        { name: "NPDC", summary: "NPDC is a proprietary stimulant or nootropic agent included to enhance energy and cognitive intensity. While its chemical structure isn’t disclosed, its placement indicates synergy in multi-stimulant blends. It’s included to round out the stimulant and focus profile." }
    ]
  },
  {
      title: "Hydration / Electrolytes",
      ingredients: [
        { name: "Sea Salt", summary: "A natural source of sodium, Sea Salt replenishes lost electrolytes, supports fluid balance, and sustains proper muscle contraction. It improves endurance performance and pump maintenance. Essential for sweat compensation in intense workouts." },
        { name: "Potassium Citrate", summary: "Potassium is vital for nerve conduction and muscle function; citrate aids absorption and buffering. It prevents cramping and supports cellular hydration. It’s integrated into pre‑workouts to maintain electrolyte balance and performance." },
        { name: "Taurine", summary: "An amino sulphonic acid that regulates cell hydration, stabilizes calcium flux in muscles, and supports cardiovascular and antioxidant function. It enhances endurance and endurance capacity under physical stress. It’s included to support recovery and physiological resilience." }
      ]
  }
];


export default function SciencePage() {
  const principles = [
    {
      icon: <FlaskConical className="h-10 w-10 text-primary" />,
      title: 'Evidence-Based Formulation',
      description: 'Every ingredient is selected based on a comprehensive review of scientific literature. We prioritize compounds with human clinical trials demonstrating their efficacy and safety for performance enhancement.',
    },
    {
      icon: <Microscope className="h-10 w-10 text-primary" />,
      title: 'Clinical Dosing',
      description: 'We don’t believe in "fairy dusting." Our formulas contain ingredients at dosages shown to be effective in scientific studies. We provide full transparency so you know exactly what you’re getting.',
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: 'Third-Party Verification',
      description: 'Trust is earned. All our products undergo rigorous third-party testing to guarantee purity, potency, and safety, adhering to the highest manufacturing standards (cGMP).',
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Clinically Backed Ingredients Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              THE SCIENCE BEHIND MAT BLK
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into the research behind our premium formulations. Each ingredient is chosen for its anecdotal and scientifically proven efficacy and synergistic potential. Here at MAT BLK, we develop cutting-edge supplements formulated for those who seek more out of their body and their supplements.
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto space-y-12">
            {scienceData.map((category, categoryIndex) => (
                <div key={category.title}>
                    <h3 className="font-headline text-3xl md:text-4xl text-primary mb-8 text-center animate-fade-in-up">
                        {category.title}
                    </h3>
                    <Accordion type="multiple" className="space-y-4">
                        {category.ingredients.map((ingredient, ingredientIndex) => (
                            <AccordionItem
                                key={ingredient.name}
                                value={`item-${categoryIndex}-${ingredientIndex}`}
                                className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl"
                                style={{animationDelay: `${(ingredientIndex * 0.1) + 0.3}s`}}
                            >
                                <AccordionTrigger className="font-headline text-xl md:text-2xl text-primary hover:no-underline text-left focus:text-primary/80 px-6 py-5">
                                    {ingredient.name}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 pt-0">
                                    <p className="font-body text-base text-muted-foreground mb-4">{ingredient.summary}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Image
                src="https://placehold.co/700x500.png" 
                alt="MAT BLK Scientific Research"
                width={700}
                height={500}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="scientific research"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="font-headline text-4xl font-bold text-foreground">
                Driven by Data, <span className="text-primary">Validated by Performance.</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Our product development process is meticulous and data-driven. We scrutinize scientific literature, collaborate with experts, and focus on synergistic ingredient combinations that amplify results. We don't chase trends; we build formulations that stand up to scientific scrutiny.
              </p>
              <p className="font-body text-lg text-muted-foreground">
                From sourcing premium raw materials to ensuring precise manufacturing, every step is guided by our dedication to delivering supplements that are not only effective but also safe and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Scientific Principles
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The core tenets that guide our formulation and quality assurance processes.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="p-8 bg-background rounded-lg shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${(index * 0.15) + 0.2}s`}}
              >
                <div className="flex justify-center mb-6">
                  {principle.icon}
                </div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 text-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovate. Validate. Elevate.
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            MAT BLK is dedicated to continuous improvement and innovation, always grounded in scientific evidence to help you achieve your peak potential.
          </p>
        </div>
      </section>
    </div>
  );
}
    

    