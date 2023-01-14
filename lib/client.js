import  SanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";
export const client = SanityClient({
    projectId: "kiqdu3h9",
    dataset: 'production',
    apiVersion: "2023-01-12",
    useCdn:true,
    token:
    "sk2CivNVZBIhYiVs0WT7l4sG6RkFrAfhgKbnz0S7KZpdtsZcdiO36CF7PPXlkpDRFCE9GvNZTOWCQyNLfGaA2EFUovo9CQGpcBQQfFeU9RauBXdV98mK9wyswNohDykeNUWG1f3XxJeTjqFs8SgET96tLDGg0W13FJWijkmHWNRsNboYquhM"
})
const builder = ImageUrlBuilder(client);
export const urlFor =(source) => builder.image(source)