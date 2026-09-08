'use client';

import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import type { ElementProfile } from './elements';

type ElementGalleryProps = {
  elements: ElementProfile[];
  sitePrefix: string;
};

export function ElementGallery({ elements, sitePrefix }: ElementGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : elements[selectedIndex];

  return (
    <Dialog
      open={selectedIndex !== null}
      onOpenChange={(open) => {
        if (!open) setSelectedIndex(null);
      }}
    >
      <div className="gallery">
        {elements.map((element, index) => (
          <DialogTrigger
            className="look-card"
            onClick={() => setSelectedIndex(index)}
            key={element.name}
            aria-label={`View the ${element.name} fashion drawing and element profile`}
          >
            <div className="look-image">
              <img
                src={`${sitePrefix}/art/${element.name}.jpg`}
                alt={`Fashion illustration inspired by ${element.name}`}
                loading={index < 6 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="open-cue" aria-hidden="true">View profile +</span>
            </div>
            <div className="look-caption">
              <span className="element-number">{String(element.number).padStart(2, '0')}</span>
              <span className="element-symbol">{element.symbol}</span>
              <span className="element-meta">
                <strong>{element.name}</strong>
                <small>{element.family}</small>
              </span>
            </div>
          </DialogTrigger>
        ))}
      </div>

      {selected && selectedIndex !== null && (
        <DialogContent className="element-dialog" showCloseButton={false}>
          <div className="profile-art">
            <img
              src={`${sitePrefix}/art/${selected.name}.jpg`}
              alt={`Fashion illustration inspired by ${selected.name}`}
            />
            <span className="profile-look-number">
              Look {String(selectedIndex + 1).padStart(2, '0')} / {elements.length}
            </span>
          </div>

          <div className="profile-info">
            <div className="profile-topline">
              <span>Element profile</span>
              <button
                className="profile-close"
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label={`Close ${selected.name} profile`}
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="profile-mark" aria-hidden="true">
              <span>{String(selected.number).padStart(2, '0')}</span>
              <strong>{selected.symbol}</strong>
            </div>

            <DialogHeader className="profile-heading">
              <DialogTitle>{selected.name}</DialogTitle>
              <DialogDescription>
                A fashion interpretation of element {selected.number}.
              </DialogDescription>
            </DialogHeader>

            <dl className="profile-stats">
              <div>
                <dt>Atomic number</dt>
                <dd>{selected.number}</dd>
              </div>
              <div>
                <dt>Atomic weight</dt>
                <dd>{selected.atomicWeight}</dd>
              </div>
              <div>
                <dt>Family</dt>
                <dd>{selected.family}</dd>
              </div>
            </dl>

            <div className="profile-fact">
              <span>Did you know?</span>
              <p>{selected.fact}</p>
            </div>

            {selected.atomicWeight.startsWith('[') && (
              <p className="profile-note">
                Brackets show the mass number used for this radioactive element.
              </p>
            )}
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
