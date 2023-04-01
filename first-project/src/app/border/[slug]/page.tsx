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

const generateStaticParams = () => {
    const folderName = "slug";
    return ["game", "qna"].map((path: string) => { 
        return {
            [folderName]: path 
        };
    });
};

export default BorderSection;
export {
    generateStaticParams
};
