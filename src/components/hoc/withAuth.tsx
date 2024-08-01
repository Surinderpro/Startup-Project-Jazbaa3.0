import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next'; // A library to handle cookies easily

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const Router = useRouter();
    const token = getCookie('token'); // Adjust this according to your authentication logic

    useEffect(() => {
      if (!token) {
        Router.replace('/login');
      }
    }, [token]);

    if (token) {
      return <WrappedComponent {...props} />;
    } else {
      return null; // Or a loading indicator
    }
  };

  return Wrapper;
};

export default withAuth;
