import { FC } from "react";

type BorderSectionPropsType = {
    params: {
        slug: string
    }
};

const BorderSection: FC<BorderSectionPropsType> = ({ params }) => {
    return (
        <>
            {
                `${params.slug} secion`
            }
        </>
    );
};

export default BorderSection;