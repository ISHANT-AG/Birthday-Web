import WelcomeScreen from "@/components/WelcomeScreen";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import PhotoGallery from "@/components/PhotoGallery";
import ReasonsSection from "@/components/ReasonsSection";
import BirthdayWishesSection from "@/components/BirthdayWishesSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-slate-50">
      {/* Interactive Welcome Overlay */}
      <WelcomeScreen />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Birthday Message Card */}
      <MessageSection />

      {/* 3. Photo Gallery (All 6 photos) */}
      <PhotoGallery />

      {/* 4. Reasons You're an Amazing Friend */}
      <ReasonsSection />

      {/* 5. Birthday Wishes Section */}
      <BirthdayWishesSection />

      {/* 6. Closing Message & Footer */}
      <ClosingSection />
      <Footer />

      {/* Optional Audio Controls */}
      <BackgroundMusic />
    </main>
  );
}
