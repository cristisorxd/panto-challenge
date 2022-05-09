import React from "react";

import ExperienceMaterials from "../ExperienceMaterials/ExperienceMaterials";
import strings from "../../theme/strings";
import images from "../../theme/images";

const Materials = () => {
  return (
    <div>
      <ExperienceMaterials
        title={strings.materials.heading}
        subtitle={strings.materials.title}
        contentText={strings.materials.content}
        moreInfo={strings.materials.moreInfo}
        experience={false}
        photo1={images.materialsUp}
        photo2={images.materialsDown}
        photo3={images.materialsMain}
      />
    </div>
  );
};

export default Materials;
