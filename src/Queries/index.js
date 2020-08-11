import {ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('4zjXHk16NQ1XEHk7IDJXbx');
    return data;
}

export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry({entryID: '5otDcGEJtnjRE3Iloqdrnf', include: 3});
    return data;
}
