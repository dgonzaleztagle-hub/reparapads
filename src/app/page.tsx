'use client';

import { KineticText } from '@/components/premium/KineticText';
import TextScramble from '@/components/ui/TextScramble';
import { BentoGrid, BentoGridItem } from '@/components/premium/BentoGrid';
import { MagneticCursor } from '@/components/premium/MagneticCursor';
import { AnimatedGradient } from '@/components/premium/AnimatedGradient';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ReparpadsPage() {
    return (
        <div className="flex flex-col w-full">

            {/* --- HERO SECTION: TECH LAB STARTUP --- */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-[#10B981]/20">
                <AnimatedGradient colors={['#050505', '#022c22', '#050505']} speed={3} blur={100} />

                {/* HUD Elements */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50">
                    <Image
                        src="/prospectos/reparpads/logo_v2.png"
                        alt="Reparpads Logo"
                        width={220}
                        height={220}
                        className="object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] w-[120px] md:w-[220px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        style={{ height: 'auto' }}
                    />
                </div>
                <div className="absolute top-6 right-6 md:top-10 md:right-10 font-orbitron text-[10px] md:text-xs text-[#10B981] tracking-[0.3em] opacity-60">
                    LOC: LA FLORIDA
                </div>

                <div className="z-10 text-center max-w-4xl px-4 mt-24 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 inline-block px-3 py-1 border border-[#10B981]/50 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs md:text-sm font-bold tracking-widest uppercase font-rajdhani"
                    >
                        Servicio Técnico Especializado
                    </motion.div>

                    <div className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-2 text-white tracking-tighter mix-blend-difference">
                        <KineticText text="REPARPADS" animation="scale" splitBy="chars" stagger={0.05} />
                    </div>

                    <div className="font-rajdhani text-xl md:text-3xl text-[#10B981] mt-4 flex items-center justify-center gap-2">
                        <span>[ STATUS: </span>
                        <TextScramble
                            text="BATERÍA VIVA"
                            trigger={true}
                            className="font-bold text-[#F59E0B]"
                        />
                        <span> ]</span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-gray-400 mt-8 max-w-2xl mx-auto font-rajdhani text-lg leading-relaxed text-balance"
                    >
                        ¿Tus pads fallan? En Reparpads lo solucionamos en tiempo récord. <br />
                        Especialistas en Roland, Yamaha, Alesis y más. Reparación de bombos, hi-hats, platillos y módulos.
                        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 text-[#F59E0B] font-bold text-xl uppercase tracking-tighter">
                            <span className="flex items-center gap-2"><span className="text-white text-xs opacity-50">VALOR:</span> $25.000 / PIEZA</span>
                            <span className="hidden md:block opacity-30 text-white">|</span>
                            <span className="flex items-center gap-2"><span className="text-white text-xs opacity-50">TIEMPO:</span> 24 HORAS EXPRESS</span>
                        </div>
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-[#10B981] tracking-widest font-orbitron">SCROLL TO SCAN</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#10B981] to-transparent" />
                </motion.div>
            </section>


            {/* --- SERVICES GRID: BLUEPRINT STYLE --- */}
            <section className="py-24 px-4 md:px-12 bg-[#050505] relative">
                <div className="absolute inset-0 bg-[url('/prospectos/reparpads/grid.svg')] opacity-5 pointer-events-none" />

                <div className="max-w-7xl mx-auto mb-16">
                    <h2 className="font-orbitron text-4xl md:text-5xl text-white mb-4">PROTOCOLOS <span className="text-[#10B981]">DE SERVICIO</span></h2>
                    <div className="h-1 w-24 bg-[#10B981]" />
                </div>

                <BentoGrid className="max-w-7xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </section>


            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-1 gap-12">
                <CapabilityMatrix />
                <GallerySection />
            </div>

            {/* --- FOOTER: SYSTEM SHUTDOWN --- */}
            <footer className="bg-black py-12 border-t border-[#10B981]/20">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h4 className="font-orbitron text-2xl text-white">REPARPADS</h4>
                        <p className="font-rajdhani text-gray-500 text-sm mt-1">San Miguel 1479, La Florida, Santiago.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://instagram.com/reparpads" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:text-[#F59E0B] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="font-rajdhani text-[#10B981] text-sm">
                        <span className="opacity-50">SYSTEM_VERSION:</span> v1.0.4
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 text-xs font-rajdhani">
                        <span>© 2026 REPARPADS. OPERATIONAL.</span>
                        <a
                            href="https://hojacero.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#10B981] transition-colors opacity-30 hover:opacity-100 text-[9px] uppercase tracking-widest"
                            aria-label="Desarrollado por HojaCero - Estudio de ingeniería web y estrategia digital en Santiago de Chile"
                            title="HojaCero.cl | Soluciones Digitales a Medida"
                        >
                            By hojacero.cl
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Data for Bento Grid
const Skeleton = ({ bg, border }: { bg: string, border: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${bg} border ${border} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.05),transparent)] animate-shimmer" />
    </div>
);

const items = [
    {
        title: "Especialista en Sensores y Piezos",
        description: "Reemplazo de sensores piezoeléctricos de alta fidelidad para restaurar la sensibilidad original de fábrica.",
        header: (
            <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-[#10B981]/20 group">
                <Image src="/prospectos/reparpads/macro.png" alt="Reparación técnica de sensores piezoeléctricos en batería electrónica" fill className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
        ),
        icon: <span className="text-2xl">⚡</span>,
    },
    {
        title: "Cirugía de Módulos & Jacks",
        description: "Reparación de salidas de audio, conectores frontales, botones y potenciómetros de módulos multimarca.",
        header: (
            <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-[#F59E0B]/20 group">
                <Image src="/prospectos/reparpads/waveform.png" alt="Diagnóstico electrónico de módulos Roland y Yamaha" fill className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
        ),
        icon: <span className="text-2xl">🎛️</span>,
    },
    {
        title: "Controladores de Hi-Hat",
        description: "Calibración y reparación de controladores de pedal hi-hat (Variable HH Control) para Roland y Alesis.",
        header: (
            <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-blue-500/20 group">
                <Image src="/prospectos/reparpads/cables.png" alt="Recableado interno y reforzamiento de Jacks 1/4" fill className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
        ),
        icon: <span className="text-2xl">🔌</span>,
    },
    {
        title: "Restauración de Dual-Zone",
        description: "Recuperación de zona de borde (Rim) y centro para cajas y platillos doble/triple zona.",
        header: (
            <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-purple-500/20 group">
                <Image src="/prospectos/reparpads/drum_pad_medium.png" alt="Limpieza profunda de goma y sensores de percusión electrónica" fill className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
        ),
        icon: <span className="text-2xl">✨</span>,
    },
    {
        title: "Compatibilidad Total",
        description: "Amplio stock de componentes para Roland, Alesis, Yamaha, Medeli, Simmons y Kits DIY.",
        header: (
            <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/10 group">
                <Image src="/prospectos/reparpads/gear.png" alt="Pro Audio Gear" fill className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
        ),
        icon: <span className="text-2xl">🛡️</span>,
    },
];


function CapabilityMatrix() {
    return (
        <section className="py-24 bg-[#050505] border-t border-[#10B981]/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <div className="font-rajdhani text-[#10B981] text-lg font-bold mb-2 tracking-widest">
                        // CAPABILITY_MATRIX_v4.0
                    </div>
                    <h2 className="font-orbitron text-4xl md:text-5xl text-white">
                        MATRIZ DE <span className="text-[#F59E0B]">COMPETENCIAS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            cat: "PERCUSIÓN",
                            skills: [
                                "Pads de Goma (Rubber) y Parches de Malla (Mesh)",
                                "Instalación de Mallas de Nitrógeno (traídas por cliente)",
                                "Cajas Doble Zona (Cuerpo/Rim)",
                                "Bombos (Kick) con intermitencia o ruido",
                                "Pads de Toms mono y estéreo"
                            ]
                        },
                        {
                            cat: "PLATILLOS / HI-HAT",
                            skills: [
                                "Controladores de pedal Hi-Hat (Open/Closed)",
                                "Platillos con Choke y zonas muertas",
                                "Recuperación de sensores de Crash y Ride",
                                "Calibración de sensibilidad piezo",
                                "Sustitución de Jacks 1/4 estéreo de alta resistencia"
                            ]
                        },
                        {
                            cat: "CORE / MÓDULO",
                            skills: [
                                "Reparación de salidas de audio principales",
                                "Servicio de Jacks de audífonos y Mix-In",
                                "Limpieza de sulfato en terminales electrónicos",
                                "Todas las marcas: Roland, Alesis, Yamaha, Medeli, Simmons",
                                "Servicio Express: Entrega en 24 Horas"
                            ]
                        }
                    ].map((col, idx) => (
                        <div key={idx} className="border border-white/5 bg-[#080808] p-8 rounded-2xl group hover:border-[#10B981]/30 transition-colors">
                            <h3 className="font-orbitron text-xl text-[#10B981] mb-6 border-b border-[#10B981]/20 pb-2">{col.cat}</h3>
                            <ul className="space-y-4">
                                {col.skills.map((s, i) => (
                                    <li key={i} className="font-rajdhani text-gray-400 flex items-start gap-3">
                                        <span className="text-[#F59E0B] mt-1">▶</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GallerySection() {
    const [activeTab, setActiveTab] = useState<'RAW' | 'PROCESS' | 'FINISH'>('RAW');

    const galleryData: Record<string, string[]> = {
        RAW: Array.from({ length: 8 }, (_, i) => `/prospectos/reparpads/gallery/raw_${i + 1}.jpg`),
        PROCESS: Array.from({ length: 8 }, (_, i) => `/prospectos/reparpads/gallery/process_${i + 1}.jpg`),
        FINISH: Array.from({ length: 8 }, (_, i) => `/prospectos/reparpads/gallery/finish_${i + 1}.jpg`)
    };

    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-[#10B981]/10 relative overflow-hidden">
            {/* Background Noise */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #10B981 0, #10B981 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <div className="font-rajdhani text-[#F59E0B] text-lg font-bold mb-2 tracking-widest">
                            // EVIDENCE_LOG
                        </div>
                        <h2 className="font-orbitron text-4xl md:text-5xl text-white">
                            ARCHIVO <span className="text-[#10B981]">VISUAL</span>
                        </h2>
                    </div>

                    {/* Industrial Tabs */}
                    <div className="flex bg-[#111] border border-[#10B981]/20 p-1 rounded-lg">
                        {[
                            { id: 'RAW', label: 'INGRESO' },
                            { id: 'PROCESS', label: 'PROCESO' },
                            { id: 'FINISH', label: 'ENTREGAS' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`px-6 py-2 rounded-md font-rajdhani font-bold text-sm tracking-widest transition-all ${activeTab === tab.id
                                    ? 'bg-[#10B981] text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                                    : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="min-h-[600px] grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => {
                        const imgSrc = galleryData[activeTab]?.[i];
                        return (
                            <div
                                key={i}
                                className={`relative group overflow-hidden border border-[#10B981]/10 bg-[#050505] ${
                                    // Make some items span larger to create "Masonry" vibe
                                    (i === 0 || i === 7) ? 'md:col-span-2 md:row-span-2 aspect-video' : 'aspect-square'
                                    }`}
                            >
                                {imgSrc ? (
                                    <div className="absolute inset-0">
                                        <Image
                                            src={imgSrc}
                                            alt={`Evidence ${activeTab} ${i}`}
                                            fill
                                            className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                ) : (
                                    /* Placeholder Visual */
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#111] group-hover:bg-[#151515] transition-colors">
                                        <span className="font-orbitron text-[#10B981]/20 text-4xl group-hover:text-[#10B981]/40 transition-colors">
                                            {activeTab}_{i + 1}
                                        </span>
                                    </div>
                                )}

                                {/* HUD Overlay */}
                                <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[8px] text-[#10B981] border border-[#10B981] px-1 font-mono bg-black/80">
                                            IMG_{1000 + (i * 127)}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] text-white bg-black/80 px-2 font-mono">
                                            {activeTab === 'RAW' ? 'DAÑO SEVERO' : activeTab === 'PROCESS' ? 'EN REPARACIÓN' : 'RESTORED'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 flex justify-end">
                    <span className="font-mono text-xs text-[#10B981] animate-pulse">
                        _TOTAL_ASSETS: 24 // LOADING_COMPLETE
                    </span>
                </div>
            </div>
        </section>
    );
}


