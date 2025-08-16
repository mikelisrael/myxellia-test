"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

interface ResponsiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose?: () => void;
  description?: string;
  title?: string;
  content?: React.ReactNode;
}

const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  open,
  onOpenChange,
  onClose,
  description = "This is a dialog viewer",
  title = "Dialog viewer",
  content
}) => {
  const isMobile = useIsMobile(450);

  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange(newOpen);
    if (!newOpen && onClose) {
      onClose();
    }
  };

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="!max-w-[438px] overflow-hidden rounded-3xl border-0 p-0 pb-6"
        >
          <DialogHeader className="flex-center">
            <DialogTitle className="sr-only">{title}</DialogTitle>
            <DialogDescription className="sr-only py-1 text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div>{content}</div>
          <DialogFooter className="!justify-center px-10">
            <DialogClose asChild>
              <Button
                className="h-[46px] w-full rounded-full text-base"
                size="lg"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent className="p-0">
        <DrawerHeader className="flex-col-center text-center">
          <DrawerTitle className="sr-only">{title}</DrawerTitle>
          <DrawerDescription className="sr-only">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <div>{content}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              className="h-[46px] w-full rounded-full text-base"
              size="lg"
            >
              Create Budget
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveDialog;
