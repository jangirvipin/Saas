import contributionData from "@/db/query/contribution";
import EditPage from "@/components/App/Contributions/edit/Editpage";

const page =async ({params}:{params:any})=>{
    const id = params.id;
    const contribution:any = await contributionData(id);

    return (
        <div className="bg-zinc-900 min-h-screen text-white py-18">
            <EditPage contribution={contribution}  />
        </div>
    )
}

export default page;