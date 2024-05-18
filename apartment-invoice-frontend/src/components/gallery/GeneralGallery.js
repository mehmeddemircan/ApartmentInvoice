import React, { Fragment } from "react";
import { Image } from "antd";


const GeneralGallery = ({getSingleActivity}) => {

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
                  src={getSingleActivity.success && getSingleActivity.activity.data.images}
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