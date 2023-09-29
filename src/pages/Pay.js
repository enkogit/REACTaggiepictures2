import React from 'react';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import Main from '../layouts/Main';

const stripePromise = loadStripe('pk_test_VOOyyYjgzqdm8I3SrBqmh9qY');

const Project1 = () => {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{ }}',
      };

  return (
    <Main
      title="Gallery"
      description="Photograph gallery"
    >
      <article className="story">
        <header>
          <div className="title">
            <h2><Link to="/contact">Book Now</Link></h2>
          </div>
        </header>
        <form>
            <Elements stripe={stripePromise} options={options}>
                <PaymentElement />
                <button>Submit</button>
            </Elements>
        </form>
      </article>
    </Main>
  );
};

export default Project1;
