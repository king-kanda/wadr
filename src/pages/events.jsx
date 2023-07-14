import React from 'react'
import { Layout } from '../components'

import styles from '../styles/events.module.scss'

const Events = () => {
  return (
    <>
        <Layout>
            <main>
                <section className={` ${styles.heroSec} bg-gray `}>
                    <div className="container px-14">
                        
                        <h1 className="font-bold ">Calendar.</h1>
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="container p-10">
                          <p className="">
                          We take pride in organizing a wide range of events and programs that cater to the professional development and networking needs of our members. From interactive workshops and panel discussions to international conferences and training sessions, our events provide invaluable opportunities for learning, collaboration, and career advancement in the field of ADR.

                          </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    </>
  )
}

export default Events;