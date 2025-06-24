
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
    name: "L-Citrulline Malate",
    summary: "A powerful amino acid compound that plays a key role in boosting nitric oxide production. This leads to improved blood flow, delivering more oxygen and nutrients to working muscles, resulting in enhanced muscle pumps, endurance, and performance.",
    quote: "Supplementation with citrulline malate has been shown to improve muscle endurance, relieve muscle soreness, and improve anaerobic performance.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4759860/",
    linkText: "Read the study on NIH"
  },
  {
    name: "Beta-Alanine (as CarnoSyn®)",
    summary: "A non-essential amino acid that increases carnosine levels in muscles. Carnosine acts as a buffer against lactic acid buildup, delaying muscle fatigue and allowing for more reps and greater training volume.",
    quote: "Beta-alanine has been shown to enhance muscular endurance. Many people report being able to perform one or two additional reps in the gym when training in sets of 8–15 repetitions.",
    link: "https://jissn.biomedcentral.com/articles/10.1186/s12970-015-0090-y",
    linkText: "International Society of Sports Nutrition stand"
  },
  {
    name: "Creatine Monohydrate",
    summary: "The most researched and validated supplement for increasing high-intensity exercise capacity and lean body mass. It works by regenerating ATP, the primary energy source for short, explosive movements, leading to significant gains in strength and power.",
    quote: "Creatine monohydrate is the most effective ergogenic nutritional supplement currently available to athletes in terms of increasing high-intensity exercise capacity and lean body mass during training.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2048496/",
    linkText: "Journal of the International Society of Sports Nutrition"
  },
  {
    name: "Caffeine Anhydrous",
    summary: "A potent central nervous system stimulant that enhances alertness, focus, and energy levels. It works by blocking adenosine receptors in the brain, reducing the perception of fatigue and effort during exercise.",
    quote: "Caffeine has been shown to be an effective ergogenic aid for a variety of sport and exercise modalities. It can improve performance by up to 12% in endurance events and can also benefit high-intensity, short-duration activities.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4213371/",
    linkText: "Caffeine and exercise: what next?"
  },
  {
    name: "Lion's Mane Mushroom",
    summary: "A powerful nootropic mushroom known for its cognitive-enhancing properties. It supports brain health by stimulating the production of Nerve Growth Factor (NGF), which is crucial for neuron health, focus, and memory.",
    quote: "Studies have shown that Lion's Mane may help with mild cognitive impairment and has neuroprotective effects, making it a key ingredient for mental clarity and focus during demanding tasks.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987239/",
    linkText: "Neurological Activity of Lion's Mane"
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
    
