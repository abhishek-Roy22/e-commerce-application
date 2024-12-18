import { Leaf } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutContainer">
        <div className="aboutWrapper">
          <div className="aboutLeft">
            <h2>Why Choose Organic?</h2>
            <p>
              We believe in providing the highest quality organic products to
              our customers. Our products are sourced from certified organic
              farms that follow sustainable farming practices.
            </p>
            <ul>
              <li>
                <Leaf size={20} color="green" />
                <span>100% Certified Organic Products</span>
              </li>
              <li>
                <Leaf size={20} color="green" />
                <span>No Artificial Preservatives</span>
              </li>
              <li>
                <Leaf size={20} color="green" />
                <span>Support Local Farmers</span>
              </li>
            </ul>
          </div>
          <div className="aboutRight">
            <img
              src="https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Organic Farming"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
