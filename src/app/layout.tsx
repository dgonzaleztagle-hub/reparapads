import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import { MagneticCursorDot } from '@/components/premium/MagneticCursor';
import { GrainTexture } from '@/components/premium/GrainTexture';

import '@/app/globals.css';

const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
    display: 'swap',
});

const rajdhani = Rajdhani({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-rajdhani',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'REPARAPADS | Servicio Técnico de Baterías Electrónicas en Santiago',
    description: '¿Tu batería electrónica falló? Reparamos pads, módulos y sensores Roland, Alesis, Yamaha y más. Servicio rápido en San Miguel 1479, La Florida, Santiago. ¡Recupera tu ritmo hoy!',
    keywords: ['reparación batería electrónica chile', 'servicio técnico Roland Santiago', 'arreglo pads Alesis', 'mantenimiento Yamaha DTX', 'sensores piezoeléctricos batería', 'reparación Hi-Hat electrónico', 'arreglo bombo batería electrónica', 'reparación módulo batería', 'reparpads La Florida'],
    openGraph: {
        title: 'REPARAPADS | Batería Viva',
        description: 'Servicio técnico especializado en baterías electrónicas. La Florida, Santiago.',
        url: 'https://reparpads.cl',
        siteName: 'REPARAPADS',
        locale: 'es_CL',
        type: 'website',
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "REPARAPADS",
    "description": "Servicio técnico especializado en reparación y mantención de baterías electrónicas multimarca.",
    "image": "https://reparpads.cl/prospectos/reparpads/logo_v2.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "San Miguel 1479",
        "addressLocality": "La Florida",
        "addressRegion": "RM",
        "addressCountry": "CL"
    },
    "telephone": "+56958274826",
    "url": "https://reparpads.cl",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": {
        "@type": "Country",
        "name": "Chile"
    },
    "publisher": {
        "@type": "Organization",
        "name": "HojaCero",
        "url": "https://hojacero.cl",
        "logo": {
            "@type": "ImageObject",
            "url": "https://hojacero.cl/logo.png"
        },
        "email": "contacto@hojacero.cl"
    },
    "author": {
        "@type": "Organization",
        "name": "HojaCero",
        "url": "https://hojacero.cl",
        "email": "contacto@hojacero.cl"
    }
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuál es el valor de la reparación por cada pad o pieza?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contamos con una tarifa plana de reparación de aproximadamente $20.000 por pieza (con variaciones según complejidad), ofreciendo una solución accesible y profesional para todos los músicos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo demora la reparación de un pad o batería electrónica?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En Reparpads priorizamos la velocidad extrema, ofreciendo reparaciones bajo el sistema Servicio Express con entrega en 24 horas, mucho más rápido que el servicio técnico oficial."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué marcas de baterías electrónicas reparan?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Somos expertos multimarca y trabajamos con todas las marcas principales del mercado, incluyendo Roland, Alesis, Yamaha, Medeli y Simmons."
            }
        },
        {
            "@type": "Question",
            "name": "¿Ofrecen garantía por los trabajos de reparación?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, todos nuestros trabajos de reparación y mantenimiento cuentan con una garantía de 2 meses para asegurar la tranquilidad de nuestros clientes."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tienen repuestos para sensores piezoeléctricos y jacks?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contamos con sensores piezoeléctricos de alta sensibilidad, jacks de 1/4 reforzados y componentes para módulos para asegurar que tu batería quede como nueva."
            }
        }
    ]
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div className={`${orbitron.variable} ${rajdhani.variable} bg-[#050505] text-[#ECFEFF] selection:bg-[#10B981] selection:text-black min-h-screen`}>
            {/* SEO & RETENTION SYSTEM */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Kill Switch - Sistema de Retención HojaCero */}
            <script dangerouslySetInnerHTML={{
                __html: `
                (async function() {
                const SITE_ID = 'dc8cb63b-01e6-4a96-a161-4a474abf5991';
                const API = 'https://vcxfdihsyehomqfdzzjf.supabase.co/rest/v1/site_status';
                try {
                    const res = await fetch(API + '?id=eq.' + SITE_ID + '&select=is_active', {
                    headers: { 'apikey': 'sb_publishable_Qz1iRV_N9JWqjUBmQkQgVA_iwNSLGDu' }
                    });
                    const data = await res.json();
                    if (data[0] && !data[0].is_active) {
                    document.body.innerHTML = '<div style="display:flex;height:100vh;align-items:center;justify-content:center;background:#111;color:#fff;font-family:system-ui;text-align:center;padding:2rem;"><div><h1>🔧 Sitio en Mantenimiento</h1><p>Estamos realizando mejoras. Vuelve pronto.</p></div></div>';
                    }
                } catch (e) { /* fail-safe */ }
                })();
            `}} />

            {/* Global Effects */}
            <MagneticCursorDot />
            <GrainTexture opacity={0.07} animated={true} />

            {/* Main Content */}
            <main className="relative min-h-screen font-rajdhani overflow-x-hidden">
                {children}
            </main>

            {/* Floating WhatsApp (HUD Style) */}
            <a
                href="https://wa.me/56958274826?text=Hola%20Reparpads,%20necesito%20cotizar%20una%20reparación"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 group"
            >
                <div className="absolute inset-0 bg-[#10B981] rounded-full blur-[10px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="relative bg-[#050505] border border-[#10B981] text-[#10B981] w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#10B981] hover:text-black transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </div>
            </a>
        </div>
    );
}
