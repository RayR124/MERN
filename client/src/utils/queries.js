import { graphql } from '@apollo/client';

export const getUser = graphql`
{
    user {
        _id
        username
        email
        savedBooks {
            bookId
            title
            description
            image
        }
    }
}
`;