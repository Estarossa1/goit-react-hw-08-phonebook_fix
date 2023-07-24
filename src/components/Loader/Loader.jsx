import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margn: '0 auto',
      marginTop: '5rem',
  }}>

      <MutatingDots
        height="80"
        width="80"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        borderColor="#F4442E"
        barColor="#f44336"
        radius="12.5"
        visible={true}
        speed={1000}
      />
    </div>
  );
};

export default Loader;