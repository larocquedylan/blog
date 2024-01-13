function Card({ children, className, ...delegated }) {
    return (
      <div className='bg-cyan-500' {...delegated}>
        {children}
      </div>
    );
  }
  
  export default Card;