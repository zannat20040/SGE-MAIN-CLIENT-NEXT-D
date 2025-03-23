import SingleUniversity from "@/_components/shared/SingleUniversity/SingleUniversity";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { Name } = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/json/ukUni.json`
  );

  // Find the matching destination by URL

  // const decodedName = decodeURIComponent(Name);

  const universityDetails = response.data.find(
    (item) => item.Name.toLowerCase() === Name.toLowerCase().replace(/-/g, " ")
  );

  return {
    title: universityDetails?.Name,
    description: universityDetails?.Overview?.substring(0, 150),
    keywords: [
      universityDetails?.Name,
      "study abroad",
      "university admissions",
      "higher education",
      `${universityDetails?.Location || "international university"}`,
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/singleUniversity/${universityDetails?.name}`,
    },
  };
}

export default async function page({ params }) {
  const { Name } = await params;

  // Fetch data for the page
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/json/ukUni.json`
  );

  // Find the matching destination by URL

  const universityDetails = response.data.find(
    (item) => item.Name.toLowerCase() === Name.toLowerCase().replace(/-/g, " ")
  );

  return (
    <div>
      <SingleUniversity universityDetails={universityDetails} />
    </div>
  );
}
