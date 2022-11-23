const { client } = require("./index.js");

const findData = async () => {
    try {
        const mydatabase = client.db("school");
        const collection = mydatabase.collection("teachers")

        const query = {};

        const result = await collection.find(query);
        if ((await result.estimatedDocumentCount) === 0) {
            console.log("No documents found!");
        } else {
            const user = await result.toArray();
            await user.forEach(data => console.log(data));

        }



    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}
findData();