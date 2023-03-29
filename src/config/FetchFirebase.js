import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";


export const AddData = async (title, summary, desc, url, hackName, hackstart, hackend, github, link) => {
    await addDoc(collection(db, "submissions"), {
        title: title,
        summary: summary,
        desc: desc,
        url: url,
        hackName: hackName,
        hackstart: hackstart,
        hackend: hackend,
        github: github,
        link: link,
        fav: "false"
      });
}
