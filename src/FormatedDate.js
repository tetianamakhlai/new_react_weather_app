export default function FormatedDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurthday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hour < 10) return `${day} 0${hour}:${minutes}`;
  else if (minutes < 10) return `${day} ${hour}:0${minutes}`;
  else return `${day} ${hour}:${minutes}`;
}
