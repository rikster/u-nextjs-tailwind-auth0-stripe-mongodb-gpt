export default function New(props) {
    const { test } = props
    console.log('test: ', test)

    return (<div><h1>This is a new post page</h1></div>)
}

export const getServerSideProps = () => {
    return {
        props: {
            test: 'this is a test'
        }
    }
}