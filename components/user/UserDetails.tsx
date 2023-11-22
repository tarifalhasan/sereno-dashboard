"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IuserData } from "@/types";
import Image from "next/image";
import { ChangeEvent, FC, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Input } from "../ui/input";

interface UserProfileDetailsProps {
  userData: IuserData;
}

const UserProfileDetails: FC<UserProfileDetailsProps> = ({ userData }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [status, setStatus] = useState(userData.status);
  const [country, setCountry] = useState(userData.country);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [tier, setTier] = useState(userData.tier);

  const toggleEditMode = () => {
    setIsEditable((prev) => !prev);
  };

  const handleStatusChange = (e: string) => {
    setStatus(e);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleTierChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTier(e.target.value);
  };

  return (
    <div className="flex pb-5 border-b border-border items-center  gap-5 flex-wrap justify-between">
      <div className=" inline-flex items-center gap-2">
        <Image
          src={"/assets/images/image 4.png"}
          width={50}
          height={50}
          alt="tarifalhasan"
          className="rounded-[2px]"
        />
        <TextBlocks title="Sebastián Rojas" dec="PLI" />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-base font-semibold">Status</p>
        {isEditable ? (
          <Select
            defaultValue={status}
            onValueChange={(e) => handleStatusChange(e)}
          >
            <SelectTrigger className="w-[90px]">
              <SelectValue placeholder="Activo" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Activo">Activo</SelectItem>
              <SelectItem value="Frozeado">Frozeado</SelectItem>
              <SelectItem value="Baneado">Baneado</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <p className="text-sm font-normal text-silver_text-foreground">
            Usuario Activo
          </p>
        )}
      </div>
      <div className="flex w-[60px] flex-col items-center">
        <p className="text-base font-semibold">Balance</p>
        {isEditable ? (
          <div>
            <Input value={country} onChange={handleCountryChange} />
          </div>
        ) : (
          <p className="text-sm font-normal text-silver_text-foreground">
            9,497USD
          </p>
        )}
      </div>

      <div className="flex w-[60px] flex-col items-center">
        <p className="text-base font-semibold">País</p>
        {isEditable ? (
          <div>
            <Input value={country} onChange={handleCountryChange} />
          </div>
        ) : (
          <p className="text-sm font-normal text-silver_text-foreground">
            {country}
          </p>
        )}
      </div>
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold">Correo electrónico</p>
        {isEditable ? (
          <div>
            <Input value={email} onChange={handleEmailChange} type="email" />
          </div>
        ) : (
          <p className="text-sm font-normal text-silver_text-foreground">
            {email}
          </p>
        )}
      </div>

      <div className="">
        <p className="text-base font-semibold">Teléfono</p>
        {isEditable ? (
          <div>
            <Input value={phone} onChange={handlePhoneChange} type="tel" />
          </div>
        ) : (
          <p className="text-sm font-normal text-silver_text-foreground">
            {phone}
          </p>
        )}
      </div>

      <div className="">
        <p className="text-base font-semibold">Tier</p>
        {isEditable ? (
          <div>
            <Input value={tier} onChange={handleTierChange} />
          </div>
        ) : (
          <p className="text-sm font-normal text-silver_text-foreground">
            {tier}
          </p>
        )}
      </div>

      <div className="  inline-flex items-center gap-3">
        <Button onClick={toggleEditMode} variant={"success"} className=" gap-1">
          <FaRegEdit size={18} />
          {isEditable ? "Guardar" : "Editar"}
        </Button>
        <Button variant={"secondary"}>Documentos</Button>
      </div>
    </div>
  );
};
interface ITextBlocks {
  title: string;
  dec: string;
  className?: string;
}

const TextBlocks: FC<ITextBlocks> = ({ dec, title, className }) => (
  <div className={className}>
    <p className="text-base font-semibold">{title}</p>
    <p className="text-sm font-normal text-silver_text-foreground">{dec}</p>
  </div>
);

export default UserProfileDetails;
