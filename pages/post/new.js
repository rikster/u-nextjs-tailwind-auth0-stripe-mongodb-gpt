import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function New(props) {
    const { test } = props
    console.log('test: ', test)

    return (<div><h1>This is a new post page</h1></div>)
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {
        }
    }
})