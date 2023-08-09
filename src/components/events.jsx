import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

import styles from '../styles/events.module.scss';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading status

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        'https://blog.womeninadr.com/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2000-01-01%2000:00:00&end_date=2047-12-31%2023:59:59&status=publish'
      );
      const data = await response.json();

      // Sort events based on start date in descending order
      const sortedEvents = data.events.sort(
        (a, b) => new Date(b.start_date) - new Date(a.start_date)
      );

      setEvents(sortedEvents);
      setIsLoading(false); // Set loading status to false after data is fetched
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const isUpcomingEvent = (startDate) => {
    const currentDate = new Date();
    const eventStartDate = new Date(startDate);
    return eventStartDate > currentDate;
  };

  return (
    <>
      <section className="container p-6">
        <div className="yuui">
          {isLoading ? (
            <p>Fetching events, hang tight...</p> // Display loading message
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {events.map((event) => (
                <div
                  className={`${styles.EventsCards} border rounded-lg my-5`}
                  key={event.id}
                >
                  <div className={`${styles.EventsImageCont}`}>
                    {event.image && (
                      <Image
                        className={` ${styles.EventsImage} `}
                        cloudName="dsmrt6yiw"
                        publicId={event.image.url}
                        width="100%"
                        height="100%"
                        crop="fill"
                      />
                    )}
                  </div>

                  <div className="h-52 content-container flex flex-col justify-between p-3 md:p-6">
                      <div className={styles.EventsText}>
                        <h3 className={styles.EventsTitle}>{event.title}</h3>
                      </div>

                      <div className="flex items-end justify-between mt-6">
                        <div className="date">
                          <div>
                            <p className={styles.EventsDate}>
                              {event.start_date_details.month}/{event.start_date_details.day}/{event.start_date_details.year}
                            </p>
                            {isUpcomingEvent(event.start_date) && (
                              <p className={`${styles.EventsLabel} bg-purple rounded-full px-5 py-1 text-white`}>
                                Upcoming
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="btn-holder">
                          <Link to={`/events/${event.id}`}>
                            <button className={`${styles.EventsBtn} border-yellow rounded-full bg-yellow hover:bg-purple hover:text-white px-4 py-2`}>
                              Details & Info
                            </button>
                          </Link>
                        </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};


export default Events;
