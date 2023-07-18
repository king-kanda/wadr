import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout, News } from '../components';

import styles from '../styles/events.module.scss';

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await fetch(
        `https://blog.womeninadr.com/wp-json/tribe/events/v1/events/${eventId}`
       
      );
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Layout>
        <main className="p-12 container">
          {event ? (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className={`${styles.EventsText}`}>
                  <h3 className={`${styles.EventsTitle} w-3/4 `}>
                    {event.title}
                  </h3>
                  <div className={`${styles.EventsDets} py-5 `}>
                    <p className={`${styles.EventsDate}`}>
                      {formatDate(event.start_date)}
                    </p>
                    <p className={`${styles.EventsTime}`}>
                      {event.start_date_details.hour}:
                      {event.start_date_details.minutes}{' '}
                      {event.start_date_details.hour < 12 ? 'AM' : 'PM'} -{' '}
                      {event.end_date_details.hour}:
                      {event.end_date_details.minutes}{' '}
                      {event.end_date_details.hour < 12 ? 'AM' : 'PM'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                {/* events description */}
                <div className="w-full">
                  <div className={`${styles.Description}`}>
                    <div
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <p>Loading event details...</p>
          )}
        </main>
      
      </Layout>
    </>
  );
};

export default Event;
