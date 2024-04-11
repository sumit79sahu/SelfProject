
import FeaturedCourses from '@/components/FeaturedCourses';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection'
import MusicSchoolTestimonials from '@/components/TestimonialCards';
import WhyChooseUS from '@/components/WhyChooseUS';
import Instructors from '@/components/ui/Instructors';
export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-gird-white/[0.02]">
  <HeroSection/>
  <FeaturedCourses/>
  <WhyChooseUS/>
  <MusicSchoolTestimonials/>
  <Instructors/>
  <Footer/>
 </main>
  );
}
