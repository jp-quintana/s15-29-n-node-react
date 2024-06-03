'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import SearchFilterSheetForm from './search-filter-sheet-form';

const SearchFilterSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={() => setIsOpen((prevState) => !prevState)}
    >
      <SheetTrigger asChild>
        <Button variant="outline">Filtros</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filtrar por</SheetTitle>
          <SheetDescription>
            Para aplicar filtros clickear sobre guardar.
          </SheetDescription>
        </SheetHeader>
        {/* <div> */}
        {/* <p className="text-sm">Filtros actuales</p> */}
        {/* TODO: add search filter tags */}
        {/* </div> */}
        <SearchFilterSheetForm handleClose={() => setIsOpen(false)} />
        <SheetFooter className="mt-auto">
          <Button
            form="search-filter-sheet-form"
            className="w-full"
            type="submit"
          >
            Guardar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SearchFilterSheet;
