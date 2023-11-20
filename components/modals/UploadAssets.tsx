import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FC } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

interface IUplodAssets {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const UploadAssets: FC<IUplodAssets> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <>
          {/* component */}
          <div>
            <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
              <div
                className="file_upload space-y-5 p-5 relative border-4 border-dotted border-light-blue 0 rounded-lg"
                style={{ width: 450 }}
              >
                <div className=" w-10 h-10 rounded-full grid place-items-center border border-border mx-auto">
                  <MdOutlineFileUpload size={25} className="text-light-blue" />
                </div>
                <div className="input_field flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      multiple
                    />
                    <div className=" text-xs cursor-pointer font-normal text-light-blue">
                      Click para subir
                      <span className=" text-silver_text-foreground">
                        o arrastra
                      </span>
                    </div>
                  </label>
                  <div className=" space-y-3">
                    <p className="text-center text-xs text-silver_text-foreground">
                      PNG, JPG o PDF
                    </p>
                    <p className="text-center text-xs text-silver_text-foreground">
                      (max, 1280px X 1280px)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
};

export default UploadAssets;
