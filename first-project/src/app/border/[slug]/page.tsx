import { FC } from "react";
import { notFound } from "next/navigation";
type BorderSectionPropsType = {
    params: {
        slug: string
    }
};

type supportedSectionTableType = {
    [key in string]: boolean
};

const supportedSectionTable: supportedSectionTableType = {
    game: true,
    qna: true
};

const BorderSection: FC<BorderSectionPropsType> = ({ params }) => {
    const { slug } = params;
    if (supportedSectionTable[slug] === undefined) {
        notFound();
    }
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
