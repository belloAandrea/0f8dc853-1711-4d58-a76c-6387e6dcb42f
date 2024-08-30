import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <Header />
      <div>
        <h1>Welcome to Next.js!</h1>
      </div>
      <Footer />
    </Layout>
  );
}