import { FC } from "react";

const OverView = () => {
  return (
    <div className=" pt-10 space-y-6">
      <h2 className=" text-t-25 font-bold leading-normal">Operaciones</h2>
      <div className=" grid grid-cols-2 lg:grid-cols-4">
        <CARD total="18.6K" progress="18%" subTitle="Estadísitica" />
        <CARD total="55.6K" progress="25%" subTitle="Estadísitica" />
        <CARD total="54%" progress="-7%" subTitle="Estadísitica" />
        <CARD total="18%" progress="12%" subTitle="Estadísitica" />
      </div>
    </div>
  );
};

interface ICARD {
  total: string;
  progress: string;
  subTitle: string;
}

const CARD: FC<ICARD> = ({ subTitle, progress, total }) => (
  <div className="flex border border-border shadow-card-sm  justify-center h-[150px] flex-col items-center">
    <div>
      <div className="flex items-center gap-1">
        <h2 className=" text-t-28 font-bold  text-dark">{total}</h2>
        <span className="inline-flex items-center gap-1">
          <span className="text-green text-sm font-medium">{progress}</span>
        </span>
      </div>
      <p className="text-sm text-silver_text-foreground font-medium">
        {subTitle}
      </p>
    </div>
  </div>
);

export default OverView;
