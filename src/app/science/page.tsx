
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
  quote: string;
  link: string;
  linkText: string;
}

const clinicallyBackedIngredientsData: IngredientInfo[] = [
  {
    name: 'L-Citrulline',
    summary: 'Supports blood flow and reduces fatigue during exercise.',
    quote: 'L‑Citrulline supplementation significantly increased plasma L‑arginine levels and reduced completion time by 1.5% (p < 0.05)... improved subjective feelings of muscle fatigue and concentration…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26900386/',
    linkText: 'PMID: 26900386',
  },
  {
    name: 'Palatinose / Isomaltulose',
    summary: 'Improves sustained energy and performance without blood sugar spikes.',
    quote: 'Time trial finishing time (–2.7%) and power output during the final 5 min (+4.6%) were improved…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27347996/',
    linkText: 'PMID: 27347996',
  },
  {
    name: 'Cluster Dextrin',
    summary: 'Carbohydrate source with lower gut stress and smoother delivery.',
    quote: 'The RPE increased… was significantly less at 30 and 60 min after ingesting HBCD...',
    link: 'https://pubmed.ncbi.nlm.nih.gov/25080121/',
    linkText: 'PMID: 25080121',
  },
  {
    name: 'Beta-Alanine',
    summary: 'Delays muscular fatigue during high-intensity training.',
    quote: 'Exercise lasting 60–240 s was improved (P = 0.001)… median improvement is 2.85%.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27797728/',
    linkText: 'PMID: 27797728',
  },
  {
    name: 'Betaine Anhydrous',
    summary: 'Boosts power output and hormonal support during training.',
    quote: 'Betaine supplementation improved CrossFit performance… and increased testosterone levels…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37409757/',
    linkText: 'PMID: 37409757',
  },
  {
    name: 'Nitrosigine',
    summary: 'Promotes nitric oxide and blood flow for muscle pumps.',
    quote: 'Nitrosigine and CM increased FMD by 31 and 34%, respectively…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32093766/',
    linkText: 'PMID: 32093766',
  },
  {
    name: 'L-Theanine',
    summary: 'Reduces jitters and improves focus when combined with caffeine.',
    quote: 'The L-theanine and caffeine combination improved both speed and accuracy… and reduced susceptibility to distracting information…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
    linkText: 'PMID: 18681988',
  },
  {
    name: 'L-Tyrosine',
    summary: 'Supports cognitive endurance under stress.',
    quote: 'Subjects cycled longer in TYR compared to PLA (80.3 min vs. 69.2 min; P < 0.01).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/21437603/',
    linkText: 'PMID: 21437603',
  },
  {
    name: 'Alpha-GPC',
    summary: 'Improves power output and supports mental focus.',
    quote: 'Alpha-GPC treatment resulted in significantly greater isometric mid-thigh pull peak force…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26582972/',
    linkText: 'PMID: 26582972',
  },
  {
    name: 'Huperzine A',
    summary: 'Experimental nootropic that may enhance focus.',
    quote: 'Ratings of subjective difficulty post-exercise were significantly higher in the huperzine A trial.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/34567353/',
    linkText: 'PMID: 34567353',
  },
  {
    name: 'Caffeine Anhydrous',
    summary: 'Increases endurance, alertness, and time-to-exhaustion.',
    quote: 'Time to exhaustion in running tests was improved with caffeine (g = 0.392; p < 0.001...)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36615805/',
    linkText: 'PMID: 36615805',
  },
  {
    name: 'Dicaffeine Malate',
    summary: 'Provides a smoother, crash-free caffeine experience.',
    quote: 'The half-life of dicaffeine malate is higher… creates a ‘slow-release’ of caffeine...',
    link: 'https://nutrabio.com/blogs/blog/ingredients-101-infinergy-caffeine',
    linkText: 'NutraBio Source',
  },
  {
    name: 'Rhodiola Rosea',
    summary: 'Supports endurance and reduces perceived effort during training.',
    quote: 'Subjects completed the 6-mile bicycle time trial significantly faster… and mean RPE was lower…',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23443221/',
    linkText: 'PMID: 23443221',
  },
  {
    name: 'Taurine',
    summary: 'Improves endurance performance and capacity.',
    quote: 'TTE > CP increased by 1.7 min after taurine… CP was higher (212 W) vs. placebo (193 W).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31482309/',
    linkText: 'PMID: 31482309',
  },
  {
    name: 'Pink Himalayan Salt + Potassium Citrate',
    summary: 'Replenishes electrolytes and supports muscle function.',
    quote: 'Athletes assigned to salt capsules completed the race 4.9 min faster… cramps significantly lower (11% vs. 42%).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/25683094/',
    linkText: 'PMID: 25683094',
  },
];


export default function SciencePage() {
  const principles = [
    {
      icon: <FlaskConical className="h-10 w-10 text-primary" />,
      title: 'Evidence-Based Ingredients',
      description: 'Every ingredient in MAT BLK formulations is selected based on robust scientific research and proven efficacy. We prioritize compounds with strong clinical backing.',
    },
    {
      icon: <Microscope className="h-10 w-10 text-primary" />,
      title: 'Clinical Dosages for Real Results',
      description: 'We believe in transparency and effectiveness. Our supplements contain ingredients at clinically studied dosages to ensure you experience tangible benefits.',
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: 'Rigorous Quality & Purity Testing',
      description: 'MAT BLK products undergo stringent third-party testing to guarantee purity, potency, and safety, adhering to the highest manufacturing standards (cGMP).',
    },
  ];

  const clinicallyBackedIngredients = clinicallyBackedIngredientsData;

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
            The Science Behind MAT BLK
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            At MAT BLK, our commitment to excellence is rooted in scientific integrity. We develop cutting-edge supplements formulated for those who seek uncompromising quality and performance.
          </p>
        </div>
      </section>

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
          <Accordion type="multiple" className="w-full max-w-4xl mx-auto space-y-4">
            {clinicallyBackedIngredients.map((ingredient, index) => (
              <AccordionItem
                key={ingredient.name}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up"
                style={{animationDelay: `${(index * 0.1) + 0.3}s`}}
              >
                <AccordionTrigger className="font-headline text-2xl md:text-3xl text-primary hover:no-underline text-left focus:text-primary/80 px-6 py-5">
                  {ingredient.name}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="font-body text-base text-muted-foreground mb-4">{ingredient.summary}</p>
                  <blockquote className="font-body text-base italic border-l-4 border-primary pl-4 py-2 my-4 bg-muted/30 rounded-r-md text-foreground/80">
                    {ingredient.quote}
                  </blockquote>
                  <a
                    href={ingredient.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-base text-primary hover:text-primary/80 hover:underline inline-flex items-center gap-1"
                  >
                    <LinkIcon className="h-4 w-4" />
                    {ingredient.linkText}
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
