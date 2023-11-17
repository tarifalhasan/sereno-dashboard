"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";

const formSchema = z.object({
  owner_name: z.string(),
  third_party: z.string(),
  spread_buy: z.string(),
  spread_sell: z.string(),
  spread_general: z.string(),
  fee_de_volumen: z.string(),
});
const AddNewAccountModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      owner_name: "john doe",
      third_party: "yes",
      spread_buy: "Banesco",
      spread_sell: "35,345",
      spread_general: "Banesco",
      fee_de_volumen: "35,345",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 bg-light-blue text-white hover:bg-light-blue/90 px-4 py-2">
        Editar
      </DialogTrigger>
      <DialogContent className=" max-w-[654px] space-y-5">
        <DialogHeader>
          <DialogTitle className=" pb-5 text-t-[1.1rem] lg:text-t-25 font-semibold">
            Añadir método
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <div className=" grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="third_party"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tasa prom.</FormLabel>
                      <FormControl>
                        <Input placeholder="Tasa prom." {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="owner_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del titular</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Banesco" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Banesco">Banesco</SelectItem>
                          <SelectItem value="Banescosds">
                            Banescosdsds
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="owner_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monedar</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Banesco" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Banesco">Banesco</SelectItem>
                        <SelectItem value="Banescosds">Banescosdsds</SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="owner_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banco</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Banesco" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Banesco">Banesco</SelectItem>
                        <SelectItem value="Banescosds">Banescosdsds</SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="owner_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Banesco" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Banesco">Banesco</SelectItem>
                        <SelectItem value="Banescosds">Banescosdsds</SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex pt-4 !justify-start lg:justify-start items-center gap-2">
                <Button type="submit" variant={"success"}>
                  Confirmar y agregar
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant={"secondary"}>
                    Cancelar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewAccountModal;
