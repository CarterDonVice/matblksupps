
import Image from 'next/image';
import { FlaskConical, Microscope, ClipboardCheck, Brain, Link as LinkIcon } from 'lucide-react';
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
  quote?: string;
  link?: string;
  linkText?: string;
}

const clinicallyBackedIngredientsData: IngredientInfo[] = [
    { name: "Palatinose (Isomaltulose)", summary: "Palatinose is a low-glycemic, slow-digesting carbohydrate derived from beet sugar. It provides sustained energy without insulin spikes or crashes, making it ideal for endurance and pre‑workout use. Its prolonged glucose release helps support steady fuel for training." },
    { name: "Cluster Dextrin", summary: "Cluster Dextrin (Highly Branched Cyclic Dextrin) is a designer carb engineered for fast gastric emptying and low osmolality. It delivers rapid, clean energy without GI distress, especially during high-volume or endurance sessions. It's popular for performance-focused intra/pre formulas." },
    { name: "L-Citrulline", summary: "L-Citrulline is an amino acid that raises blood arginine levels, increasing nitric oxide production. This improves vasodilation, muscle pumps, and nutrient delivery during training. It’s a foundational ingredient for pre‑workouts aiming at performance and visual fullness." },
    { name: "Betaine Anhydrous", summary: "Betaine is a compound found in beets that aids in cellular hydration and methylation. It enhances power output, reduces fatigue, and may support hormone balance during intense training. It's often used to improve strength and body composition over time." },
    { name: "Nitrosigine", summary: "Nitrosigine is a patented complex of arginine and inositol-stabilized silicate that significantly boosts nitric oxide levels. It enhances blood flow and cognitive performance within 15 minutes, making it a dual-action pump and focus ingredient. Its effects are clinically verified for workouts." },
    { name: "Agmatine Sulfate", summary: "Agmatine is a metabolite of arginine that may inhibit arginase, prolonging nitric oxide production and enhancing blood flow. It also has neuromodulatory properties that could boost focus and mood. Often stacked with citrulline for synergistic pumps." },
    { name: "Beta-Alanine", summary: "Beta-Alanine is a precursor to carnosine, which buffers lactic acid in muscles. It delays fatigue during high-rep or high-intensity training by raising intramuscular pH. It’s responsible for the common tingling (paresthesia) effect." },
    { name: "Rhodiola Rosea", summary: "Rhodiola is an adaptogenic herb used to reduce fatigue, improve endurance, and support mental resilience. It modulates stress hormones and increases mitochondrial efficiency. Frequently included to improve both cognitive and physical performance." },
    { name: "Uridine Monophosphate", summary: "Uridine supports the synthesis of phospholipids in brain cell membranes, enhancing neuroplasticity and focus. In pre‑workouts, it's used as a cognitive amplifier to maintain mental clarity under physical stress. Often paired with choline sources for synergy." },
    { name: "Hordenine", summary: "Hordenine is a plant alkaloid thought to stimulate the release of norepinephrine, increasing energy and mood. It may act as a mild MAO-B inhibitor, prolonging stimulant activity. Its inclusion is often for intensity, focus, and fat-burning support." },
    { name: "L-Tyrosine", summary: "L-Tyrosine is a precursor to dopamine, norepinephrine, and epinephrine — key neurotransmitters for mood and focus. It supports cognitive endurance during stress-heavy activities like intense training. Often used to offset mental burnout from stimulants." },
    { name: "Alpha-GPC", summary: "Alpha-GPC is a choline donor that enhances acetylcholine production, supporting focus, motor control, and muscle contractions. It may also increase power output and growth hormone levels during exercise. A cornerstone nootropic for both athletes and students." },
    { name: "L-Theanine", summary: "L-Theanine is a calming amino acid from tea leaves that promotes alpha brain waves. It smooths out the harsh edge of stimulants, creating a more focused, calm energy without sedation. Best paired with caffeine for synergistic effects." },
    { name: "Huperzine A", summary: "Huperzine A is a potent acetylcholinesterase inhibitor that prolongs acetylcholine activity. This results in improved memory, focus, and muscle-mind connection. Often used in small doses to enhance other nootropics." },
    { name: "Cognizin (Citicoline)", summary: "Citicoline is a highly bioavailable choline source that enhances brain energy metabolism and acetylcholine production. It improves focus, reaction time, and neuroprotection. Cognizin is the patented form known for cognitive and visual processing enhancement." },
    { name: "Caffeine Anhydrous", summary: "Caffeine stimulates the central nervous system, increasing energy, alertness, and endurance. It's well-documented for improving workout performance and delaying fatigue. Anhydrous form provides rapid onset for pre‑workout timing." },
    { name: "Dicaffeine Malate", summary: "This is a buffered form of caffeine bound to malic acid that provides smoother, extended energy. It reduces the crash and anxiety sometimes caused by standard caffeine. Used in pre‑workouts to extend performance duration without overstimulation." },
    { name: "Alpha Yohimbine (Rauwolscine)", summary: "Alpha-yohimbine is a potent alpha-2 antagonist that promotes fat breakdown, energy, and mental drive. It's often used in cutting formulas for its thermogenic effects. However, it’s also known for being “harsh” in sensitive users." },
    { name: "Theobromine", summary: "A mild stimulant from cocoa, theobromine widens blood vessels and enhances mood. It provides a longer-lasting, gentler energy than caffeine. Used in pre‑workouts to complement other stims and improve vascularity." },
    { name: "Eria Jarensis", summary: "Eria Jarensis extract contains phenethylamine-like compounds that elevate mood and energy. Often compared to DMAA/DMHA, it provides a euphoric, high-focus effect. Used in high-stim pre‑workouts for its powerful central stimulation." },
    { name: "NPDC", summary: "NPDC appears to be a proprietary or branded ingredient with stimulant or focus-enhancing claims, but its composition is undisclosed. Likely included for synergistic energy effects, but efficacy is unclear without full transparency." },
    { name: "Sea Salt", summary: "Sea salt replenishes sodium lost in sweat, supporting muscle contraction and hydration. It also helps with pump when combined with nitric oxide boosters. A small but critical electrolyte in serious pre‑workout formulas." },
    { name: "Potassium Citrate", summary: "Potassium is essential for nerve conduction and muscular function. Citrate form enhances absorption and alkalinity. Included to support hydration and prevent cramping." },
    { name: "Taurine", summary: "Taurine supports electrolyte balance, muscle contraction, and cellular hydration. It also has antioxidant and endurance-enhancing effects. Popular for performance support and improved cardiovascular function under stress." }
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

  const clinicallyBackedIngredients = clinicallyBackedIngredientsData;

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
          {clinicallyBackedIngredients.length > 0 && (
            <Accordion type="multiple" className="w-full max-w-4xl mx-auto space-y-4">
              {clinicallyBackedIngredients.map((ingredient, index) => (
                <AccordionItem
                  key={ingredient.name}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl"
                  style={{animationDelay: `${(index * 0.1) + 0.3}s`}}
                >
                  <AccordionTrigger className="font-headline text-2xl md:text-3xl text-primary hover:no-underline text-left focus:text-primary/80 px-6 py-5">
                    {ingredient.name}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="font-body text-base text-muted-foreground mb-4">{ingredient.summary}</p>
                    {ingredient.quote && (
                        <blockquote className="font-body text-base italic border-l-4 border-primary pl-4 py-2 my-4 bg-muted/30 rounded-r-md text-foreground/80">
                            {ingredient.quote}
                        </blockquote>
                    )}
                    {ingredient.link && ingredient.linkText && (
                        <a
                        href={ingredient.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-base text-primary hover:text-primary/80 hover:underline inline-flex items-center gap-1"
                        >
                        <LinkIcon className="h-4 w-4" />
                        {ingredient.linkText}
                        </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
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

      <section className="py-20 md:py-32 text-center bg-card">
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
    
