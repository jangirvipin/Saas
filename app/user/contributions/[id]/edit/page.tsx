import contributionData from "@/db/query/contribution";
import EditPage from "@/components/App/Contributions/edit/Editpage";
import { Contribution } from "@prisma/client";

const page =async ({params}:any)=>{
    const id:string = params.id;
    const contribution:Contribution | null = await contributionData(id);

    return (
        <div className="bg-zinc-900 min-h-screen text-white py-18">
            <EditPage contribution={contribution}  />
        </div>
    )
}

export default page;