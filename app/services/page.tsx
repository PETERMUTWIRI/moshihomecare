import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Home, 
  Pill, 
  Sparkles, 
  HandHeart, 
  UserCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Phone,
  Award,
  Stethoscope,
  AlertCircle,
  Calendar,
  FileText,
  Bell,
  Trash2,
  Shirt,
  ChefHat,
  BookHeart,
  CarTaxiFront,
  Brain,
  UtensilsCrossed,
  ShoppingCart,
  Apple,
  Droplets,
  ClipboardCheck,
  Puzzle,
  Activity,
  NotebookPen
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import SectionBackground, { FloatingCard, SectionBadge, BlurredOrb } from '@/components/SectionBackground';
import StatCard from '@/components/StatCard';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Image Background */}
      <SectionBackground
        imageSrc="/images/service-homecare.jpeg"
        imageAlt="Professional homecare services"
        overlay="white-light"
        className="relative"
      >
        {/* Decorative Orbs */}
        <BlurredOrb color="red" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-40" />
        <BlurredOrb color="blue" size="lg" className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-30" />
        
        <div className="pt-28 md:pt-32 lg:pt-40 pb-8 md:pb-16 lg:pb-24">
          <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <SectionBadge 
                  icon={<Heart className="w-4 h-4" />}
                  variant="red"
                  className="mb-3 md:mb-6"
                >
                  Our Services
                </SectionBadge>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-care-navy mb-6 leading-tight tracking-tight">
                  Comprehensive <span className="text-care-red">Homecare Services</span>
                </h1>
                <p className="text-care-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  From daily assistance to specialized care, Moshi Homecare provides a full spectrum of 
                  professional services designed to help your loved ones maintain independence, dignity, 
                  and quality of life in the comfort of their own home.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Why Choose Our Services - Gradient Background */}
      <section className="section-padding bg-gradient-lift relative">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="text-center md:text-left">
                <SectionBadge 
                  icon={<Award className="w-4 h-4" />}
                  variant="blue"
                  className="mb-3 md:mb-6"
                >
                  Why Choose Moshi Homecare
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-6 leading-tight tracking-tight">
                  Care That Adapts to Your Unique Needs
                </h2>
                <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                  Every individual has unique care requirements that evolve over time. That&apos;s why 
                  we take a personalized approach, conducting comprehensive assessments to understand 
                  your loved one&apos;s physical, emotional, and social needs before creating a customized 
                  care plan that addresses every aspect of their well-being.
                </p>
                <div className="space-y-3">
                  {[
                    'Licensed, bonded, and insured caregivers with extensive training',
                    'Personalized care plans that evolve with changing needs',
                    '24/7 on-call support and rapid emergency response',
                    'Seamless coordination with healthcare providers and family',
                    'Regular quality assessments and care plan updates'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-soft hover:shadow-soft-lg transition-shadow">
                      <CheckCircle className="w-5 h-5 text-care-red flex-shrink-0 mt-0.5" />
                      <span className="text-care-gray-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-floating border border-white/40">
                  <Image
                    src="/images/about-story.jpeg"
                    alt="Moshi Homecare caregiver providing personalized care"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 z-10">
                  <StatCard
                    icon={<Users className="w-5 h-5 lg:w-6 lg:h-6" />}
                    value="5,000+"
                    label="Caregivers"
                    variant="glass"
                    animate={false}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Complete Care Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-care mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn>
              <SectionBadge
                icon={<ClipboardCheck className="w-4 h-4" />}
                variant="blue"
                className="mb-6"
              >
                Complete Care Services
              </SectionBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5 tracking-tight">
                Every Service Your Loved One May Need
              </h2>
              <p className="text-care-gray-600 text-lg leading-relaxed">
                From personal care to specialized memory support, every service below is available
                through Moshi Homecare — and each one can be combined into a single personalized
                care plan tailored to your loved one&apos;s needs.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: HandHeart,
                title: 'Personal Care',
                services: ['Bathing & Dressing', 'Oral Hygiene', 'Toileting & Incontinence Care', 'Grooming & Appearance']
              },
              {
                icon: Home,
                title: 'Daily Living Support',
                services: ['Meal Preparation', 'Assistance with Eating', 'Laundry', 'Light Housekeeping', 'Errands & Shopping']
              },
              {
                icon: Stethoscope,
                title: 'Health & Mobility',
                services: ['Medication Reminders', 'Mobility Assistance', 'Transfer Assistance', 'Assistance with Light Exercise']
              },
              {
                icon: Brain,
                title: 'Specialized Care & Companionship',
                services: ['Alzheimer\'s & Dementia Care', 'Respite Care', 'Companionship & Emotional Support', 'Doctor\'s Appointment Escort']
              }
            ].map((category) => (
              <StaggerItem key={category.title}>
                <div className="bg-gradient-soft rounded-2xl p-7 border border-care-gray-100 hover:border-care-gray-200 hover:shadow-elevated transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-xl bg-care-red/10 flex items-center justify-center mb-5 border border-care-red/10">
                    <category.icon className="w-7 h-7 text-care-red" />
                  </div>
                  <h3 className="font-heading text-lg text-care-navy mb-4">{category.title}</h3>
                  <ul className="space-y-2.5">
                    {category.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-care-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-care-red flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service 1: Homecare Services - Image Background */}
      <SectionBackground
        id="homecare"
        imageSrc="/images/service-homecare.jpeg"
        imageAlt="Professional homecare services"
        overlay="gradient"
        className="relative scroll-mt-20"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40">
                  <Image
                    src="/images/service-homecare.jpeg"
                    alt="Professional homecare services"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <FloatingCard variant="white" className="text-center md:text-left">
                  <SectionBadge 
                    icon={<Home className="w-4 h-4" />}
                    variant="red"
                    className="mb-3 md:mb-6"
                  >
                    Comprehensive Care
                  </SectionBadge>
                  <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                    Homecare Services
                  </h2>
                  <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                    Our comprehensive homecare services provide the support your loved ones need to 
                    maintain independence and dignity while remaining in the comfort of their own home. 
                    From personal care to companionship, we deliver compassionate, professional assistance 
                    tailored to each individual&apos;s unique circumstances.
                  </p>
                  <p className="text-care-gray-600 leading-relaxed mb-8">
                    Every client receives a customized care plan developed through in-depth assessments 
                    of their medical history, current health status, daily routines, and personal goals.
                  </p>
                  
                  <h3 className="font-heading text-lg text-care-navy mb-4">Service Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Personalized care plan development',
                      'Trained professional caregivers',
                      'Flexible hourly or live-in care',
                      'Regular care assessments',
                      'Family communication updates',
                      'Healthcare provider coordination'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-warm">
                        <CheckCircle className="w-4 h-4 text-care-red flex-shrink-0" />
                        <span className="text-care-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-heading text-lg text-care-navy mb-4">Care Options</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Hourly Care', desc: '4-8 hours/day assistance' },
                      { title: 'Overnight Care', desc: '8-12 hours/night support' },
                      { title: 'Live-In Care', desc: '24/7 continuous coverage' },
                      { title: 'Respite Care', desc: 'Temporary relief for families' }
                    ].map((option, index) => (
                      <div key={index} className="bg-gradient-warm rounded-xl p-4 border border-care-gray-100">
                        <p className="font-heading text-care-navy">{option.title}</p>
                        <p className="text-care-gray-500 text-sm">{option.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-care-navy rounded-2xl p-6 text-white">
                    <h4 className="font-heading !text-white mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-care-red" />
                      Respite Care: Support for Family Caregivers
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Caring for a loved one is deeply rewarding, but even the most dedicated family 
                      caregivers need time to rest and recharge. Our respite care provides temporary 
                      relief — for a few hours, a weekend, or longer — with the same personalized 
                      attention your loved one receives every day. Flexible scheduling means you can 
                      step away with complete peace of mind.
                    </p>
                  </div>
                </FloatingCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Service 2: Medication Reminder - Light Background */}
      <section id="medication" className="section-padding bg-white">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="order-2 lg:order-1 text-center md:text-left">
                <SectionBadge 
                  icon={<Pill className="w-4 h-4" />}
                  variant="red"
                  className="mb-3 md:mb-6"
                >
                  Medication Management
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                  Medication Reminder Services
                </h2>
                <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                  Proper medication adherence is crucial for managing chronic conditions, preventing 
                  complications, and maintaining overall health. Our medication reminder service ensures 
                  your loved ones take their medications correctly and on time, every time.
                </p>
                <p className="text-care-gray-600 leading-relaxed mb-8">
                  Our caregivers don&apos;t just remind—they observe for side effects, track adherence, 
                  coordinate refills, and communicate with healthcare providers to ensure medication 
                  regimens remain appropriate and effective.
                </p>
                
                <h3 className="font-heading text-lg text-care-navy mb-4">What We Provide</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Clock, text: 'Timely medication reminders' },
                    { icon: Calendar, text: 'Schedule management' },
                    { icon: FileText, text: 'Prescription tracking' },
                    { icon: Bell, text: 'Family notifications' },
                    { icon: AlertCircle, text: 'Side effect monitoring' },
                    { icon: Shield, text: 'Detailed documentation' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-warm">
                      <div className="w-10 h-10 rounded-lg bg-care-red/10 flex items-center justify-center border border-care-red/10">
                        <item.icon className="w-5 h-5 text-care-red" />
                      </div>
                      <span className="text-care-gray-600 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-care-navy rounded-2xl p-6 text-white">
                  <h4 className="font-heading !text-white mb-3">Daily Medication Process</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-care-red font-bold">1.</span>
                      Review daily schedule and prepare medications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-care-red font-bold">2.</span>
                      Administer at prescribed times with documentation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-care-red font-bold">3.</span>
                      Observe and record any reactions or concerns
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-care-red font-bold">4.</span>
                      Complete daily logs and communicate with family
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40 order-1 lg:order-2">
                <Image
                  src="/images/service-medication.jpeg"
                  alt="Medication reminder service"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service 3: Light Housekeeping - Image Background */}
      <SectionBackground
        id="housekeeping"
        imageSrc="/images/service-housekeeping.jpeg"
        imageAlt="Light housekeeping services"
        overlay="gradient"
        className="relative scroll-mt-20"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40">
                  <Image
                    src="/images/service-housekeeping.jpeg"
                    alt="Light housekeeping services"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <FloatingCard variant="white" className="text-center md:text-left">
                  <SectionBadge 
                    icon={<Sparkles className="w-4 h-4" />}
                    variant="red"
                    className="mb-3 md:mb-6"
                  >
                    Clean & Safe Living
                  </SectionBadge>
                  <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                    Light Housekeeping Services
                  </h2>
                  <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                    A clean, organized home environment is essential for senior health, safety, and 
                    emotional well-being. Our light housekeeping services help seniors maintain a 
                    comfortable living space while reducing the physical strain and fall risks associated 
                    with household chores.
                  </p>
                  <p className="text-care-gray-600 leading-relaxed mb-8">
                    Our caregivers are trained to identify and address safety hazards during every 
                    cleaning session, ensuring your loved one&apos;s home remains not just clean, but safe.
                  </p>
                  
                  <h3 className="font-heading text-lg text-care-navy mb-4">Our Housekeeping Services</h3>
                  <div className="space-y-3 mb-8">
                    {[
                      { icon: Sparkles, title: 'Daily Tidying', tasks: ['Dusting surfaces', 'Vacuuming & sweeping', 'Mopping floors'] },
                      { icon: Shirt, title: 'Laundry Care', tasks: ['Washing & drying', 'Folding clothes', 'Changing bed linens'] },
                      { icon: ChefHat, title: 'Kitchen Care', tasks: ['Washing dishes', 'Cleaning appliances', 'Wiping counters'] },
                      { icon: Trash2, title: 'Waste Management', tasks: ['Emptying trash', 'Sorting recycling', 'Cleaning bins'] }
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-4 bg-gradient-warm rounded-xl p-4 border border-care-gray-100">
                        <div className="w-10 h-10 rounded-lg bg-care-red/10 flex items-center justify-center flex-shrink-0 border border-care-red/10">
                          <service.icon className="w-5 h-5 text-care-red" />
                        </div>
                        <div>
                          <p className="font-heading text-care-navy">{service.title}</p>
                          <p className="text-care-gray-500 text-sm">{service.tasks.join(' • ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-care-navy text-white rounded-2xl p-6">
                    <h4 className="font-heading mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-care-red" />
                      Safety Checks Included
                    </h4>
                    <p className="text-white/70 text-sm">
                      Every visit includes clearing walkways, checking lighting, securing loose rugs, 
                      and identifying potential hazards to prevent falls and injuries.
                    </p>
                  </div>
                </FloatingCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Service 4: Daily Living Assistance - Light Background */}
      <section id="daily-living" className="section-padding bg-gradient-lift">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="order-2 lg:order-1 text-center md:text-left">
                <SectionBadge 
                  icon={<HandHeart className="w-4 h-4" />}
                  variant="red"
                  className="mb-3 md:mb-6"
                >
                  Personal Care
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                  Daily Living Assistance
                </h2>
                <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                  Activities of Daily Living (ADLs) are the fundamental self-care tasks that allow 
                  individuals to live independently. When age, illness, or disability makes these 
                  activities challenging, our compassionate caregivers provide dignified assistance 
                  that preserves your loved one&apos;s self-esteem.
                </p>
                <p className="text-care-gray-600 leading-relaxed mb-8">
                  Our approach emphasizes dignity and independence—we encourage clients to participate 
                  in their care to the extent they are able, providing just the right amount of support 
                  needed.
                </p>
                
                <h3 className="font-heading text-lg text-care-navy mb-4">Areas of Support</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Bathing & Hygiene', desc: 'Assistance with bathing, showering, oral care, and grooming while maintaining privacy and dignity.' },
                    { title: 'Dressing & Grooming', desc: 'Help selecting appropriate clothing and assistance with dressing, hair care, and shaving.' },
                    { title: 'Meal Preparation', desc: 'Planning and preparing nutritious meals according to dietary restrictions and preferences.' },
                    { title: 'Mobility Assistance', desc: 'Support with walking, transferring, and positioning to prevent falls and maintain strength.' },
                    { title: 'Toileting Care', desc: 'Respectful assistance with toileting needs and incontinence management.' },
                    { title: 'Transfer Assistance', desc: 'Safe transfers between bed, chair, wheelchair, and other surfaces.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-care-gray-100 shadow-soft hover:shadow-soft-lg transition-shadow">
                      <p className="font-heading text-care-navy text-sm mb-1">{item.title}</p>
                      <p className="text-care-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 bg-care-red/8 rounded-xl p-4 border border-care-red/10">
                  <Stethoscope className="w-6 h-6 text-care-red" />
                  <p className="text-care-gray-600 text-sm">
                    <strong className="text-care-navy">Note:</strong> All personal care is provided by 
                    caregivers trained in proper techniques, infection control, and privacy protection.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40 order-1 lg:order-2">
                <Image
                  src="/images/service-daily-living.jpeg"
                  alt="Daily living assistance"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service 5: Companionship - Image Background */}
      <SectionBackground
        id="companionship"
        imageSrc="/images/service-companionship.jpeg"
        imageAlt="Companionship services"
        overlay="gradient"
        className="relative scroll-mt-20"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40">
                  <Image
                    src="/images/service-companionship.jpeg"
                    alt="Companionship services"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <FloatingCard variant="white" className="text-center md:text-left">
                  <SectionBadge 
                    icon={<UserCircle className="w-4 h-4" />}
                    variant="red"
                    className="mb-3 md:mb-6"
                  >
                    Social Connection
                  </SectionBadge>
                  <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                    Companionship Services
                  </h2>
                  <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                    Social isolation and loneliness can have devastating effects on senior health, 
                    contributing to depression, cognitive decline, and even physical illness. Our 
                    companionship services provide meaningful social interaction that enriches lives, 
                    stimulates minds, and brings joy to daily routines.
                  </p>
                  <p className="text-care-gray-600 leading-relaxed mb-8">
                    Beyond simple presence, our caregivers engage clients in activities they enjoy, 
                    facilitate connections with family and community, and provide the emotional support 
                    that comes from a genuine human connection.
                  </p>
                  
                  <h3 className="font-heading text-lg text-care-navy mb-4">Companionship Activities</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Users, title: 'Conversation', desc: 'Meaningful discussions about life experiences, current events, and personal interests.' },
                      { icon: BookHeart, title: 'Reading & Games', desc: 'Reading aloud, playing cards, board games, puzzles, and other mentally stimulating activities.' },
                      { icon: CarTaxiFront, title: 'Escorted Outings', desc: 'Accompaniment to appointments, shopping, social events, and religious services.' },
                      { icon: Heart, title: 'Emotional Support', desc: 'A caring presence to listen, share joys and concerns, and provide comfort.' }
                    ].map((activity, index) => (
                      <div key={index} className="bg-gradient-warm rounded-xl p-4 border border-care-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <activity.icon className="w-5 h-5 text-care-red" />
                          <p className="font-heading text-care-navy text-sm">{activity.title}</p>
                        </div>
                        <p className="text-care-gray-500 text-xs">{activity.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-l-4 border-care-red shadow-soft">
                    <p className="text-care-gray-600 italic leading-relaxed">
                      &ldquo;The companionship my mother receives from her Moshi Homecare caregiver has 
                      transformed her outlook. She looks forward to their visits, and I have peace 
                      of mind knowing she&apos;s not alone.&rdquo;
                    </p>
                    <p className="text-care-navy font-medium text-sm mt-3">— Sarah M., Daughter of Client</p>
                  </div>
                </FloatingCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Service 6: Alzheimer's & Dementia Care - Image Background */}
      <SectionBackground
        id="dementia"
        imageSrc="/images/service-dementia.jpeg"
        imageAlt="Caregiver providing compassionate memory care to a senior"
        overlay="gradient"
        className="relative scroll-mt-20"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40">
                  <Image
                    src="/images/service-dementia.jpeg"
                    alt="Caregiver providing compassionate memory care to a senior"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <FloatingCard variant="white" className="text-center md:text-left">
                  <SectionBadge
                    icon={<Brain className="w-4 h-4" />}
                    variant="red"
                    className="mb-3 md:mb-6"
                  >
                    Specialized Memory Care
                  </SectionBadge>
                  <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                    Alzheimer&apos;s &amp; Dementia Care
                  </h2>
                  <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                    Caring for a loved one with Alzheimer&apos;s or dementia requires specialized
                    skills, patience, and understanding. Our memory care services provide
                    compassionate, consistent support that keeps your loved one safe, engaged, and
                    comfortable in the familiar surroundings of home — where routines and
                    environment make the greatest difference.
                  </p>
                  <p className="text-care-gray-600 leading-relaxed mb-8">
                    Our caregivers are trained in proven dementia care techniques, including
                    validation, redirection, and routine-building, focusing on reducing confusion
                    and anxiety while preserving dignity, identity, and independence for as long
                    as possible.
                  </p>

                  <h3 className="font-heading text-lg text-care-navy mb-4">Our Memory Care Approach</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Puzzle, title: 'Cognitive Stimulation', desc: 'Puzzles, memory games, music, and reminiscence activities that exercise the mind and spark connection.' },
                      { icon: Shield, title: 'Safety & Wandering Prevention', desc: 'Home safety awareness, consistent routines, and attentive supervision to reduce risks.' },
                      { icon: Clock, title: 'Consistent Routines', desc: 'Familiar schedules and caregiver consistency to reduce confusion and agitation.' },
                      { icon: Heart, title: 'Emotional Reassurance', desc: 'A calm, patient presence that eases anxiety, builds trust, and provides comfort.' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gradient-warm rounded-xl p-4 border border-care-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className="w-5 h-5 text-care-red" />
                          <p className="font-heading text-care-navy text-sm">{item.title}</p>
                        </div>
                        <p className="text-care-gray-500 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-care-navy rounded-2xl p-6 text-white">
                    <h4 className="font-heading !text-white mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-care-red" />
                      Family Support &amp; Communication
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Dementia affects the whole family. We provide regular updates on your loved
                      one&apos;s condition, practical guidance for visiting and communicating, and
                      coordination with physicians and specialists — so you never feel alone in
                      the journey.
                    </p>
                  </div>
                </FloatingCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Service 7: Mealtime & Eating Assistance - Light Background */}
      <section id="mealtime" className="section-padding bg-white scroll-mt-20">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="order-2 lg:order-1 text-center md:text-left">
                <SectionBadge
                  icon={<UtensilsCrossed className="w-4 h-4" />}
                  variant="red"
                  className="mb-3 md:mb-6"
                >
                  Nutrition &amp; Mealtime Support
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                  Mealtime &amp; Eating Assistance
                </h2>
                <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                  Proper nutrition is essential for health, energy, and healing — yet many seniors
                  struggle with reduced appetite, swallowing difficulties, medication side effects,
                  or the physical coordination eating requires. Our mealtime assistance ensures
                  your loved one eats well, stays hydrated, and enjoys meals with dignity.
                </p>
                <p className="text-care-gray-600 leading-relaxed mb-8">
                  Our caregivers provide respectful, patient support at the table and carefully
                  monitor food and fluid intake, watching for changes in appetite or ability that
                  should be shared with family and healthcare providers.
                </p>

                <h3 className="font-heading text-lg text-care-navy mb-4">Mealtime Support Includes</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: UtensilsCrossed, title: 'Respectful Eating Assistance', desc: 'Patient help with feeding, always at your loved one\'s pace and comfort.' },
                    { icon: Apple, title: 'Meal Planning & Preparation', desc: 'Nutritious, favorite meals tailored to dietary needs and preferences.' },
                    { icon: Droplets, title: 'Hydration Reminders', desc: 'Regular encouragement to drink fluids throughout the day.' },
                    { icon: ClipboardCheck, title: 'Intake Monitoring', desc: 'Food and fluid tracking with notes for family and providers.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-warm rounded-xl p-4 border border-care-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-5 h-5 text-care-red" />
                        <p className="font-heading text-care-navy text-sm">{item.title}</p>
                      </div>
                      <p className="text-care-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-care-navy rounded-2xl p-6 text-white">
                  <h4 className="font-heading !text-white mb-3">Dietary Needs Accommodated</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Every meal plan respects medical and personal requirements, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-white/70 text-sm">
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-care-red" /> Diabetic-friendly</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-care-red" /> Low-sodium</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-care-red" /> Soft &amp; pureed textures</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-care-red" /> Allergies &amp; preferences</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40 order-1 lg:order-2">
                <Image
                  src="/images/service-mealtime.jpeg"
                  alt="Caregiver providing gentle mealtime assistance to a senior"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service 8: Errands, Shopping & Appointments - Image Background */}
      <SectionBackground
        id="errands"
        imageSrc="/images/service-errands.jpeg"
        imageAlt="Caregiver supporting a senior with everyday errands and appointments"
        overlay="gradient"
        className="relative scroll-mt-20"
      >
        <div className="section-padding">
          <div className="container-care mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40">
                  <Image
                    src="/images/service-errands.jpeg"
                    alt="Caregiver supporting a senior with everyday errands and appointments"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <FloatingCard variant="white" className="text-center md:text-left">
                  <SectionBadge
                    icon={<ShoppingCart className="w-4 h-4" />}
                    variant="red"
                    className="mb-3 md:mb-6"
                  >
                    Everyday Support
                  </SectionBadge>
                  <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                    Errands, Shopping &amp; Appointments
                  </h2>
                  <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                    Running errands, picking up groceries, and getting to appointments becomes
                    harder with age — but life doesn&apos;t have to slow down. Our caregivers handle
                    everyday tasks and accompany your loved one wherever they need to go, so daily
                    life continues smoothly, safely, and on schedule.
                  </p>
                  <p className="text-care-gray-600 leading-relaxed mb-8">
                    Whether it&apos;s the weekly grocery run or an important doctor&apos;s visit, your
                    caregiver provides dependable transportation support and an extra set of eyes
                    and ears — giving your loved one confidence and your family peace of mind.
                  </p>

                  <h3 className="font-heading text-lg text-care-navy mb-4">How We Help</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: ShoppingCart, title: 'Grocery & Household Shopping', desc: 'Shopping for groceries and home essentials, with your loved one or on their behalf.' },
                      { icon: Pill, title: 'Prescription Pickups', desc: 'Collecting medications and supplies from the pharmacy on schedule.' },
                      { icon: CarTaxiFront, title: 'Appointment Escort', desc: 'Door-to-door accompaniment to medical, dental, and other appointments.' },
                      { icon: NotebookPen, title: 'Notes & Family Updates', desc: 'Asking questions, recording instructions, and sharing updates with family.' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gradient-warm rounded-xl p-4 border border-care-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className="w-5 h-5 text-care-red" />
                          <p className="font-heading text-care-navy text-sm">{item.title}</p>
                        </div>
                        <p className="text-care-gray-500 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-care-navy rounded-2xl p-6 text-white">
                    <h4 className="font-heading !text-white mb-3">Every Appointment, Documented</h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-care-red font-bold">1.</span>
                        Prepare a list of questions and concerns with your family beforehand
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-care-red font-bold">2.</span>
                        Accompany your loved one, take notes, and ask their questions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-care-red font-bold">3.</span>
                        Share a clear summary with family and update the care plan
                      </li>
                    </ul>
                  </div>
                </FloatingCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Service 9: Light Exercise & Active Living - Light Background */}
      <section id="exercise" className="section-padding bg-gradient-lift scroll-mt-20">
        <div className="container-care mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="order-2 lg:order-1 text-center md:text-left">
                <SectionBadge
                  icon={<Activity className="w-4 h-4" />}
                  variant="red"
                  className="mb-3 md:mb-6"
                >
                  Mobility &amp; Strength
                </SectionBadge>
                <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-6 leading-tight">
                  Light Exercise &amp; Active Living
                </h2>
                <p className="text-care-gray-600 leading-relaxed mb-6 text-lg">
                  Gentle, regular movement is one of the most effective ways for seniors to
                  maintain strength, balance, and independence. Staying active also lifts mood,
                  improves sleep, and supports overall health — and it&apos;s more enjoyable with
                  encouragement and company.
                </p>
                <p className="text-care-gray-600 leading-relaxed mb-8">
                  Our caregivers encourage and supervise light, physician-approved exercises,
                  always paced to your loved one&apos;s ability and coordinated with their care plan —
                  turning everyday movement into safe, shared activity.
                </p>

                <h3 className="font-heading text-lg text-care-navy mb-4">Staying Active Together</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Activity, title: 'Daily Walking', desc: 'Short, supervised walks around the home, garden, or neighborhood.' },
                    { icon: Heart, title: 'Stretching & Chair Exercises', desc: 'Gentle stretching and seated movements that keep joints flexible.' },
                    { icon: Shield, title: 'Balance & Fall Prevention', desc: 'Safe balance practice that builds confidence and reduces fall risk.' },
                    { icon: ClipboardCheck, title: 'Progress Notes', desc: 'Activity updates shared with family and providers so everyone stays informed.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-care-gray-100 shadow-soft hover:shadow-soft-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-5 h-5 text-care-red" />
                        <p className="font-heading text-care-navy text-sm">{item.title}</p>
                      </div>
                      <p className="text-care-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 bg-care-red/8 rounded-xl p-4 border border-care-red/10">
                  <Stethoscope className="w-6 h-6 text-care-red" />
                  <p className="text-care-gray-600 text-sm">
                    <strong className="text-care-navy">Note:</strong> All exercise support follows
                    the physician-approved activity level in your loved one&apos;s care plan and is
                    adjusted as their needs change.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/40 order-1 lg:order-2">
                <Image
                  src="/images/service-exercise.jpeg"
                  alt="Caregiver and senior enjoying light exercise and activity together"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Getting Started Section - Dark Navy with Orbs */}
      <section className="section-padding relative bg-care-navy overflow-hidden">
        {/* Decorative Orbs */}
        <BlurredOrb color="blue" size="xl" className="top-0 left-1/2 -translate-y-1/2 opacity-30" />
        <BlurredOrb color="red" size="lg" className="bottom-0 right-1/4 translate-y-1/2 opacity-20" />
        
        <div className="container-care mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 !text-white tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 text-lg">
                Beginning care with Moshi Homecare is simple and stress-free. We&apos;re here to guide 
                you every step of the way.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12" staggerDelay={0.12}>
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'Contact us for a complimentary assessment to discuss your care needs, preferences, and schedule.',
                icon: Phone,
                image: '/images/step-1-submit.jpeg'
              },
              {
                step: '02',
                title: 'Personalized Plan',
                desc: 'We develop a customized care plan and carefully match you with a qualified caregiver.',
                icon: Shield,
                image: '/images/step-2-match.jpeg'
              },
              {
                step: '03',
                title: 'Care Begins',
                desc: 'Your caregiver begins providing compassionate care with ongoing supervision and support.',
                icon: Users,
                image: '/images/step-3-care.jpeg'
              }
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-floating group hover:shadow-elevated-hover transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-care-red/10 flex items-center justify-center mx-auto mb-4 border border-care-red/10">
                      <item.icon className="w-7 h-7 text-care-red" />
                    </div>
                    <span className="text-care-red/30 font-heading text-4xl block mb-2">{item.step}</span>
                    <h3 className="font-heading text-lg text-care-navy mb-2">{item.title}</h3>
                    <p className="text-care-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <Link 
                href="/request-care" 
                className="inline-flex items-center gap-2 bg-white text-care-red font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-glow-red"
              >
                Request a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
