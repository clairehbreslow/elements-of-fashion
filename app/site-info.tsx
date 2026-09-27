'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function SiteInfo() {
  return (
    <Dialog>
      <DialogTrigger
        className="site-info-trigger"
        aria-label="About this website"
      >
        <span aria-hidden="true">i</span>
      </DialogTrigger>

      <DialogContent className="info-dialog" showCloseButton={false}>
        <div className="info-dialog-topline">
          <span>About this site</span>
          <DialogClose className="info-dialog-close">
            Close <span aria-hidden="true">×</span>
          </DialogClose>
        </div>

        <DialogHeader className="info-dialog-copy">
          <DialogTitle>Disclaimer</DialogTitle>
          <DialogDescription>
            This website was built with the help of AI, specifically
            ChatGPT-5.6. All creative elements were done by yours truly, Claire
            Breslow.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
