import React from 'react'
import styles from './GuestCell.css'
import classNames from 'classnames'

export default ({ entered = false, guest }) => (
  <div style={styles.GuestCell} className="GuestCell">
    <div className={classNames('indicator', { '-entered': entered })} />
    <div className="content-left">
      <p className="name">{guest.name}</p>
      <p className="date">Purchased {guest.date}</p>
    </div>
    <div className="content-right">
      <p className="number">{guest.ticketNumber}</p>
      <button className="showDetail">Details</button>
    </div>
  </div>
)
