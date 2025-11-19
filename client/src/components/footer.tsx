import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import logoWhite from "@assets/milespace white_1763548618643.png";
import logoBlue from "@assets/milespace blue_1763548618644.png";

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img
              src={theme === "dark" ? logoWhite : logoBlue}
              alt="Milespace"
              className="h-11 w-auto drop-shadow-sm"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground">
              Premium software development agency delivering exceptional digital solutions across Kenya and beyond.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-work">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Website Development</li>
              <li>Software Development</li>
              <li>Mobile Applications</li>
              <li>Consulting Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:0720176247" className="hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  0720 176 247
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@milespace.co.ke" className="hover:text-foreground transition-colors" data-testid="link-footer-email">
                  hello@milespace.co.ke
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-footer-location">Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {currentYear} Milespace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
