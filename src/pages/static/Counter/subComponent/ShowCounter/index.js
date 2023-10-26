import "./index.css"
import { useCountdown } from "../../utility/countDownHook";
const ShowCounter = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const Data = [
    {
      text: "Days",
      value: days,
    },
    {
      text: "Hours",
      value: hours,
    },
    {
      text: "Minutes",
      value: minutes,
    },
    {
      text: "Seconds",
      value: seconds,
    },
  ]
  return (
    <div className="countdown-para">
      <p>EVENTS WILL STARTS AFTER</p>
      <div className="countdown">
        {/* <p>EVENT START IN</p> */}
        {
          Data?.map((el, idx) => {
            return (
              <div className="countdown-card">

                <div className="countdown-value">{el.value}</div>
                <div className="countdown-unit">{el.text}</div>

              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default ShowCounter;