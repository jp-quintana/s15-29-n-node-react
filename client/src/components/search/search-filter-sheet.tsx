import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import SearchFilterSheetForm from './search-filter-sheet-form';

const SearchFilterSheet = () => {
  return (
    <Sheet>
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
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <div>
          <p className="text-sm">Filtros actuales</p>
          {/* TODO: add search filter tags */}
        </div>

        <div className="flex flex-col gap-4 py-4">
          <div>
            <p className="text-sm font-bold">Tipo de venta</p>
          </div>
          <div>
            <p className="text-sm font-bold">Categorias</p>
          </div>
          <div>
            <p className="text-sm font-bold">Precio</p>
          </div>
        </div>
        <SearchFilterSheetForm />
        <SheetFooter className="mt-auto">
          <SheetClose asChild>
            <Button
              form="search-filter-sheet-form"
              className="w-full"
              type="submit"
            >
              Guardar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SearchFilterSheet;
