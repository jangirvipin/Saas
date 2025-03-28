import contributionData from "@/db/query/contribution";
import ContributionDetailsPage from "@/components/App/Contributions/ContributionDetailsPage";

const page =async ({params}:any)=>{
    const id:string = params.id;
    const contribution:any  = await contributionData(id);

    return (
        <div className="bg-zinc-900 min-h-screen text-white py-18">

                <ContributionDetailsPage contribution={contribution}/>

        </div>
    )
}

export  default page;