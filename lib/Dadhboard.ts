import seedData from "@/db/query/get_contri";

const profile=async (username:any)=>{
    const result=await seedData(username);

    const totalContributions=result.length;
    const prApproved=result.filter((contribution:any)=>contribution.status==="APPROVED").length;
    const organization= new Set(result.map((contribution:any)=>contribution.company)).size;
    const hardIssues=result.filter((contribution:any)=>contribution.difficulty==="HARD").length;

    return {
        totalContributions,
        prApproved,
        organization,
        hardIssues
    };
}
export default profile;