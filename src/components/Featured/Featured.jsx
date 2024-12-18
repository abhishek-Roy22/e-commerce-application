import { Banknote, Recycle, ShieldCheck, Truck } from 'lucide-react';
import './Featured.css';

const Featured = () => {
  const contents = [
    {
      id: 1,
      icon: <Truck size={30} color="green" />,
      title: 'Free Shipping',
      desc: 'Above $5 Only',
    },
    {
      id: 2,
      icon: <ShieldCheck size={30} color="green" />,
      title: 'Certified Organic',
      desc: '100% Gurantee',
    },
    {
      id: 3,
      icon: <Banknote size={30} color="green" />,
      title: 'Huge Savings',
      desc: 'At Lowest Price',
    },
    {
      id: 4,
      icon: <Recycle size={30} color="green" />,
      title: 'Easy Returns',
      desc: 'No Questions Asked',
    },
  ];
  return (
    <div className="featuredContainer">
      <div className="featuredWrapper">
        {contents.map((content) => (
          <FeaturedCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Featured;

const FeaturedCard = ({ content }) => {
  return (
    <div className="featuredCardContainer">
      <div className="featuredCardLeft">{content.icon}</div>
      <div className="featuredCardRight">
        <h3>{content.title}</h3>
        <p style={{ color: 'white' }}>{content.desc}</p>
      </div>
    </div>
  );
};
