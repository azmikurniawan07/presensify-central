import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, UserCheck, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Presensify</h1>
            </div>
            <Button variant="gradient" className="shadow-soft">
              Masuk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Sistem Absensi
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Modern & Efisien
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Kelola kehadiran siswa dan karyawan dengan mudah menggunakan teknologi terdepan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant">
              Mulai Absen Sekarang
            </Button>
            <Button variant="outline" size="lg">
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Absen Digital</h3>
            <p className="text-muted-foreground">
              Check-in dan check-out dengan satu klik. Mudah, cepat, dan akurat.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi User</h3>
            <p className="text-muted-foreground">
              Mendukung siswa dan karyawan dengan pengaturan yang fleksibel.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Laporan Real-time</h3>
            <p className="text-muted-foreground">
              Dashboard analitik dengan grafik dan laporan kehadiran lengkap.
            </p>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-glow">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">Akurasi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Tersedia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-foreground/80">Pengguna</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
