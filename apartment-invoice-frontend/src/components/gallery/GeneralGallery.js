import React, { Fragment } from "react";
import { Image } from "antd";


const GeneralGallery = () => {

  return (
    <Fragment>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
        </div>
      </Image.PreviewGroup>
    </Fragment>
  );
};

export default GeneralGallery;