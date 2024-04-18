import SkeletonLib, { SkeletonProps } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export function Skeleton(props: SkeletonProps){
    return(
        <SkeletonLib baseColor="#79797950" highlightColor="#1212" borderRadius={20} duration={1.5} {...props}/>
    )

}