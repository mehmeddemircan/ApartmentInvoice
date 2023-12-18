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
                  src={"https://images.pexels.com/photos/19025281/pexels-photo-19025281/free-photo-of-senate-house-in-cambridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/19115706/pexels-photo-19115706/free-photo-of-person-standing-alone-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/207305/pexels-photo-207305.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={"https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600"}
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