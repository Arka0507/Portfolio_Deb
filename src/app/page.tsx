import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsMatrixSection from "@/components/skills/SkillsMatrixSection";
import EducationSection from "@/components/education/EducationSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import SoundToggle from "@/components/common/SoundToggle";

export default function Home() {
  return (
    <main className="relative bg-[#080808] text-white selection:bg-accent-red/30 selection:text-white">
      {/* Precision Trailing Custom Cursor */}
      <CustomCursor />

      {/* Audio Micro-Feedback Toggle */}
      <SoundToggle />

      {/* Minimal Fixed Navigation */}
      <Navbar />

      {/* Continuous Scrolling Sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsMatrixSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

