import Heading from '../components/Heading/Heading';
import ArrowLink from '../components/ArrowLink/ArrowLink';
import Nav from '../components/Nav/Nav';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main className='notFound'>
      <Heading>Not Found</Heading>
      <ArrowLink to='/'>Back to Home Page</ArrowLink>
      <Nav />
    </main>
  );
};

export default NotFoundPage;
