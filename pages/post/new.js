import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';

export default function NewPost(props) {
  const { test } = props;
  console.log('test: ', test);

  return (
    <div>
      <h1>This is a new post page</h1>
    </div>
  );
}

//common next js pattern to wrap a page in a layout - refer to pages\_app.js
NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test: 'test',
    },
  };
});
