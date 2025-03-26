
import React from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';

interface ReleaseProps {
  title: string;
  type: string;
  year: string;
  label: string;
  cat: string;
  description: string;
  listen?: string;
}

const Release: React.FC<ReleaseProps> = ({ title, type, year, label, cat, description, listen }) => {
  return (
    <TerminalCard className="mb-6">
      <div className="p-4">
        <h3 className="text-xl font-terminal text-amber mb-3">&gt; {title}</h3>
        
        <div className="font-mono">
          <p className="mb-3 text-amber-light text-sm">
            <span className="text-amber-light opacity-70">[{type}] </span>{year} | 
            <span className="text-amber-light opacity-70"> LABEL: </span>{label} | 
            <span className="text-amber-light opacity-70"> CATALOG: </span>{cat}
          </p>
          
          <div className="mb-4 text-amber text-opacity-90">
            <p className="mb-4">{description}</p>
          </div>
          
          {listen && (
            <div className="mt-4">
              <a href={listen} target="_blank" rel="noopener noreferrer">
                <TerminalButton size="sm">
                  LISTEN NOW
                </TerminalButton>
              </a>
            </div>
          )}
        </div>
      </div>
    </TerminalCard>
  );
};

const Discography = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">DISCOGRAPHY</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// A comprehensive archive of releases by The Don Stone.</p>
        <p>// Displaying in reverse chronological order.</p>
      </div>
      
      <Release 
        title="NEURAL DECAY"
        type="EP"
        year="2023"
        label="TERMINAL TECHNO RECORDS"
        cat="TTR-023"
        description="Neural Decay explores the intersection of artificial intelligence and electronic music. This EP features glitched-out rhythms, complex neural network-inspired sound design, and haunting atmospheric elements. Five tracks that blur the line between the organic and the synthetic."
        listen="https://soundcloud.com"
      />
      
      <Release 
        title="WAREHOUSE BLUEPRINTS"
        type="ALBUM"
        year="2022"
        label="SYSTEM FAILURE AUDIO"
        cat="SFA-112"
        description="An immersive sonic journey through abandoned industrial spaces. Warehouse Blueprints captures the essence of after-hours techno with cavernous reverbs, mechanical percussion, and hypnotic sequences. The 10-track album maps out different areas of an imaginary warehouse, from concrete floors to hidden entrances."
        listen="https://bandcamp.com"
      />
      
      <Release 
        title="TWILIGHT FREQUENCIES"
        type="EP"
        year="2021"
        label="DARK MATTER RECORDINGS"
        cat="DMR-045"
        description="A four-track EP exploring the liminal space between day and night. Twilight Frequencies combines ambient textures with driving rhythms, creating a soundtrack for the transitional moments. Features collaborations with renowned sound designers and field recordings captured at dusk."
        listen="https://spotify.com"
      />
      
      <Release 
        title="ELECTRONIC RITUALS"
        type="EP"
        year="2020"
        label="UNDERGROUND COLLECTIVE"
        cat="UC-017"
        description="Electronic Rituals delves into ceremonial and tribal influences, reimagined through modern electronic production. Each track represents a different stage of a digital ceremony, with hypnotic polyrhythms and evolving synthesizer sequences that build to transcendent climaxes."
        listen="https://bandcamp.com"
      />
      
      <Release 
        title="BINARY STRUCTURES"
        type="ALBUM"
        year="2019"
        label="ALGORITHM RECORDINGS"
        cat="AR-029"
        description="The debut album that established The Don Stone's unique sound. Binary Structures explores the relationship between code and music through meticulously programmed sequences, generative compositions, and data-driven sound design. A conceptual journey through the architecture of digital systems."
        listen="https://spotify.com"
      />
    </TerminalContainer>
  );
};

export default Discography;
