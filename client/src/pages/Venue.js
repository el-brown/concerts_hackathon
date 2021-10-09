
const Venue = (props) => {

  const {v, deleteVenue} = props

return (
    <div style= {styles.card}>
      <h3>{v.name}</h3>
      <p>{v.street}</p>
      <p>{v.city}</p>
      <p>{v.state}</p>
      <p>Ticket Capacity: {v.ticket_capacity}</p>
    </div>
  )

}
const styles = {
  card: {
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    padding: "8px",
  }

}
export default Venue